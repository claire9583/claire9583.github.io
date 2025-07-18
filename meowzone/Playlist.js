const playlist = [
    "/assets/audio/meowsongs/from the start - meowfey.mp3",
    "/assets/audio/meowsongs/Fly me to the meown.mp3",
    "/assets/audio/meowsongs/Just the mew of us.mp3",
    "/assets/audio/meowsongs/Earth Wind & Meower - September.mp3",
    "/assets/audio/meowsongs/Cats on Meows.mp3",
    "/assets/audio/meowsongs/Meow - lvusm.mp3",
    "/assets/audio/meowsongs/Meowh Klahoma - Jack Stauber.mp3"
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
