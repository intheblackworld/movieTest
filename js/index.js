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

      swal({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input" type="tel" autofocus>' +
        '<input id="swal-input2" class="swal2-input" type="password">',
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
            '<input id="swal-input3" class="swal2-input" type="text" placeholder="暱稱" autofocus require>',
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
