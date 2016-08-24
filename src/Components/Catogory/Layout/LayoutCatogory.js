import React from "react";
import ReactDOM from "react-dom";
import Header from "./../../Home/header/Header";
import Title from "./../../Home/Title/Title";
import BlogContentBlock from "../../Home/BlogContentBlock/BlogContentBlock";
import HeaderMenu from "./../../Home/HeaderMenu/HeaderMenu";
import PageRecentCatolary from "../../Home/PageRecentCatolary/PageRecentCatolary";
import Footer from "./../../Home/Footer/Footer";
import ScrollToTop from "../../Home/ScrollToTop/scrollToTop";
import Scholarship from "../../Home/Scholarship/Scholarship";

export default class LayoutCatogory extends React.Component{

  render() {
    return (
      <div id="catogory">
      <Header/>
      <HeaderMenu/>
      <BlogContentBlock><Title/></BlogContentBlock>
      <BlogContentBlock><PageRecentCatolary/></BlogContentBlock>
      <BlogContentBlock background="white_bg"><Footer/></BlogContentBlock>
      <Scholarship/>
      <ScrollToTop/>

      </div>
    );
  }
}
