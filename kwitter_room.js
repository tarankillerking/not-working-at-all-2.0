var firebaseConfig = {
  apiKey: "AIzaSyAibUZpOzgLOdHDWo72JdDnNYdqadoxfWM",
  authDomain: "kwitter-3f0a8.firebaseapp.com",
  databaseURL: "https://kwitter-3f0a8-default-rtdb.firebaseio.com",
  projectId: "kwitter-3f0a8",
  storageBucket: "kwitter-3f0a8.appspot.com",
  messagingSenderId: "225436328327",
  appId: "1:225436328327:web:41be34d2ffa3ba052fb322",
  measurementId: "G-92THPTZTWS"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
   username=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="welcome "+username
;
var roomname=document.getElementById("room_name").value

function addroom() {
  localStorage.setItem("room_name",roomname)
  firebase.database().ref("/").child(roomname).update({ purpose:"adding room name" });
  window.location="kwitter_page.html"
}