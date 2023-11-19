import { POSTS } from "../lib/fake-data";
import Link from "next/link"

export default function ListPage() {
  return (
    <div>
      {POSTS.map((p, key) => (
        <div className="m-5">
            <Link href={`/view/${key}`}>
                <Post post={p} key={key}/>
            </Link>
            <hr/>
        </div>
      ))}
    </div>
  );
}

function Post({ post }) {
  return (
    <div>
      <h2>{post.title} {post.likes}</h2>
      <p>{post.date}</p>
    </div>
  );
}