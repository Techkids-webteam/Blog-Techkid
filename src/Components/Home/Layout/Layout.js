import React from "react";
import ReactDOM from "react-dom";
import Header from "./../header/Header";
import BlogContentBlock from "./../BlogContentBlock/BlogContentBlock";
import HeaderMenu from "./../HeaderMenu/HeaderMenu";
import Title from "./../Title/Title";
import NewPost from "./../NewPost/NewPost";
import PageRecentCatolary from "./../PageRecentCatolary/PageRecentCatolary";
import Footer from "./../Footer/Footer";
import ScrollToTop from "./../ScrollToTop/scrollToTop";
import Scholarship from "./../Scholarship/Scholarship";


export default class Layout extends React.Component{



  render() {
    return (
      <div id="home">
        <Header/>
        <HeaderMenu/>
        <BlogContentBlock><Title/></BlogContentBlock>
        <BlogContentBlock><NewPost/></BlogContentBlock>
        <BlogContentBlock><PageRecentCatolary /></BlogContentBlock>
        <Footer/>
        <Scholarship/>
        <ScrollToTop/>
      </div>
    );
  }
}
