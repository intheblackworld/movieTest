
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
                       });
                 }).catch(function(error) {
                   // An error occurred
                 });
                //  window.location = "/admin_profile.html";
                 }
// 臉書判斷是否登入
			var url = window.location.href;
			var lasturl = url.split('/').pop()
			var auth = firebase.auth();
			var name;
			var uid;
			auth.onAuthStateChanged(function(user) {
				if (user&& ((lasturl !=='admin_join.html')||(lasturl !=='admin_check.html')||(lasturl !=='admin_profile.html'))) {
  				// alert(lasturl);
					uid = user.uid;
					var name = user.displayName;
					var photoURL = user.photoURL;
					// console.log("uid :"+uid+" User Login");
					// console.log("name:"+name);
					// console.log("photo網址"+photoURL);
					//index.html
					$('.avatar, .user_name, .check_date, .logout').show();
					$('.fb_login').hide();
					$('#pic_my').attr("src",photoURL);
					$('.user_name p').text(name+ "，歡迎回來");


					//admin_profile
				} else if (!user&& ((lasturl !=='admin_join.html')||(lasturl !=='admin_check.html')||(lasturl !=='admin_profile.html'))){

					setTimeout(function() {
//your code to be executed after 1 second
					$('.fb_login').fadeIn();
}, 500);
					// User logged out
				}
         if (!user&& lasturl =='admin_join.html') {
					alert('你尚未登入喔');
	        window.location = "/index.html";
				}
        if (!user&& lasturl =='admin_check.html') {
         alert('你尚未登入喔');
         window.location = "/index.html";
       }
       if (!user&& lasturl =='admin_pro.html') {
        alert('你尚未登入喔');
        window.location = "/index.html";
      }
        if (user && lasturl =='admin_join.html') {
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
          $('.title h5').text(name);

				}
        if (user && lasturl =='admin_check.html') {
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
          $('.title h5').text(name);

				}
        if (user && lasturl =='admin_profile.html') {
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
          $('.title h5').text(name);

				}
			});



			function signOut(){
			    	firebase.auth().signOut().then(function() {
			   // Sign-out successful.
			 }, function(error) {
			   // An error happened.
			 });

	    }
