
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

                     firebase.database().ref('users/'+uid).set({
                                      uid: uid,
                                     displayName: displayName,
                                     photoURL: photoURL,
                                     email:email,
                                     lineID:' ',
 						            phone:' ',
 						            nickname:'',
 						            gender:'',
 						            age:'',
 						            description:[],
 						            profession:'',
 						            interests:'',
 						            faceScore:''

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



			function signOut(){

			    	firebase.auth().signOut().then(function() {
			   // Sign-out successful.
			 }, function(error) {
			   // An error happened.
			 });

	    }
