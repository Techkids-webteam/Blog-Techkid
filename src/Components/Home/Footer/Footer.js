import React from "react";

export default class Footer extends React.Component{
  render(){
    return (
          <footer className="footer">
            <div className="container-fluid container">
                <div className="row">
                    <div className="col-sm-3">
                        <a href="#"><img src="../images/logo.png" className ="footer_logo"/></a>
                        <div className="row socials_list">
                            <a href="https://plus.google.com/u/2/" className="fa fa-google-plus-square col-sm-offset-2 col-sm-2"></a>
                            <a href="https://www.facebook.com/Techkids.Code.the.Change" className="fa fa-facebook-square col-sm-2"></a>
                            <a href="https://www.youtube.com/channel/UCkuxJcFwR-iFgThUPKwM_JA" className="fa fa-youtube col-sm-2"></a>
                        </div>

                    </div>
                    <div className="col-sm-3 footer_text">
                        <h5>Về chúng tôi</h5>
                        <p>Chúng tôi ở đây để tạo ra những con người có thể thay đổi thế giới. TechKids không phải là một trung tâm đi dạy Lập trình kiếm tiền, hay một trường học chỉ đọc, chép từ bao thế hệ. Đây là một cộng đồng toàn cầu của những người sẵn sàng trở thành những người giỏi nhất, khác biệt nhất trong thế giới công nghệ.</p>
                    </div>
                    <div className="col-sm-3 footer_text">
                        <h5>Tìm TechKids tại</h5>
                        <ul>
                            <li>TechHub Chùa Láng: Số 10, ngõ 121, Chùa Láng</li>
                            <li>TechHub Chùa Bộc: Số 101D, ngõ 95, Chùa Bộc</li>
                        </ul>
                        <p>Hotline: Ms. Ha: 0165 300 5670</p>
                        <p>Email: Techkidsvn@gmail.com</p>
                    </div>
                    <div className="col-sm-3 footer_text">
                        <h5><a href="#">Khóa học tại TechKids</a></h5>
                        <ul>
                            <li><a href="http://techkids.vn/khoa-hoc/code-for-kids">Code For Kids      </a></li>
                            <li> <a href="http://techkids.vn/khoa-hoc/code-for-everyone">Code For Everyone</a></li>
                            <li> <a href="http://techkids.vn/khoa-hoc/iOS">Khóa học Lập trình iOS</a></li>
                            <li> <a href="http://techkids.vn/khoa-hoc/android">Khóa học Lập trình Android</a></li>
                            <li> <a href="http://techkids.vn/khoa-hoc/web-fullstack">Khóa học Lập trình Fullstack Web </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
};
