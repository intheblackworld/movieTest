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
