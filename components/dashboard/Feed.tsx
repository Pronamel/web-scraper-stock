// components/dashboard/Feed.tsx
import PostCard from "./PostCard";

type FeedProps = {
  title: string;
  description: string;
};

export default function Feed({ title, description }: FeedProps) {
  const placeholderPosts = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>

      <div className="flex flex-col gap-3">
        {placeholderPosts.map((id) => (
          <PostCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
