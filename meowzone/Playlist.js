const playlist = [
    "/assets/audio/meowsongs/from the start - meowfey.mp3",
    "/assets/audio/meowsongs/Fly me to the meown.mp3",
    "/assets/audio/meowsongs/Just the mew of us.mp3",
    "/assets/audio/meowsongs/Earth Wind & Meower - September.mp3",
    "/assets/audio/meowsongs/Cats on Meows.mp3",
    "/assets/audio/meowsongs/Meow - lvusm.mp3",
    "/assets/audio/meowsongs/Meowh Klahoma - Jack Stauber.mp3",
    "/assets/audio/meowsongs/Meowin'.mp3",
    "/assets/audio/meowsongs/Meowl City - Fireflies.mp3",
    "/assets/audio/meowsongs/I Don't Want to Set the Meow on Fire.mp3",
    "/assets/audio/meowsongs/Meowster Sandman.mp3",
    "/assets/audio/meowsongs/Submeower Lullaby.mp3",
    "/assets/audio/meowsongs/Meow Star.mp3",
    "/assets/audio/meowsongs/Cat from Ipanema.mp3",
    "/assets/audio/meowsongs/Fallen Meown Reprise.mp3",
    "/assets/audio/meowsongs/Temmeow Village.mp3",
    "/assets/audio/meowsongs/Meower Garden - Yoshi Island.mp3",
    "/assets/audio/meowsongs/Meowster Blue Sky.mp3",
    "/assets/audio/meowsongs/CatTails - The Meown Theme.mp3",
    "/assets/audio/meowsongs/Meower Meower Docks.mp3",
    "/assets/audio/meowsongs/Coconut Meowll.mp3",
    "/assets/audio/meowsongs/Lost Woods - The Legend of Meowda Ocarina of Time.mp3",
    "/assets/audio/meowsongs/TF2 Meown Theme.mp3",
    "/assets/audio/meowsongs/Gotye - Somekitty That I Used To Meow.mp3",
];

let currentTrack = 0;
const audioElement = document.getElementById("meowPlayer");
const sourceElement = document.getElementById("audioSource");

function playTrack(index) {
    sourceElement.src = playlist[index];
    audioElement.load();
    audioElement.play();
}

function togglePause() {
    if (audioElement.paused == true) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

playTrack(currentTrack);

function decrementCurrentTrack() {
    if (playlist.length > 0) {
        currentTrack--;
        if (currentTrack < 0) {
            currentTrack = playlist.length-1;
        }
        playTrack(currentTrack);
    }
}
function incrementCurrentTrack() {
    if (playlist.length > 0) {
        currentTrack++;
        if (currentTrack >= playlist.length) {
            currentTrack = 0;
        }
        playTrack(currentTrack);
    }
}

function removeCurrentTrack() {
    playlist.splice(currentTrack, 1);
    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }
    playTrack(currentTrack);
}

audioElement.addEventListener("ended", () => {
    incrementCurrentTrack()
});
