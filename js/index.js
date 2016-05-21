$('.profile-checkbox p input').on("click",function(){
  if ($(this).siblings('label').hasClass('ischeck')) {

      $(this).siblings('label').removeClass('ischeck');
  }else{$(this).siblings('label').addClass('ischeck');}

})


function phonetests(e){
    alert(123);
    var text =$('#phone_number').val();
    console.log(text);
}






$().ready(function(){
	$('.menu li').on('click',function(){
        var index = $(this).data('index');
        $('.'+index).addClass('active');
        $('.'+index).siblings().removeClass('active');

      })

  $('.default').filter(function() { return $(this).val() == ""; }).parent('.input-field').find('label').addClass('focus-input');

  $('.pay-btn, .pay').click(function(result) {
    swal({
      title: '請選擇付款方式',
      html: '<a class="waves-effect waves-light btn btn-filled bank">銀行轉帳</a>'+
            '<a class="all-pay" href="https://qr.allpay.com.tw/yWn8q"><img src="https://payment.allpay.com.tw/Content/themes/WebStyle201404/images/allpay.png" /></a>'+
            '<div class="hide-text"><input type="text" placeholder="帳號末五碼"><p>匯款帳號：(808)1067979112384 </p><input type="submit" value="送出資料"></div>',
    })
    $('.swal2-confirm').css({'display':'none' });
    $('.swal2-modal').css({'top':'70%','height': '60%'});
    $('.bank').click(function(){$('.hide-text').fadeIn(300);})
  })


  $('.alert_phone').click(function(result){
// <input id="activation_phone_verification_code_0" type="text" pattern="[0-9]*" class="text-center input-large phone-verification__code-input" placeholder="XXXX" data-reactid=".6.0.$=1$modal.0.0.0.0.1.$=1$verifications.1.$=1$phone_verified.$phone-verification-panel.3.0.1">
      swal({
      title: '使用電話認證',
      text: '註冊即表示同意Let`s Movie <服務條款，支付服務條款，隱私政策。',
      html:
        '<input id="swal-input1" class="swal2-input" type="tel" placeholder="電話號碼" autofocus maxlength="10">' +
        '<input id="swal-input2" class="swal2-input" type="password" placeholder="密碼" >'+
        '<input id="swal-input2" class="swal2-input" type="text" placeholder="輸入驗證碼" maxlength="6">'+
        '<input type="submit" class="check_number" value="發送驗證碼">'+
        '<p>註冊即表示同意Let`s Movie <a href="#">服務條款</a>，<a href="#">支付服務條款</a>，<a href="#">隱私政策</a>。</p>'+
        '<p class="down">已是會員？</p><a class="down" href="">登入</a>',
        confirmButtonText: '註冊',
      preConfirm: function() {
        return new Promise(function(resolve) {
          if (result) {
            resolve([
              $('#swal-input1').val(),
              $('#swal-input2').val()
            ]);
          }
        });
      }
    }).then(function(result) {
      if (result) {
        swal({
          title: '填寫個人資料',
          html:
            '<label>暱稱</label><input id="swal-input3" class="swal2-input" type="text" placeholder="暱稱" autofocus require>'+
            '<select> <option value="男生">男生</option> <option value="女生">女生</option> </select>'+
            '<input id="swal-input5" class="swal2-input" type="text" placeholder="年齡" autofocus require>'+
            '<select> <option value="男生">男生</option> <option value="女生">女生</option> </select>'+
            '<input id="swal-input7" class="swal2-input" type="text" placeholder="興趣" autofocus require>'+
            '<input id="swal-input8" class="swal2-input" type="text" placeholder="暱稱" autofocus require>',
            preConfirm: function() {
              return new Promise(function(resolve) {
                if (result) {
                  resolve([
                    $('#swal-input3').val(),
                  ]);
                }
              });
            }
          }).then(function(result) {
            if (result) {
              swal('註冊完成');
            }
          })


      }
    })
  });

});
