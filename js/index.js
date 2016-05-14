function variable() {
  var name = $('.name').value;
  var nick_name = $('.nick_name').value;
  var phone = $('.phone').value;
  var hobby = $('#textarea1').value;
  $(function(){
     $('#save_value').click(function(){
       var val = [];
       $(':checkbox:checked').each(function(i){
         val[i] = $(this).val();
       });
     });
   });
}



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

});
