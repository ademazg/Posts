import {Component} from "react";
import AppHeader from "../app_header";
import SearchPanel from "../search_panel";
import PostStatusFilter from "../post_status_filter";
import PostList from "../post_list";
import PostAddForm from "../post_add_form";
import "./app.css";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {id: 1, label:"hello world!",important:true},
                {id: 2, label:"how are things",important:false},
                {id: 3, label:"going to learn",important:true}
            ],
            
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id===id);
            const before = data.slice(0,index);
            const after = data.slice(index+1);
            const newArray = [...before, ...after];
            return {
                data: newArray,
            }
        })
    }

    addItem(body){
        const newItem = {
            id: this.maxId++, 
            label:body,
            important:false
        }

        this.setState(({data})=>{
            const newData = [...data,newItem];
            return {
                data: newData
            }
        })
    }
    
    render(){
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts = {this.state.data} onDelete={this.deleteItem}/>
                <PostAddForm onAdd = {this.addItem}/>
            </div>
            
        )
    }
}

