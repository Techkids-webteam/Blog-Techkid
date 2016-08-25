import React from "react";

export default class BlogContentBlock extends React.Component{
  render(){
    return (
      <section className={'ilat_content_block ' +  this.props.background}>
          <div className="container">
            <div className="row">
              <div className="col-sm-11 text-center ">
                {this.props.children}
              </div>
            </div>
          </div>
      </section>
    );
  }
};
