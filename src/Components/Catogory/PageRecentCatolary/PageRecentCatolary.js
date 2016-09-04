import React from "react";
import RecentPosts from "../RecentPosts/RecentPosts";
import Catelory from "../../Home/Catelory/Catelory";
export default class PageRecentCatolary extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      post: []
    })
  }




  render(){
    console.log(this.state.post)
    console.log(this.props)
    return (

        <div className="row">
          <div className="col-sm-8">
            <RecentPosts post={this.props.post}/>
          </div>
          <div className="col-sm-offset-1 col-sm-3 text-right">
            <Catelory/>
          </div>

        </div>

    );
  }
};
