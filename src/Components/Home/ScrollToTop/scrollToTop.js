import React from "react";

export default class ScrollToTop extends React.Component{
   componentDidMount(){
    $(document).ready(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
          } else {
          $('.scrollToTop').fadeOut();
          }
      });

        //Click event to scroll to top
      $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
      });

      });
    }
  render(){
    return (
          <div>
            <button type="button" href ="#" className="scrollToTop"><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
          </div>
    );
  }
};
