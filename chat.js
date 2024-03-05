// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCDKQpFcEktC-sFoTbbYUYI89-2tCeqvA4",
    authDomain: "projects-3c3d9.firebaseapp.com",
    databaseURL: "https://projects-3c3d9-default-rtdb.firebaseio.com",
    projectId: "projects-3c3d9",
    storageBucket: "projects-3c3d9.appspot.com",
    messagingSenderId: "304559370555",
    appId: "1:304559370555:web:13b8df6efedf1fab17071e"
  };
  
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



