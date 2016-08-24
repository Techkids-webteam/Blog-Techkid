import React from "react";

export default class Scholarship extends React.Component{
  componentDidMount(){
    $(window).scroll(function(event) {

    // height of the document (total height)
    var d = $(document).height();

    // height of the window (visible page)
    var w = $(window).height();

    // scroll level
    var s = $(this).scrollTop();

    // bottom bound - or the width of your 'big footer'
    var bottomBound = 258;

    var width = $(window).width();
    var height = $(window).height();
    // if ((width <= 1023) && (height >= 768)) {
    //     alert('Do things');
    // } else {
    //     alert('Do nothing');
    // }

    // are we beneath the bottom bound?
    if(d - (w + s) < bottomBound) {
        // if yes, start scrolling our own way, which is the
        // bottom bound minus where we are in the page
        $('.sticky_bottom_footer .container').css({
            bottom: bottomBound - (d - (w + s))
        });
    } else {
        // if we're beneath the bottom bound, then anchor ourselves
        // to the bottom of the page in traditional footer style
        $('.sticky_bottom_footer .container').css({
            bottom: 0
        });
    }

  });

  $(document).ready(function(){
    $("#close").click(function(){
      $("#fade-out").fadeOut(800);
    });
  })
  
}
  render(){
    return (
      <div>
        <form method="GET" action="#" id="form-dk">
          <div id ="fade-out" className="sticky_bottom_footer hidden-xs hidden-sm hidden-md">
            <div className="container">
              <button type="button" id="close">×</button>
              <i className="fa fa-envelope-o imes" aria-hidden="true"></i>
              <h4>Muốn đọc nhiều hơn những bài viết hay từ TechKids? Đăng ký theo dõi nhé!</h4>
              <input type="Email" id="id_email" className="Scholarship_input" placeholder="Địa Chỉ Email..." name='Địa chỉ mail'/>
              <button className="register" id="submit_button"><span id="submit_text">ĐĂNG KÝ NGAY</span></button>
            </div>
          </div>
        </form>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p className="modal-title opensans" id="thong_bao"></p>
            <div className="g-recaptcha" data-sitekey="6LfWQyYTAAAAANnAOhP9dZoXUe8UMT2qxMCH1rn4" id="rcaptcha"></div>
            <button id="compelete" className="btn per">Hoàn thành</button>
          </div>
        </div>
      </div>
    );
  }
};
