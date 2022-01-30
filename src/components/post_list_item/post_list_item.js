import { Component} from "react";
import "./post-list-item.css";

export default class PostListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            important:false,
            like:false,
        }
        this.onImportant=this.onImportant.bind(this);
        this.onLike=this.onLike.bind(this);
    }
    onImportant(){
        this.setState(({important})=>({
            important: !important
        }))
    }
    onLike(){
        this.setState(({like})=>({
            like: !like
        }))
    }
    render(){
        const {label} = this.props;
        const {important, like} = this.state;
        let starImportant = important? " important":"",
            spanImportant = important? " importantSpan":"",
            heartLike = like?" like":"";
        return(
            <li className="app-list-item d-flex justify-content-between">
                <span className={"app-list-item-label" + spanImportant}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.onImportant} type="button" className={"btn-star btn-sm" +  starImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i onClick={this.onLike} className={"fa fa-heart" + heartLike }></i>
                </div>
            </li>
        );
    }
}

