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
			

