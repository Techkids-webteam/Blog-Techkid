import React from "react";

export default class HeaderMenu extends React.Component{
  render(){
    return (
      <nav id="header" className="white_bg">
        <div className="row">
          <div className="col-sm-offset-1 col-sm-2">
            <div className="navbar header_icon">
              <button type="button" className="navbar-toggle collapsed glyphicon glyphicon-align-justify" data-toggle="collapse" data-target="#header_nav" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src="./images/logo.png" className="img-responsive"/></a>
            </div>
          </div>

          <div className="col-sm-8 col-sm-offset-1 header_menu_list nav-right">
            <div className="collapse navbar-collapse " id="header_nav">
                <ul className="nav navbar-nav">
                  <li><a href="http://techkids.vn/ve-chung-toi">Về Chúng Tôi</a></li>
                  <li className="dropdown">
                    <a href="http://techkids.vn/khoa-hoc" className="dropdown-toggle header_dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Các Khóa Học</a>
                  </li>
                  <li><a href="http://techkids.vn/chuong-trinh/">Các Sự Kiện</a></li>
                  <li><a href="http://techkids.vn/khoa-hoc/Free-Code-Intensive">Free Code Intensive</a></li>
                </ul>
            </div>
          </div>
      </div>
    </nav>
    );
  }
};
