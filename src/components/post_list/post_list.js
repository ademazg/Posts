import PostListItem from "../post_list_item";

const PostList = ({posts}) =>{
    const elements = posts.map((item,key)=>{
        return (
            <PostListItem {...item} key={key}/>
        )
    });
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default PostList;