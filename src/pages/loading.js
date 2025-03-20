import { PuffLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex justify-center items-center py-8">
      <PuffLoader color="#3498db" size={60} />
    </div>
  );
}