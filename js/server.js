
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


										firebase.database().ref('users/'+uid).update({
																		 uid: uid,
																		displayName: displayName,
																		photoURL: photoURL

											});
								}).catch(function(error) {
									// An error occurred
								});
								}
							// 臉書判斷是否登入
								var auth = firebase.auth();
											var name;
											auth.onAuthStateChanged(function(user) {
												if (user) {
													var uid = user.uid;
													var name = user.displayName;
													var photoURL = user.photoURL;

													console.log("uid :"+uid+" User Login");
													console.log("name:"+name);
													console.log("photo網址"+photoURL);

												} else {

														console.log("沒登入");
													// User logged out
												}
											});
