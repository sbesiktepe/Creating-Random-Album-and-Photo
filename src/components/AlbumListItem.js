import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useRemoveAlbumsMutation } from "../store";
import PhotoList from "./PhotoList";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumsMutation(album);

  const handleRemove = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        loading={results.isLoading}
        onClick={handleRemove}
        className="mr-4"
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumListItem;
