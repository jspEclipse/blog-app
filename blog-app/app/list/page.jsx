import { POSTS } from "../lib/fake-data";
import Link from "next/link"

export default function ListPage() {
  return (
    <div>
      {POSTS.map((p) => (
        <div className="m-5">
            <Link href={`/view/${p.id}`}>
                <Post post={p} key={p.id}/>
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