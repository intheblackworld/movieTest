
	
	var myFirebaseRef = new Firebase("https://letusmovie.firebaseio.com/");
	var usersRef = myFirebaseRef.child("users");
	var activitysRef = myFirebaseRef.child("activitys")



		function register(){
			variabes();
			myFirebaseRef.authWithOAuthPopup("facebook", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  }

			var phone_number = document.getElementById('phone_number').value;

			// var interests = document.getElementById('interests').value;
			// var age = document.getElementById('age').value;
			// console.log(age);
			var hopperRef = usersRef.child(authData.id);
			hopperRef.set({
			            // "age": age,
			            // "interests": interests,
			            "phone_number":phone_number,
			            "full_name": authData.facebook.displayName,
			            "photo": authData.facebook.profileImageURL
							}); 
			});
			return false;
		}


		

		function login(){
		 	var age_show = "年齡";
		 	var interests_show = "興趣";
		    var hopperRef ="";

			myFirebaseRef.authWithOAuthPopup("facebook", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  }

			  x = document.getElementById("name");
			  x.innerHTML=authData.facebook.displayName;
			  y = document.getElementById("img");
			  z = authData.facebook.profileImageURL;
			  y.src = z

			 hopperRef = usersRef.child(authData.uid);

			 hopperRef.once("value",function(some){
			    	 age_show = some.val().age;
			    	 interests_show = some.val().interests;
			    	  w = document.getElementById("interests_show");
			  w.innerHTML = interests_show ;
			  document.getElementById("age_show").innerHTML = age_show ; 
			    },function(errorObject){
			    	console.log(errorObject);
			    });

		 	// setCookie("username",authData.facebook.displayName);
				
				}
			// 	,{
			//   remember: "sessionOnly",
			//   scope: "email,user_likes"
			// }
			);

			}


			function relogin(){

			myFirebaseRef.onAuth(function(authData){
				if (authData){
					console.log("User " + authData.uid + " is logged in with " + authData.provider);					
					var authData = myFirebaseRef.getAuth();
				 	var age_show = "年齡";
				 	var interests_show = "興趣";
				    var hopperRef ="";
					  x = document.getElementById("user_name");
					  x2 = document.getElementById("user_name2");
					  x.innerHTML=authData.facebook.displayName;
					  x2.value=authData.facebook.displayName;
					  y = document.getElementById("Pic_My");
					  z = authData.facebook.profileImageURL;
					  y.src = z

					 hopperRef = usersRef.child(authData.uid);

					 hopperRef.once("value",function(some){
					  //   	 age_show = some.val().age;
					  //   	 interests_show = some.val().interests;
					  //   	  w = document.getElementById("interests_show");
					  // w.innerHTML = interests_show ;
					  // document.getElementById("age_show").innerHTML = age_show ; 
					    },function(errorObject){
					    	console.log(errorObject);
					    });

				} else {
					console.log("User is logged out");	
						}

			});

			}

			function logout(){
				myFirebaseRef.unauth();
				console.log("logout");
				window.location.reload();

			}


			function allusers_click(){
				var allpeople = ""
				usersRef.on("value",function(all){
					
					console.log(Object.keys(all.val())[0]);
					for (i=0;i<all.numChildren();i++){
						allpeople = allpeople + Object.keys(all.val())[i] + "<br><br>";
						document.getElementById("allusers").innerHTML = allpeople
					}
				});
			}

			function setCookie(cname, cvalue) {
		    	document.cookie = cname + "=" + cvalue ;
			}

			function getCookie(cname) {
			    var name = cname + "=";
			    var ca = document.cookie.split(';');
			    for(var i = 0; i <ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') {
			            c = c.substring(1);
			        }
			        if (c.indexOf(name) == 0) {
			            return c.substring(name.length,c.length);
			        }
			    }
			    return "";
			}

			window.onload = function (){
				  

					// aboutMe();
				    relogin();
				    // how_many_join("2016_5_15");
				    // how_many_join("2016_5_31");
				    // how_many_join("2016_6_15");
				    // how_many_join("2016_6_30");
				
			}

			function getName(authData) {
			  switch(authData.provider) {
			     case 'password':
			       return authData.password.email.replace(/@.*/, '');
			     case 'twitter':
			       return authData.twitter.displayName;
			     case 'facebook':
			       return authData.facebook.displayName;
			  }
			}

			function joinActivity(date,inputValue){
				myFirebaseRef.onAuth(function(authData){
				if (authData){
					console.log("User " + authData.uid + " is logged in with " + authData.provider);					
					var authData = myFirebaseRef.getAuth();
					var age_show2 = "年齡";
			 		var interests_show2 = "興趣";
			   		var hopperRef = "";
					hopperRef = usersRef.child(authData.uid);
					hopperRef.once("value",function(some){

							// //報名成功
							// var mostLikeMovie = "";
							// successSignActivity();

						    age_show2 = some.val().age;
						    interests_show2 = some.val().interests;
						    console.log(age_show2,interests_show2);
						  	var dateRef = activitysRef.child(date);
							var userJoinActivitRef = dateRef.child(authData.facebook.displayName)
							userJoinActivitRef.update({
					            "age": age_show2,
					            "interests": interests_show2,
					            "full_name": authData.facebook.displayName,
					            "mostLikeMovie":inputValue
				           	 		}); 
							usersRef.child(authData.uid).update({
								"myActivitys": date+"電影約會活動"
							});
							
						    },function(errorObject){
						    	console.log(errorObject);
						    	//報名失敗
						    	swal({title: "Error!",text: "Here's my error message!",type: "error",confirmButtonText: "Cool"});
							});

				 	
					}});
						
			};

			function successSignActivity(date){

				swal({   
					title: "輸入想看的電影",   
					text: "Write movie interesting:",   
					type: "input",   
					showCancelButton: true,   
					closeOnConfirm: false,   
					animation: "slide-from-top",   
					inputPlaceholder: "Write something" 
				}, function(inputValue){   
					if (inputValue === false) return false;      
					if (inputValue === "") {     
						swal.showInputError("You need to write something!"); 
						return false   
					}      
					//function加入活動資料庫
					joinActivity(date,inputValue);
					swal("報名成功!", "你最想要看的電影是「" + inputValue+"」"+"\n我們將會幫你配對適合你的對象與你一同看電影：）", "success"); 
				});
			}

			function whoJoinThatActivity(date){
					var activityUserRef = "";
					activityUserRef = activitysRef.child(date);
					var allpeople = ""
					activityUserRef.on("value",function(all){
						for (i=0;i<all.numChildren();i++){
							allpeople = allpeople + Object.keys(all.val())[i]+" " +all.val()[Object.keys(all.val())[i]].mostLikeMovie + "<br><br>";
							document.getElementById(date).innerHTML = allpeople
						}
				    });
			}
			
			function how_many_join(date){
				var activityUserRef = "";
					activityUserRef = activitysRef.child(date);
					var allpeople = ""
					activityUserRef.on("value",function(all){
						document.getElementById(date+"_how_many").innerHTML = all.numChildren();

				    });
			}


			function authDataCallback(authData) {
			  if (authData) {
			    console.log("User " + authData.uid + " is logged in with " + authData.provider);
			    return true
			  } else {
			    console.log("User is logged out");
			    return false
			  }
			}
			// Register the callback to be fired every time auth state changes
			// var ref = new Firebase("https://letusmovie.firebaseio.com");
			// ref.onAuth(authDataCallback);

			function aboutMe(){
				var isNewUser = true;
				usersRef.onAuth(function(authData) {
  					if (authData && isNewUser) {
						var name = getName(authData);
						var userRef = usersRef.child(authData.uid);
						var allactivitys = ""
						userRef.on("value",function(all){
							console.log(all.val());
								allactivitys = allactivitys + all.val().myActivitys
								document.getElementById("whichIJoin").innerHTML = allactivitys
					    });
						x = document.getElementById("whoAmI");
					 	x.innerHTML=name;
					 }
				})
			};
