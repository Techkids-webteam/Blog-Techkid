import React from "react";
export default class RegisterDowCategory extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <form  id="register-form">
          <div className="col-sm-12  hidden-xs Catolary_from_register">
            <div>
              <h4>Muốn đọc nhiều hơn nhưng bài viết hay từ Techkids?</h4>
              <p>Đăng ký theo dõi nhé!</p>
              <input type="Email" id="id_email" className="Scholarship_input" placeholder="Địa Chỉ Email..." name='Địa chỉ mail' required/>
            </div>
            <button id="submit-button" ><span  id="submit-text">Đăng Ký</span></button>
            <h4 id="notification" className="notification"></h4>
            <div id="form-loader" className='uil-rolling-css'>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </form>

      </div>
    );
  }
}
