// components/dashboard/PostCard.tsx
type PostCardProps = {
  id: number;
};

export default function PostCard({ id }: PostCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <p className="text-gray-800">Placeholder post {id}</p>
    </div>
  );
}
