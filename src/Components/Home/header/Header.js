import React from "react";

export default class Header extends React.Component{
  render(){
    return (
          <div className="row hidden-xs black_bg">
            <div className="col-sm-11 Header">
                <ul className="nav navbar-nav navbar-right home_header">
                  <li><a href="http://techkids.vn/">TRANG CHỦ</a></li>
                  <li><a href="http://techkids.vn/lien-he">LIÊN HỆ</a></li>
                </ul>
             </div>
          </div>
    );
  }
};
