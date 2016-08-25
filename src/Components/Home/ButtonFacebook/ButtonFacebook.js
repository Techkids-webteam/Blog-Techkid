import React from "react";

export default class ButtonFacebook extends React.Component{
  constructor() {
    super();
  };
  componentDidUpdate(){
    (function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
  }
  render(){
    return(
      <div>
        <div className="fb-like" data-href="https://www.facebook.com/Techkids.Code.the.Change/?fref=ts" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true">
        </div>
        <div id="fb-root"></div>
      </div>
    );
  }
}
