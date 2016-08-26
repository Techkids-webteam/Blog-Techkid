import React from "react";
import RecentPosts from "../RecentPosts/RecentPosts";
import Catelory from "../../Home/Catelory/Catelory";
export default class PageRecentCatolary extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      post: {}
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      post : nextProps.post
    })
  }

  render(){
    return (

        <div className="row">
          <div className="col-sm-8">
            <RecentPosts {...this.props.post}/>
          </div>
          <div className=" col-sm-4 text-right">
            <Catelory/>
          </div>

        </div>

    );
  }
};
