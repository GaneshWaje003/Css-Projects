// ? universal variables

var bodyElement = document.querySelector('body')








// ? Time declaration technique

const now = new Date();
const day = now.getDay();
const hour = now.getHours();
const minute = now.getMinutes();



// play-list-collase-icon-2
var playlist_section_items = document.getElementsByClassName("logo_collapse");
var search_recent_logo = document.getElementById("search_recent_logo");
var heading_playlist = document.getElementById("headingTitles");
var search_logo = document.getElementById("logo-search");


// your section collapse button
var mainSection = document.getElementById("main-section-1");
var state = 0;
var click_again = document.getElementById("linking-tag");

function collpase(){

  if(state==1){
    mainSection.style.width="700px";
    search_recent_logo.style.visibility="visible"
    heading_playlist.style.visibility="visible"
    state = 0;    
  }else{
    mainSection.style.width="50px";
    heading_playlist.style.visibility="hidden"
    search_recent_logo.style.visibility="hidden"
    state = 1;
  }
  
}

function logoAddPlaylist(){
  alert("clieck");
}

function logoChangeToGrid(){
  alert("clieck grid" );
}


var c_state_2 = 0;


function logoCollapse400px(){
  if(c_state_2 == 1){
    mainSection.style.width="700px";
    search_logo.style.marginRight="0"
    heading_playlist.style.visibility="visible"

    // search & recent 

    search_recent_logo.style.display="inline-block"
    search_recent_logo.style.width="119px";
    search_recent_logo.style.marginTop="0"
    c_state_2=0;
  }else{
    mainSection.style.width="400px";
    search_logo.style.marginRight="220px"
    heading_playlist.style.visibility="hidden"
    search_recent_logo.style.display="block"
    search_recent_logo.style.width="100%";
    search_recent_logo.style.marginTop="20px"
    c_state_2=1;
  }

}




// ? First Grid Layout Hover effect for changing the playbutton 

var mainsection = document.getElementsByClassName("made-for");
var grid_items = document.getElementsByClassName("flex-items-made-for");
var goodmorning = document.getElementsByClassName("well-wishes");
var uppernav = document.getElementsByClassName("upper-nav");
var playbutton = document.getElementsByClassName("play-button-seciton-made-for-grid-layout");





// for div-0

grid_items[0].addEventListener("mouseover",function(){
  mainsection[0].style.backgroundImage="linear-gradient(grey,black)"
  goodmorning[0].style.backgroundColor="grey";
  uppernav[0].style.backgroundColor="grey";
  playbutton[0].style.visibility="visible";
})

grid_items[0].addEventListener("mouseout",function(){
  mainsection[0].style.backgroundImage="linear-gradient(1deg,black 20%,grey 80%)"
  goodmorning[0].style.backgroundColor="#4c4f4f";
  uppernav[0].style.backgroundColor="#4c4f4f";
  playbutton[0].style.visibility="hidden";
})

// for div-1

grid_items[1].addEventListener("mouseover",function(){
  mainsection[0].style.backgroundImage="linear-gradient(#d5b271,black)"
  goodmorning[0].style.backgroundColor="#d5b271";
  uppernav[0].style.backgroundColor="#d5b271";
  playbutton[1].style.visibility="visible";
})

grid_items[1].addEventListener("mouseout",function(){
  mainsection[0].style.backgroundImage="linear-gradient(1deg,black 20%,grey 80%)"
  goodmorning[0].style.backgroundColor="#4c4f4f";
  uppernav[0].style.backgroundColor="#4c4f4f";
  playbutton[1].style.visibility="hidden";
})

// for div-2

grid_items[2].addEventListener("mouseover",function(){
  mainsection[0].style.backgroundImage="linear-gradient(#ec9393,black)"
  goodmorning[0].style.backgroundColor="#ec9393";
  uppernav[0].style.backgroundColor="#ec9393";
  playbutton[2].style.visibility="visible";
})

grid_items[2].addEventListener("mouseout",function(){
  mainsection[0].style.backgroundImage="linear-gradient(1deg,black 20%,grey 80%)"
  goodmorning[0].style.backgroundColor="#4c4f4f";
  uppernav[0].style.backgroundColor="#4c4f4f";
  playbutton[2].style.visibility="hidden";
})

// for div-3

grid_items[3].addEventListener("mouseover",function(){
  mainsection[0].style.backgroundImage="linear-gradient(#88e5e5,black)"
  goodmorning[0].style.backgroundColor="#88e5e5";
  uppernav[0].style.backgroundColor="#88e5e5";
  playbutton[3].style.visibility="visible";
})

grid_items[3].addEventListener("mouseout",function(){
  mainsection[0].style.backgroundImage="linear-gradient(1deg,black 20%,grey 80%)"
  goodmorning[0].style.backgroundColor="#4c4f4f";
  uppernav[0].style.backgroundColor="#4c4f4f";
  playbutton[3].style.visibility="hidden";
})

// for div-4

grid_items[4].addEventListener("mouseover",function(){
  mainsection[0].style.backgroundImage="linear-gradient(#e361d5,black)"
  goodmorning[0].style.backgroundColor="#e361d5";
  uppernav[0].style.backgroundColor="#e361d5";
  playbutton[4].style.visibility="visible";
})

grid_items[4].addEventListener("mouseout",function(){
  mainsection[0].style.backgroundImage="linear-gradient(1deg,black 20%,grey 80%)"
  goodmorning[0].style.backgroundColor="#4c4f4f";
  uppernav[0].style.backgroundColor="#4c4f4f";
  playbutton[4].style.visibility="hidden";
})

// for div-5

grid_items[5].addEventListener("mouseover",function(){
  mainsection[0].style.backgroundImage="linear-gradient(#84f4ca,black)"
  goodmorning[0].style.backgroundColor="#84f4ca";
  uppernav[0].style.backgroundColor="#84f4ca";
  playbutton[5].style.visibility="visible";
})

grid_items[5].addEventListener("mouseout",function(){
  mainsection[0].style.backgroundImage="linear-gradient(1deg,black 20%,grey 80%)"
  goodmorning[0].style.backgroundColor="#4c4f4f";
  uppernav[0].style.backgroundColor="#4c4f4f";
  playbutton[5].style.visibility="hidden";
  
})

// hovering effect for last container 

var flex_container_c3 = document.getElementsByClassName("flex-container");
var play_button_c3 = document.getElementsByClassName("c3-playbutton");

//  div 0

flex_container_c3[0].addEventListener('mouseover' , function(){
  play_button_c3[0].style.visibility="visible"
})

flex_container_c3[0].addEventListener('mouseout' , function(){
  play_button_c3[0].style.visibility="hidden"
})

//  div 1

flex_container_c3[1].addEventListener('mouseover' , function(){
  play_button_c3[1].style.visibility="visible"
})

flex_container_c3[1].addEventListener('mouseout' , function(){
  play_button_c3[1].style.visibility="hidden"
})

//  div 2

flex_container_c3[2].addEventListener('mouseover' , function(){
  play_button_c3[2].style.visibility="visible"
})

flex_container_c3[2].addEventListener('mouseout' , function(){
  play_button_c3[2].style.visibility="hidden"
})


//  div 3

flex_container_c3[3].addEventListener('mouseover' , function(){
  play_button_c3[3].style.visibility="visible"
})

flex_container_c3[3].addEventListener('mouseout' , function(){
  play_button_c3[3].style.visibility="hidden"
})