import React from "react";

export default class ButtonFacebook extends React.Component{
  constructor() {
    super();
  };

  componentDidMount(){
    if(window.FB) window.FB.XFBML.parse();
  }

  render(){
    var href = "http://techkids.vn:9799/#/layoutDetail/" + this.props.post;
    return(
      <div className="fb-like" data-href={href} data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true">
      </div>
    );
  }
}
