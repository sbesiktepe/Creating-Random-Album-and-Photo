import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { removeUser } from "../store/thunks/userRemoveThunk";
import { useThunk } from "../hooks/useLoadingThunk";
import AlbumList from "./AlbumList";

const UserListItem = ({ user }) => {
  const [doRemove, isRemoveUserLoading, isRemoveUserError] =
    useThunk(removeUser);

  const handleRemove = () => {
    doRemove(user);
  };

  const header = (
    <>
      <Button
        loading={isRemoveUserLoading}
        onClick={handleRemove}
        className="mr-4"
      >
        <GoTrash />
      </Button>
      {user.name}
      {isRemoveUserError && isRemoveUserError.message}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
};

export default UserListItem;
