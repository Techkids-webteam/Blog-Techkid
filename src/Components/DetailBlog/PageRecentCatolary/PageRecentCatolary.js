import React from "react";
import Detail from "../Detail/Detail";
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
            <div className="col-sm-12">
              <Detail {...this.props.post}/>
            </div>
          </div>

    );
  }
};
