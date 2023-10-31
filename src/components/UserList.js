import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUser } from "../store";
import { useThunk } from "../hooks/useLoadingThunk";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";
import Button from "./Button";

const UserList = () => {
  const [doFetchUser, isFetchUserLoading, isFetchUserError] =
    useThunk(fetchUser);
  const [doAddUser, isAddUserLoading, isAddUserError] = useThunk(addUser);

  const handleAddUser = () => {
    doAddUser();
  };

  useEffect(() => {
    doFetchUser();
  }, [doFetchUser]);

  const { data } = useSelector((state) => {
    return state.users;
  });

  let content;

  if (isFetchUserLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (isFetchUserError) {
    content = <div>{isFetchUserError.message}</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between container mx-auto">
        <h2>Users</h2>
        <Button onClick={handleAddUser} loading={isAddUserLoading}>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
};

export default UserList;
