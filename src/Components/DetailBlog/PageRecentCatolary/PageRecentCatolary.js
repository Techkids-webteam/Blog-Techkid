import React from "react";
import Detail from "../Detail/Detail";
import Catelory from "./../../Home/Catelory/Catelory";
export default class PageRecentCatolary extends React.Component{
    constructor(props){
      super(props)

      this.state = ({
        post: {}
      })
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      this.setState({
        post : nextProps.post
      })
    }



    render(){
      console.log(this.state)
      console.log(this.props)
      return (
          <div className="row PageRecentCatolary">
            <div className="col-sm-9">
              <Detail {...this.props.post}/>
            </div>
            <div className=" col-sm-3 text-right">
              <Catelory/>
            </div>

          </div>

    );
  }
};
