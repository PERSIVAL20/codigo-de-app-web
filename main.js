
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB5GTzHyxPmTKeZx_YiC1EXLK2TDpuWzr0",
    authDomain: "app-web-525d9.firebaseapp.com",
    projectId: "app-web-525d9",
    storageBucket: "app-web-525d9.appspot.com",
    messagingSenderId: "291230412370",
    appId: "1:291230412370:web:89c7be497cc138f713798b"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';

  const Provider = new GoogleAuthProvider();

 const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
  

    signInWithPopup(auth, Provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "Loger.html";
      
    }).catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
    function updateUserProfile(user){
      const userName = user.displayName;
      const userEmail = user.email;
      const UserProfilePicture = user.photoUrl;

      document.getElementById("userName").textContent = userName;
      document.getElementById("userEmail").textContent = userEmail;
      document.getElementById("UserProfilePicture").src = UserProfilePicture;
    }
})