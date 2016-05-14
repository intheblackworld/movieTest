$('.profile-checkbox p').on("click",function(){
  $(this).children('label').css({'color':'#26a69a'});
})

function phone(e){
var phone_num = document.querySelector('.test input').value;
console.log(phone_num);
alert(phone_num);
return false;
}

$().ready(function(){
	$('.menu li').on('click',function(){
        var index = $(this).data('index');
        $('.'+index).addClass('active');
        $('.'+index).siblings().removeClass('active');

      })

});

