import { useAddAlbumsMutation, useFetchAlbumsQuery } from "../store";
import AlbumListItem from "./AlbumListItem";
import Skeleton from "./Skeleton";
import Button from "./Button";

const AlbumList = ({ user }) => {
  const { isLoading, data, isError } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumsMutation();

  const handleAddUser = () => {
    addAlbum(user);
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (isError) {
    content = <div>{isError.message}</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>
          Albums for <span className="text-red-400">{user.name}</span>
        </h2>
        <Button onClick={handleAddUser} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      {content}
    </div>
  );
};

export default AlbumList;
