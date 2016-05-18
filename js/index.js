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



  $('.alert_phone').click(function(result){
// <input id="activation_phone_verification_code_0" type="text" pattern="[0-9]*" class="text-center input-large phone-verification__code-input" placeholder="XXXX" data-reactid=".6.0.$=1$modal.0.0.0.0.1.$=1$verifications.1.$=1$phone_verified.$phone-verification-panel.3.0.1">
      swal({
      title: '使用電話認證',
      html:
        '<input id="swal-input1" class="swal2-input" type="tel" placeholder="電話號碼" autofocus maxlength="10">' +
        '<input id="swal-input2" class="swal2-input" type="password" placeholder="密碼" >'+
        '<input id="swal-input2" class="swal2-input" type="text" placeholder="輸入驗證碼" maxlength="6">',
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
            '<input id="swal-input3" class="swal2-input" type="text" placeholder="暱稱" autofocus require>'+
            '<select> <option value="男生">男生</option> <option value="女生">女生</option> </select>'+
            '<input id="swal-input5" class="swal2-input" type="text" placeholder="年齡" autofocus require>'+
            '<input id="swal-input6" class="swal2-input" type="text" placeholder="職業" autofocus require>'+
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
