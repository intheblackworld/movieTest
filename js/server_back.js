	var myFirebaseRef = new Firebase("https://letusmovie.firebaseio.com/");
	var usersRef = myFirebaseRef.child("users");
	var activitysRef = myFirebaseRef.child("activitys")

	var allpeople = ""
	usersRef.on("value",function(all){
		
		console.log(Object.keys(all.val())[0]);
		for (i=0;i<all.numChildren();i++){
			allpeople = allpeople + Object.keys(all.val())[i] + "<br>";
			document.getElementById("allusers").innerHTML = allpeople
		}
	});
			
	// function whoJoinThatActivity(){
					activitysRef.on("value",function(all){	
						console.log(Object.keys(all.val())[0]);
						for (i=0;i<all.numChildren();i++){
							date = Object.keys(all.val())[i] ;

							var activityUserRef = "";
							activityUserRef = activitysRef.child(date);
							var allpeople = ""
							activityUserRef.on("value",function(all){
								for (i=0;i<all.numChildren();i++){
									allpeople = allpeople + Object.keys(all.val())[i]+" " +all.val()[Object.keys(all.val())[i]].mostLikeMovie + "<br><br>";
									document.getElementById("activity").innerHTML = allpeople
								}
						    });
						    }
					});
			// }

