import React from "react";
import Catelory from "./../../Home/Catelory/Catelory";
import Remarkable from  'remarkable'
export default class Detail extends React.Component{
  constructor(){
    super()
  }
  rawMarkup(text) {
      let md = new Remarkable();
      let rawMarkup = md.render(text);
      return { __html: rawMarkup };
  }
  componentDidUpdate(){
    $("html, body").scrollTop(0);
  }
  render(){
    var date = new Date(this.props.createdAt);
    var shortTime = date.toLocaleTimeString().toLowerCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
    var shortDate = (date.getMonth() + 1) + "-" +  date.getDate() + "-" +  date.getFullYear();
    return (
        <div className="">
          <div className="row">
            <div className="col-sm-9 text-left">
              <h1>{this.props.title}</h1>
              <p>{this.props.category} | {shortDate + " " + shortTime}</p>

              <div className="row">

                <div className="col-sm-6">
                  <div className="row Detail_human">
                    <div className="col-sm-2 ">
                      <img src="../../images/circle.png"/>
                    </div>
                    <div className="col-sm-8 circle">
                      <p>Được đăng bởi Quỳnh Như</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="navbar list_socical ">
                    <i className="fa fa-twitter twitter" aria-hidden="true"></i>
                    <i className="fa fa-google-plus-official google" aria-hidden="true"></i>
                    <i className="fa fa-facebook-square facebook" aria-hidden="true"></i>
                  </div>
              </div>

              </div>
            </div>

            <div className="row">

              <div className="col-sm-8 Detail_content">
                <img src={this.props.image_url}/>
                <p dangerouslySetInnerHTML={this.rawMarkup(this.props.content)}></p>
              </div>

              <div className="col-sm-offset-1 col-sm-3 text-right Detail_catogory">
                <Catelory/>
              </div>

            </div>
          </div>
        </div>

    );
  }
};
