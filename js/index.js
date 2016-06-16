// $('.profile-checkbox p input').on("click",function(){
//   if ($(this).siblings('label').hasClass('ischeck')) {
//
//       $(this).siblings('label').removeClass('ischeck');
//   }else{$(this).siblings('label').addClass('ischeck');}
//
// })
$(window).load(function(){
  $('.main-container,.nav-container,.nav-bar,.profile-nav,.admin_page,.admin-container').fadeIn(1000);
  $('.loading6').fadeOut(1000);
})


$().ready(function(){

  var limit = 4 ;
  $('.profile-checkbox p input').on('change', function(evt) {
   if($('.profile-checkbox p input:checked').length >= limit) {
       this.checked = false;
   }
});

	$('.menu li').on('click',function(){
        var index = $(this).data('index');
        $('.'+index).addClass('active');
        $('.'+index).siblings().removeClass('active');

      })

  $('.default').filter(function() { return $(this).val() == ""; }).parent('.input-field').find('label').addClass('focus-input');





  $('.alert_phone').click(function(result){
// <input id="activation_phone_verification_code_0" type="text" pattern="[0-9]*" class="text-center input-large phone-verification__code-input" placeholder="XXXX" data-reactid=".6.0.$=1$modal.0.0.0.0.1.$=1$verifications.1.$=1$phone_verified.$phone-verification-panel.3.0.1">
  //     swal({
  //     title: '使用電話認證',
  //     text: '註冊即表示同意Let`s Movie <服務條款，支付服務條款，隱私政策。',
  //     html:
  //       '<input id="swal-input1" class="swal2-input" type="tel" placeholder="電話號碼" autofocus maxlength="10">' +
  //       '<input id="swal-input2" class="swal2-input" type="password" placeholder="密碼" >'+
  //       '<input id="swal-input2" class="swal2-input" type="text" placeholder="輸入驗證碼" maxlength="6">'+
  //       '<input type="submit" class="check_number" value="發送驗證碼">'+
  //       '<p>註冊即表示同意Let`s Movie <a href="#">服務條款</a>，<a href="#">支付服務條款</a>，<a href="#">隱私政策</a>。</p>'+
  //       '<p class="down">已是會員？</p><a class="down" href="">登入</a>',
  //       confirmButtonText: '註冊',
  //     preConfirm: function() {
  //       return new Promise(function(resolve) {
  //         if (result) {
  //           resolve([
  //             $('#swal-input1').val(),
  //             $('#swal-input2').val()
  //           ]);
  //         }
  //       });
  //     }
  //   }).then(function(result) {
  //     if (result) {
  //       swal({
  //         title: '填寫個人資料',
  //         html:
  //           '<label>暱稱</label><input id="swal-input3" class="swal2-input" type="text" placeholder="暱稱" autofocus require>'+
  //           '<label>性別</label><select> <option value="男生">男生</option> <option value="女生">女生</option> </select>'+
  //           '<label>年齡</label><input id="swal-input5" class="swal2-input" type="text" placeholder="年齡" autofocus require>'+
  //           '<label>興趣</label><input id="swal-input7" class="swal2-input" type="text" placeholder="興趣" autofocus require>',
  //           preConfirm: function() {
  //             return new Promise(function(resolve) {
  //               if (result) {
  //                 resolve([
  //                   $('#swal-input3').val(),
  //                 ]);
  //               }
  //             });
  //           }
  //         }).then(function(result) {
  //           if (result) {
  //             swal('臉書登入');
  //           }
  //         })
  //
  //
  //     }
  //   })

    swal({
      title: '',
      html:
      '<div class="login-container">'+
      '<a class="fb-login" onclick="signUp()">臉書登入</a>'+
      '<div class="fb-like" data-colorscheme="dark" data-href="https://www.facebook.com/Lets-Movie-%E9%9B%BB%E5%BD%B1%E7%B4%84%E6%9C%83-737844822982371/?ref=bookmarks" data-width="300" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>'+
      '</div>'+
      '<hr>'+
      '<p class="down70">註冊即表示同意Let`s Movie <a href="service.html">服務條款</a>，<a href="reponsibility.html">免責聲明</a>，<a href="private.html">隱私政策</a>。</p>'+
      '<p class="down">已是會員？</p><a class="down" onclick="signUp()" style="cursor:pointer">登入</a>',
      showConfirmButton: false,
      showCloseButton: true,
    })
   });

});
