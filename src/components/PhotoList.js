import { useAddPhotosMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";
import Skeleton from "./Skeleton";

const PhotoList = ({ album }) => {
  const { isLoading, data, isError } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotosMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={2} className="h-10 w-full" />;
  } else if (isError) {
    content = <div>{isError.message}</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>
          Photos for <span className="text-red-400">{album.title}</span>
        </h2>
        <Button onClick={handleAddPhoto} loading={isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="flex gap-6">{content}</div>
    </div>
  );
};

export default PhotoList;
