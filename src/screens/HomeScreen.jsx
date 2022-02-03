import PostCard from "../components/Home/PostCard";

const posts = [
  {
    id: 1,
    name: "post 1",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    id: 2,
    name: "post 2",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    id: 3,
    name: "post 3",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

export default function HomeScreen() {
  return (
    <div>
      <h1>Home Screen</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
