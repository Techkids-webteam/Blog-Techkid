import React from "react";

export default class Scholarship extends React.Component{
  componentDidMount(){
    var captcha = document.getElementById('rcaptcha');
    var button_complete = document.getElementById('compelete');
    var modal = document.getElementById('myModal');
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    $('#form-dk').on('submit', function(e) {
      // Prevent form submission
      e.preventDefault();
      $('#thong_bao').empty();
      $('#thong_bao').append("Oops! ReCaptcha!");
      $('#thank').empty();
      modal.style.display = "block";
      captcha.style.display = "block";
      button_complete.style.display = "block";
    });

    $('#compelete').on('click', function(a) {
      var v = grecaptcha.getResponse();
      console.log(v);
      if (v.length == 0) {
        alert("You can't leave Captcha Code empty");
      }
      if (v.length != 0) {
        console.log("yes");
          var url = 'https://script.google.com/macros/s/AKfycbzPEZPmNLtjrg4D6Ukopfo6OMQAnNgzOGmIQt1jtRjbgCePJmPH/exec';

        var jqxhr = $.post(url, $('#form-dk').serialize(), function(data) {
            grecaptcha.reset();
            captcha.style.display = "none";
            button_complete.style.display = "none";
            console.log("Success! Data: " + data.statusText);
            $('#myModal').empty();
            $(location).attr('href', redirectUrl);
          })
          .fail(function(data) {
            console.warn("Error! Data: " + data.statusText);
            // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
            if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            }
          });
      }

    });
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
        <form method="POST" action="#" id="form-dk">
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
            <div className="g-recaptcha" data-sitekey="6LemYygTAAAAALoCU-8mgkR5E5EVM3NLgkGdBOoB" id="rcaptcha"></div>
            <button id="compelete" className="btn per">Hoàn thành</button>
          </div>
        </div>
      </div>
    );
  }
};
