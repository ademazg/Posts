//import react from "react";
import AppHeader from "../app_header";
import SearchPanel from "../search_panel";
import PostStatusFilter from "../post_status_filter";
import PostList from "../post_list";
import PostAddForm from "../post_add_form";
import "./app.css";

const App = () =>{
    const data = [
        {label:"hello world!",important:true},
        {label:"how are things",important:false},
        {label:"going to learn",important:true}
    ]
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </div>
        
    )
}

export default App;