// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCkLGfjS3NfG3ep_Kl74aICX_zDfcdxYmk",
    authDomain: "let-s-chat-web-app-ee87e.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-ee87e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "let-s-chat-web-app-ee87e",
    storageBucket: "let-s-chat-web-app-ee87e.appspot.com",
    messagingSenderId: "814404124278",
    appId: "1:814404124278:web:0159b955768a852d8a6957"
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



