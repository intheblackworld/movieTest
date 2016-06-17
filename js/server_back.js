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


			firebase.database().ref('users').on("value",function(all){

						var userUID;

                    	new Vue({
                          el: '#app1',
                          data: {
                          	users:all.val(),
                          	query:'',
                          	faceScore:''
                          	},
                          methods:{
                              showDetail: function(x,score){
                                  userUID = x.uid;
                                  // document.getElementById('detail').className = 'show';
                                  // document.getElementById('detail').innerHTML = x.displayName;
                                  this.faceScore = score;
                                  console.log(userUID)
                                  firebase.database().ref('users/'+userUID).update({
                                  faceScore: this.faceScore
                                 });
                              },
                        //       updateUser: function(){
                        //       	console.log(userUID);
                        //       	firebase.database().ref('users/'+userUID).update({
                								// 	faceScore: this.faceScore
                								// });

                        //       }

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
                    	movie1:'',movie2:'',movie3:'',movie4:'',movie5:'',movie6:'',movie7:'',movie8:'',movie9:'',movie10:'',
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
                    	movie:[vm.movie1,vm.movie2,vm.movie3,vm.movie4,vm.movie5,vm.movie6,vm.movie7,vm.movie8,vm.movie9,vm.movie10],
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
                        console.log(this.activity_users);

                    })
                },
                status0:function(activity_user){
                  console.log(activity_user.activityId);
                  console.log(activity_user.userID);
                    firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'報名完成'});
                    firebase.database().ref('user-activities/'+activity_user.userID+'/'+activity_user.activityId).update({status:'報名完成'});
                },
                status1:function(activity_user){
                  console.log(activity_user.activityId);
                  console.log(activity_user.userID);
                    firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'無匯款，取消場次'});
                    firebase.database().ref('user-activities/'+activity_user.userID+'/'+activity_user.activityId).update({status:'無匯款，取消場次'});
                },
                status2:function(activity_user){
                  console.log(activity_user.activityId);
                  console.log(activity_user.userID);
                    firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'配對中'});
                    firebase.database().ref('user-activities/'+activity_user.userID+'/'+activity_user.activityId).update({status:'配對中'});
                },
                status3:function(activity_user){
                  console.log(activity_user.activityId);
                  console.log(activity_user.userID);
                    firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'已錄取，接收簡訊'});
                    firebase.database().ref('user-activities/'+activity_user.userID+'/'+activity_user.activityId).update({status:'已錄取，接收簡訊'});
                },
                status4:function(activity_user){
                  console.log(activity_user.activityId);
                  console.log(activity_user.userID);
                    firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'無錄取，配對失敗'});
                    firebase.database().ref('user-activities/'+activity_user.userID+'/'+activity_user.activityId).update({status:'無錄取，配對失敗'});
                },
                status5:function(activity_user){
                  console.log(activity_user.activityId);
                  console.log(activity_user.userID);
                    firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'退款中'});
                    firebase.database().ref('user-activities/'+activity_user.userID+'/'+activity_user.activityId).update({status:'退款中'});
                },
                status6:function(activity_user){
                  console.log(activity_user.activityId);
                  console.log(activity_user.userID);
                    firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'活動結束'});
                    firebase.database().ref('user-activities/'+activity_user.userID+'/'+activity_user.activityId).update({status:'活動結束'});
                },
            }
            });
        })

        // function status0(activity_user.activityId,activity_user.uid){
        //   firebase.database().ref('activity_users/'+activity_user.activityId).update('報名完成');
        //   firebase.database().ref('user_activities/'+activity_user.uid).update('報名完成');
        // }

        // function status3(activity_user.activityId,activity_user.uid){
        //   firebase.database().ref('activity_users/'+activity_user.activityId).update('已錄取，接收簡訊');
        //   firebase.database().ref('user_activities/'+activity_user.uid).update('已錄取，接收簡訊');
        // }

        // ==============

        firebase.database().ref('activities/').on("value",function(all){
          var au = all.val();

           var vm = new Vue({
            el: '#app5',
            data: {activities:all.val(),activity_users:{},week:"Mary",query:"",query2:"",query3:"",query4:""},
            methods:{
                showActivity:function(x){
                    var activityID = x.activityID

                    firebase.database().ref('activity-users/'+activityID).on("value",function(all2){
                         var au2 = all2.val();
                        this.activity_users=all2.val();
                        vm.$set('activity_users',all2.val());

                        for (i=0;i<all2.numChildren();i++){
                          var key = Object.keys(all2.val())[i];
                          var val = all2.val()[key];
                          firebase.database().ref('users/'+val.userID).on("value",function(all3){
                            var updates3={};
                            updates3['faceScore']=all3.val().faceScore;
                            firebase.database().ref('activity-users/'+activityID+'/'+val.userID).update(updates3);
                          });
                        }

                    });



                    // firebase.databese().ref('users/'+x.userID+'/faceScore').on("value",function(all3){
                    //       all3.val();

                    // });

                },
                showUserID:function(){
                  firebase.database().ref('activity-users/'+activity_user.activityId+'/'+activity_user.userID).update({status:'活動結束'});
                }
                }
            });
        })



// ==============
       var grouptestBoyT,grouptestGirlT;

       firebase.database().ref('grouptest/boy').on("value",function(all){
           grouptestBoyT = all.val();
           // console.log(grouptestBoyT);
        });
       firebase.database().ref('grouptest/girl').on("value",function(all){
           grouptestGirlT = all.val();
        });

       console.log(grouptestBoyT);

           var group = new Vue({
            el: '#apptest',
            data: {grouptestBoy:grouptestBoyT,grouptestGirl:grouptestGirlT},
            methods:{
              firstTest:function(){
                group.$set('grouptestBoy',grouptestBoyT);
                group.$set('grouptestGirl',grouptestGirlT);
                console.log(this.grouptestBoy,this.grouptestGirl);
              },
              secondTest:function(){
                var sizeB = Object.keys(this.grouptestBoy).length;
                var sizeG = Object.keys(this.grouptestGirl).length;
              for (i=0;i<sizeB;i++){
                var key = Object.keys(this.grouptestBoy)[i];
                var val = this.grouptestBoy[key];
                if (val.faceScore=="Face6"){
                    console.log(6)
                     for (k=0;k<sizeG;k++){
                      console.log(k);
                      console.log(Object.keys(group.grouptestGril)[k])
                         var key2 = Object.keys(group.grouptestGril)[k];
                         var val2 = group.grouptestGirl[key];
                         if (val2.faceScore=="Face6"){
                            // group.$set('grouptestBoy/girl',val2);

                         }
                     }
                }
                else{
                  console.log("no6")
                }


              }
              }
            }
            });
