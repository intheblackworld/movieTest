var config = {
                apiKey: "AIzaSyAuzEl07MHtqY68GScLEdGen7Pwxe4AsTY",
                authDomain: "project-1685736578378459097.firebaseapp.com",
                databaseURL: "https://project-1685736578378459097.firebaseio.com",
                storageBucket: "project-1685736578378459097.appspot.com",
              };
 firebase.initializeApp(config);


 function signUp(){
                   var auth = firebase.auth();
                   var provider = new firebase.auth.FacebookAuthProvider();
                   auth.signInWithPopup(provider).then(function(result) {
                   var uid = result.user.uid;
                   var displayName = result.user.displayName;
                   var photoURL = result.user.photoURL;
        			  var email = result.user.email;

                     firebase.database().ref('users/'+uid).update({
                                      uid: uid,
                                     displayName: displayName,
                                     photoURL: photoURL,
                                     email:email,
                   //                   lineID:' ',
 						            // phone:' ',
 						            // nickname:'',
 						            // gender:'',
 						            // age:'',
 						            // description:[],
 						            // profession:'',
 						            // interests:'',
 						            // faceScore:''

                       });
                 }).catch(function(error) {
                   // An error occurred
                 });
                 }
// 臉書判斷是否登入
var auth = firebase.auth();
			var name;
			var uid;
			auth.onAuthStateChanged(function(user) {
				if (user) {
					uid = user.uid;
					var name = user.displayName;
					var photoURL = user.photoURL;
					console.log("uid :"+uid+" User Login");
					console.log("name:"+name);
					console.log("photo網址"+photoURL);
					//index.html
					$('.avatar, .user_name, .check_date, .logout').show();
					$('.fb_login').hide();
					$('#pic_my').attr("src",photoURL);
					$('.user_name p').text(name+ "，歡迎回來");

					//admin_profile
				} else {
						$('.fb_login').show();
						console.log("沒登入");
					// User logged out
				}
			});


			firebase.database().ref('users').once("value").then(function(all){

						var userUID;

                    	new Vue({
                          el: '#app1',
                          data: {
                          	users:all.val(),
                          	query:'',
                          	faceScore:''
                          	},
                          methods:{
                              showDetail: function(x){
                                  userUID = x.uid;
                                  document.getElementById('detail').className = 'show';
                                  // document.getElementById('detail').innerHTML = x.displayName;
                                  this.faceScore = x.faceScore;
                                  console.log(userUID)
                              },
                              updateUser: function(){
                              	console.log(userUID);
                              	firebase.database().ref('users/'+userUID).update({
									faceScore: this.faceScore
								}).catch(function(error) {
				                  // An error occurred
				                });
				                document.getElementById('detail').className = 'hide';
				                window.location.reload();
                              }

                          // computed:{
                          // 	users.uid.genderX:function(){
                          // 		if (users.uid.gender == "男"){
                          // 			return '帶棒的';
                          // 		}
                          // 		else {return }
                          // 	}
                          // }

                          }
                        });
                });

// ===========================================================

			 var vm = new Vue({
                      el: '#app2',
                      data: {
                        activityID:'',
                    	name:'',
                    	subject:'',
                    	dateSignUp:'',
              			dateMatch:'',
             			dateActivity:'',
                    	movie:[],
                    	location:[],
                    	users:[],
                    	// freeTime:[],
                    	status:'',
                    	//0:不能報名,1:可以報名,2:結束了（不會顯示）
                      }
   });

function signUpActivity(){

var index;
 firebase.database().ref('activities').once("value").then(function(all){
                     index = Object.keys(all.val()).length;

});

                   var activityPush = firebase.database().ref('activities').push({

                        activityID:'',
                    	// index:vm.index,
                    	name:vm.name,
                    	subject:vm.subject,
                    	dateSignUp:vm.dateSignUp,
              			dateMatch:vm.dateMatch,
             			dateActivity:vm.dateActivity,
                    	movie:vm.movie,
                    	location:vm.location,
                    	users:[],
                    	freeTime:[],
                    	status:vm.status,

                      });

                     console.log(activityPush.key);
                         var updates = {};
                         updates["activityID"]=activityPush.key;
                         firebase.database().ref('activities/'+activityPush.key).update(updates);

                    	vm.name='';
                    	vm.subject='';
                    	vm.dateSignUp='';
              			vm.dateMatch='';
             			vm.dateActivity='';
                    	vm.movie='';
                    	vm.location=[];
                    	vm.status='';

                    	alert('建立活動成功');


                }



// ========================

		// var _activityID = document.getElementById('_activityID').value;

        //  firebase.database().ref('activity-users/'+_activityID).once("value").then(function(all){
        //  	var au = all.val();

        //    new Vue({
        //     el: '#app3',
        //     data: {activity_users:all.val()},
        //     });
        // })


         firebase.database().ref('activities/').on("value",function(all){
         	var au = all.val();

           var vm = new Vue({
            el: '#app4',
            data: {activities:all.val(),activity_users:{},week:"Mary"},
            methods:{
                showActivity:function(x){
                    console.log(x.activityID);
                    var activityID = x.activityID

                    firebase.database().ref('activity-users/'+activityID).on("value",function(all2){
                         var au2 = all2.val();
                        this.activity_users=all2.val();
                        vm.$set('activity_users',all2.val());
                        console.log(all2.val());
                        console.log(this.activity_users);
                         vm.$set('week', 'kevin');

                    })

                }
            }
            });
        })
