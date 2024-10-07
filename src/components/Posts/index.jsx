import { PostCard } from "../PostCard"
import './posts.css';

export const Posts = ({ posts }) => (
    <div className="posts">
      {posts.map(post => (
      <PostCard
      key={post.id}
      cover={post.cover}
      title={post.title}
      body={post.body} 
      id={post.id}
      />
      ))}
   </div>
)