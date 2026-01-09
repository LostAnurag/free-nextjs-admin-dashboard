import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = 'w-full', 
  height = 'h-4', 
  rounded = false 
}) => {
  return (
    <div 
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${width} ${height} ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
    />
  );
};

export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4">
          <Skeleton width="w-8" height="h-8" rounded />
          <div className="flex-1 space-y-2">
            <Skeleton width="w-3/4" height="h-4" />
            <Skeleton width="w-1/2" height="h-3" />
          </div>
          <Skeleton width="w-16" height="h-4" />
          <Skeleton width="w-20" height="h-4" />
          <Skeleton width="w-12" height="h-4" />
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Skeleton width="w-11" height="h-11" rounded />
        <div className="flex-1 space-y-2">
          <Skeleton width="w-24" height="h-4" />
          <Skeleton width="w-16" height="h-6" />
        </div>
      </div>
    </div>
  );
};

export const ProspectTableSkeleton: React.FC<{ rows?: number }> = ({ rows = 8 }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Company</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Industry</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Source</th>
            <th className="px-6 py-3">Created</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">
                <Skeleton width="w-32" height="h-4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton width="w-28" height="h-4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton width="w-36" height="h-4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton width="w-24" height="h-4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton width="w-20" height="h-4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton width="w-16" height="h-6" rounded />
              </td>
              <td className="px-6 py-4">
                <Skeleton width="w-18" height="h-4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton width="w-20" height="h-4" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <Skeleton width="w-4" height="h-4" />
                  <Skeleton width="w-4" height="h-4" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};