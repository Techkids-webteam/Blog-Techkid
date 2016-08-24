import React from "react";
import ReactDOM from "react-dom";
import Header from "./../../Home/header/Header";
import BlogContentBlock from "./../BlogContentBlock/BlogContentBlock";
import HeaderMenu from "./../../Home/HeaderMenu/HeaderMenu";
import PageRecentCatolary from "../PageRecentCatolary/PageRecentCatolary";
import NewPost from "./../../Home/NewPost/NewPost";
import Footer from "./../../Home/Footer/Footer";
import ScrollToTop from "./../../Home/ScrollToTop/scrollToTop";
import Scholarship from "./../../Home/Scholarship/Scholarship";

export default class LayoutDetail extends React.Component{

    constructor() {
      super()
      this.state = ({
        post: []
      })
    }

    componentDidMount() {
      let id = this.props.params.id
      $.ajax({
          type: 'GET',
          url: 'http://techkids.vn:9196/api/blog/getBlog/'+ id, 
          cache : false,
          success: function(res){
            this.setState({
              post : res
            })
          }.bind(this),
          error: function(err){ 
            console.log(err)
          }.bind(this)
      })
    }

    componentWillReceiveProps(nextProps){
      console.log("Update" + nextProps.params.id);
      let id = nextProps.params.id
      $.ajax({
          type: 'GET',
          url: 'http://techkids.vn:9196/api/blog/getBlog/'+ id, 
          cache : false,
          success: function(res){
            this.setState({
              post : res
            })
          }.bind(this),
          error: function(err){ 
            console.log(err)
          }.bind(this)
      })
    }

  
  render() {
    return (
      <div id="detail">
        <Header/>
        <HeaderMenu/>
        <BlogContentBlock><PageRecentCatolary post = {this.state.post}/></BlogContentBlock>
        <BlogContentBlock><NewPost/></BlogContentBlock>
        <BlogContentBlock background="white_bg"><Footer/></BlogContentBlock>
        <Scholarship/>
        <ScrollToTop/>
        
      </div>
    );
  }
}

