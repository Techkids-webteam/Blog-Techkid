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
