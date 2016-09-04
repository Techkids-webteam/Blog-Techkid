import React from "react";
import { IndexLink, Link, withRouter } from "react-router";


export default class Pagination extends React.Component{

  constructor(props) {
    super(props);
  }

  render () {
    var Posts = this.props.post.map((item,index) =>{
      return (
          <li key={index} className={this.props.page == parseInt(item) ? "active" : ""}><a onClick={this.props.HandPageClick.bind(null,item)}>{item}</a></li>
        )
      })

    return (
      <div id="pagination">
          <ul className="pagination">
            <li ><a id="arrowPrev" onClick={this.props.previous}>&laquo;</a></li>
              {Posts}
            <li><a id="arrowNext" onClick={this.props.next}>&raquo;</a></li>
          </ul>
      </div>
    )
  }
};
