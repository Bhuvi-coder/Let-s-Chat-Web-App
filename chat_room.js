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
  
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"! :D";
    
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding user"
          });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="chat_page.html";
}

function logOut()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}