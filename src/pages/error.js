import { XCircleIcon } from '@heroicons/react/24/outline';

export default function Error({ message }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center space-x-2 bg-red-100 text-red-700 p-4 rounded-md shadow-md">
        <XCircleIcon className="w-6 h-6" />
        <span>{message || 'خطا در بارگذاری اطلاعات'}</span>
      </div>
    </div>
  );
}
