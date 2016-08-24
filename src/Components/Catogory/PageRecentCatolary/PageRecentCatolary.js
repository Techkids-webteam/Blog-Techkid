import React from "react";
import RecentPosts from "../RecentPosts/RecentPosts";
import Catelory from "../../Home/Catelory/Catelory";
export default class PageRecentCatolary extends React.Component{


  render(){
    return (
        <div className="row">
          <div className="col-sm-8">
            <RecentPosts />
          </div>
          <div className=" col-sm-4 text-right">
            <Catelory/>
          </div>

        </div>

    );
  }
};
