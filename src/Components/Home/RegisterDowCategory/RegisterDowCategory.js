import React from "react";
export default class RegisterDowCategory extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    $('#register-form').on('submit', function(e){
      e.preventDefault();
      $('#submit-button').css('display', 'none');
      $('#form-loader').css('display', 'block');
      $('#submit-text').css('display', 'none');
      $('#submit-button').attr('disabled', 'true');

      var url = 'https://script.google.com/macros/s/AKfycbzPEZPmNLtjrg4D6Ukopfo6OMQAnNgzOGmIQt1jtRjbgCePJmPH/exec';

        var jqxhr = $.post(url, $('#register-form').serialize(), function(data) {
          $('#form-loader').css('display', 'none');
          $('#notification').css('display', 'block');
          $('#notification').html('Bạn đã đăng ký thành công!');
            console.log("Success! Data: " + data.statusText);
      });
    });

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
          </div>
          <div id="form-loader" className='uil-rolling-css'>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </form>

      </div>
    );
  }
}
