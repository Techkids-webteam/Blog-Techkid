import React from "react";

export default class Catelory extends React.Component{
  render(){
    return (
      <div className="">
          <div className="row">
            <div className="col-sm-7 hidden-xs Catolary_Title">
              <img src="../../images/catolory.png"/>
            </div>
            <div className="col-sm-12 visible-xs text-center ">
              <img  src="../../images/catoloryMobile.png"/>
            </div>
          </div>  
          <div className="col-sm-offset-3 col-sm-8 Catolary_Title_User">
            <p>ANH PHƯƠNG</p>
            <p>ANH PHƯƠNG</p>
            <p>ANH PHƯƠNG</p>
            <p>ANH PHƯƠNG</p>
          </div>
          <div className="col-sm-offset-3 col-sm-8  hidden-xs Catolary_from_register">
            <h4>Muốn đọc nhiều hơn nhưng bài viết hay từ Techkids?</h4>
            <p>Đăng ký theo dõi nhé!</p>
            <input type="text" placeholder="Địa Chỉ"/>
            <button>Đăng Ký</button>
          </div>
      </div>
    );
  }
};
