const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");

const playlist = [
    {
        song: "audio.mp3",
        cover: "cover.jpg",
        title: "When I Was Your Man"
    },
    {
        song: "audio1.mp3",
        cover: "cover3.jpg",
        title: "Somebody Pleasure"
    },
    {
        song: "audio2.mp3",
        cover: "cover1.jpg",
        title: "Phonk"
    }
];

function playMusic(index){
    audio.src = playlist[index].song;
    cover.src = playlist[index].cover;
    title.textContent = playlist[index].title;

    audio.load();   // reset audio
    audio.play();   // langsung play
}
 function searchMusic(){
    let input = document.getElementById("search").value.toLowerCase();
    let songs = document.querySelectorAll(".song");

    songs.forEach(song => {
        let text = song.innerText.toLowerCase();

        if(text.includes(input)){
            song.style.display = "flex";
        }else{
            song.style.display = "none";
        }
    });
}
