import { POSTS } from "../../lib/fake-data"
export default function ViewPage({ params }) {
    let index = params.post_id;

    return (
        <div>
            <div>{POSTS[index].title}</div>
            <div>{POSTS[index].text}</div>
            <div>{POSTS[index].date}</div>
            <div>Likes: {POSTS[index].likes}</div>
        </div>
    )
}