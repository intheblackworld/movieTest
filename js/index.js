


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

