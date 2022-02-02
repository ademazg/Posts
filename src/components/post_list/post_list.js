import PostListItem from "../post_list_item";

const PostList = ({posts, onDelete}) =>{
    const elements = posts.map((item)=>{
        const {id, ...itemProps} = item;
        return (
            <PostListItem 
                {...itemProps} 
                key={id}
                onDelete={()=>onDelete(id)}/>
        )
    });
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default PostList;