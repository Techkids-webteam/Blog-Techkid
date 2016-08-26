import React from "react";
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
            <p><Link  to={`/layoutCategory/${post.title}`}>{post.title}</Link></p>
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
          <form method="POST" action="#" id="formdk">
            <div className="col-sm-12  hidden-xs Catolary_from_register">
              <h4>Muốn đọc nhiều hơn nhưng bài viết hay từ Techkids?</h4>
              <p>Đăng ký theo dõi nhé!</p>
              <input type="Email" id="id_email" className="Scholarship_input" placeholder="Địa Chỉ Email..." name='Địa chỉ mail'/>
              <button><span>Đăng Ký</span></button>
            </div>
          </form>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <p className="modal-title opensans" id="thong_bao"></p>
              <div className="g-recaptcha" data-sitekey="6LemYygTAAAAALoCU-8mgkR5E5EVM3NLgkGdBOoB" id="rcaptcha"></div>
              <button id="compelete" className="btn per">Hoàn thành</button>
            </div>
          </div>
      </div>
    );
  }
};
