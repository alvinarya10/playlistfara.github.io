//song list
let All_song = [
    {
      name: "W.H.U.T",
      path: "music/1.mp3",
      img: "images/1.jpg",
      singer: "Aisha Retno"
    },
    {
      name: "Tapi Diterima",
      path: "music/2.mp3",
      img: "images/2.jpg",
      singer: "Nadin Amizah"
    },
    {
      name: "anything 4 u",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "Lany"
    },
    {
      name: "Blue",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "Yung kai"
    },
    {
      name: "Semenjak Ada Dirimu",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "HIVI!"
    },
    {
     name: "You!",
     path: "music/6.mp3",
     img: "images/6.jpg",
     singer: "Lany"
    },
    {
      name: "Begini Begitu",
      path: "music/7.mp3",
      img: "images/7.jpg",
      singer: "Maliq & D'Essentials"
    },
    {
      name: "Hold Me Tight",
      path: "music/8.mp3",
      img: "images/8.jpg",
      singer: "Skyline"
    },
    {
      name: "Anugerah Terindah",
      path: "music/9.mp3",
      img: "images/9.jpg",
      singer: "Andmesh"
    },
    {
      name: "I'd like to watch you sleeping",
      path: "music/10.mp3",
      img: "images/10.jpg",
      singer: "Sal Priadi"
    },
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/