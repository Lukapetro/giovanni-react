import { useState } from "react";

export default function PostCard({ post }) {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={handleClick}>Mostra content</button>
      <h2>{post.name}</h2>
      {showContent && <p>{post.content}</p>}
    </div>
  );
}
