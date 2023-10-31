import { GoTrash } from "react-icons/go";
import { useRemovePhotosMutation } from "../store";

const PhotoListItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotosMutation();

  const handleRemove = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative">
      <img src={photo.url} alt="random pic" />
      <div
        onClick={handleRemove}
        className="absolute inset-0 flex justify-center items-center bg-gray-200 opacity-0 hover:opacity-75 cursor-pointer"
      >
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotoListItem;
