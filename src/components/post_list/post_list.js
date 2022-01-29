import PostListItem from "../post_list_item";

const PostList = () =>{
    return(
        <ul className="app-list list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    );
}

export default PostList;