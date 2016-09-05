import React from "react";
import ReactDOM from "react-dom";
import Header from "./../../Home/header/Header";
import Title from "./../../Home/Title/Title";
import BlogContentBlock from "../../Home/BlogContentBlock/BlogContentBlock";
import HeaderMenu from "./../../Home/HeaderMenu/HeaderMenu";
import PageRecentCatolary from "../PageRecentCatolary/PageRecentCatolary";
import Footer from "./../../Home/Footer/Footer";
import ScrollToTop from "../../Home/ScrollToTop/scrollToTop";
import Scholarship from "../../Home/Scholarship/Scholarship";

export default class LayoutCategory extends React.Component{
  constructor() {
    super();
    this.state = ({
      post : []
    })
    console.log(this.state.post)
  };

  componentDidMount() {
    let category = this.props.params.category;
    let number = this.props.params.number;
    console.log("category"+category);
    $.ajax({
        type    : 'GET',
        url:  'http://techkids.vn:9196/api/blog/getBlogsByCategory/' + category +"/"+ number,
        cache   : false,
        success : function(res){
          console.log(res)
          this.setState({
            post : res.items
          })
        }.bind(this),
        error: function(err){
          console.log(err)
        }.bind(this)
    })
  }
  componentWillReceiveProps(nextProps){
    console.log("Update" + nextProps.params.id);
    let category = nextProps.params.category;
    let number = nextProps.params.number
    $.ajax({
        type: 'GET',
        url:  'http://techkids.vn:9196/api/blog/getBlogsByCategory/' + category +"/"+number,
        cache : false,
        success: function(res){
          this.setState({
            post : res.items
          })
        }.bind(this),
        error: function(err){
          console.log(err)
        }.bind(this)
    })
  }




  render() {
    console.log(this.state.post);
    return (
      <div id="catogory">
        <Header/>
        <HeaderMenu/>
        <BlogContentBlock><Title/></BlogContentBlock>
        <BlogContentBlock><PageRecentCatolary post={this.state.post}/></BlogContentBlock>
        <Footer/>
        <Scholarship/>
        <ScrollToTop/>
      </div>
    );
  }
}
