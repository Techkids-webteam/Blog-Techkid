import React from "react";
import RegisterDowCategory from "../RegisterDowCategory/RegisterDowCategory";
import { IndexLink, Link, withRouter } from "react-router";

export default class Catelory extends React.Component{
  constructor(){
    super();
    this.state = {
      blog: [],
    }
  }

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: 'http://techkids.vn:9196/api/blog/getCategories',
      cache : false,
      success: function(res){
        this.setState({
          blog: res
        })
      }.bind(this),
      error: function(err){
        console.log(err)
      }.bind(this)
    })
  }
  render(){
    var Posts = this.state.blog.map((post) =>{

      return (
          <div key={post._id} className="catogory" >
            <p><Link  to={`/layoutCategory/${post.title}/1`}>{post.title}</Link></p>
          </div>
      )
    })
    return (
      <div className="">
          <div className="row">
            <div className="hidden-xs Catolary_Title">
              <img src="../../images/catolory.png"/>
            </div>
            <div className="col-sm-12 visible-xs text-center ">
              <img  src="../../images/catoloryMobile.png"/>
            </div>
          </div>
          <div className="col-sm-12 Catolary_Title_User">
            {Posts}
          </div>
          <RegisterDowCategory/>
      </div>
    );
  }
};
