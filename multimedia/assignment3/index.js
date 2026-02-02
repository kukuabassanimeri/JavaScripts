//* PAUSE BUTTON
const container = document.querySelector(".container");
const mainVideo = container.querySelector("video");
const playPauseBtn = container.querySelector(".play-pause i");
const skipBackward = container.querySelector(".skip-backward i");
const skipForward = container.querySelector(".skip-forward i");
const volumeBtn = container.querySelector(".volume i");
const volumeSlider = container.querySelector(".left input");
const speedBtn = container.querySelector(".playback-speed span");
const speedOptions = container.querySelector(".speed-options");
const picInPicBtn = container.querySelector(".pic-in-pic span");
const fullScreenBtn = container.querySelector(".fullscreen i");
const videoTimeline = container.querySelector(".video-timeline");
const progressBar = container.querySelector(".progress-bar");
const currentVideoTime = container.querySelector(".current-time");
const videoDuration = container.querySelector(".video-duration");

//* Hide controls
let timer;
const hideControls = () => {
    if(mainVideo.paused) return;
    timer = setTimeout(() => {
        container.classList.remove("show-controls");
    }, 3000);
}
hideControls();

container.addEventListener("mousemove", () => {
    container.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();
});

//* Click anywhere in the video to play and pause
mainVideo.addEventListener("click", () => {
    //* If video is paused, play the video else pause the video
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});


playPauseBtn.addEventListener("click", () => {
    
    //* If video is paused, play the video else pause the video
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

//* Change icon to paused if video is playing
mainVideo.addEventListener("play", () => {
    playPauseBtn.classList.replace("fa-play", "fa-pause");
});

//* change icon to play if video is paused
mainVideo.addEventListener("pause", () => {
    playPauseBtn.classList.replace("fa-pause", "fa-play"); //* Get current time & video duration
});

//* Current time update
const formatTime = time => {
    let seconds = Math.floor(time % 60), //* Get seconds
    minutes = Math.floor(time / 60) % 60, //* Get minutes
    hours = Math.floor(time / 3600); //* Get hours

    //* Add 0 at the beginning if the value is less than 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    //* If hours is 0 return minutes and seconds only else return all
    if(hours == 0) {
        return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}

//* Video duration time
mainVideo.addEventListener("loadeddata", e => {
    videoDuration.innerText = formatTime(e.target.duration); //* Get video duration
});

//* Update the progress bar according to video's current time
mainVideo.addEventListener("timeupdate", e => {
    let { currentTime, duration } = e.target;
    let percent = (currentTime / duration) * 100; //* Get percent
    progressBar.style.width = `${percent}%`; //* pass percent as progressbar width

    //* Update video Time
    currentVideoTime.innerText = formatTime(currentTime);
});

const draggableProgressBar = e => {
    let timelineWidth = videoTimeline.clientWidth; //* Get video timeline width
    progressBar.style.width = `${e.offsetX}px`; //* Pass offsetX value as progressBar width
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration; //* Get percent of time according to the click

    //* Update currentTime according to progressBar
    currentVideoTime.innerText = formatTime(mainVideo.currentTime);
}

//* Update progress time text and change its position according to the mouse
videoTimeline.addEventListener("mousemove", e => {
    const progressTime = videoTimeline.querySelector("span"); //* Get progress time element
    let offsetX = e.offsetX; //* Get mouse x position
    progressTime.style.left = `${offsetX}px`; //* Pass offsetX value as progressTime left value
    let timelineWidth = videoTimeline.clientWidth; //* Get video timeline width
    let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration); //* Get percent
    progressTime.innerText = formatTime(percent); //* Pass percent value as progressTime text
});

//* Make progressBar draggable
let isDragging = false;

videoTimeline.addEventListener("mousedown", (e) => {
    isDragging = true;
    draggableProgressBar(e); //* update immediately on click
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) draggableProgressBar(e);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});


//* Update video current time on click
videoTimeline.addEventListener("click", e => {
    let timelineWidth = videoTimeline.clientWidth; //* Get video timeline width
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration; //* Get percent of time according to the click
});


//* Skip backward
skipBackward.addEventListener("click", () => {
    mainVideo.currentTime -= 5; //* subtract 5 seconds from the current video time
});

//* Skip forward
skipForward.addEventListener("click", () =>{
    mainVideo.currentTime += 5; //* add 5 seconds to the current video time
});

//* Volume btn
volumeBtn.addEventListener("click", () => {
    if(!volumeBtn.classList.contains("fa-volume-high")) { //* if volume icon isn't volume high icon
        mainVideo.volume = 0.5; //* Pass 0.5 value as video volume
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
        mainVideo.volume = 0.0; //* pass 0.0 value as volume so the video mute
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
    volumeSlider.value = mainVideo.volume; //* Update slider value according to video volume 
});

//* Volume slider
volumeSlider.addEventListener("input", e => {
    mainVideo.volume = e.target.value; //* Pass slider value as video volume
    if(e.target.value == 0) { //* Change icon if video is muted
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});

//* Video button speed
speedBtn.addEventListener("click", () => {
    speedOptions.classList.toggle("show");
});

//* Hide speed option box on document click
document.addEventListener("click", e => {
    if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
        speedOptions.classList.remove("show");
    }
});

//* Apply selected speed on the video
speedOptions.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => { //* Add click event on all speed options
        mainVideo.playbackRate = option.dataset.speed; //* Pass ption dataset value as playback value
        speedOptions.querySelector(".active").classList.remove("active"); //* Remove active class
        option.classList.add("active"); //* Add active class on the selected option
    });
});

//* Picture in button
picInPicBtn.addEventListener("click", () => {
    mainVideo.requestPictureInPicture();
});

//* Fullscreen button
fullScreenBtn.addEventListener("click", () => {
    container.classList.toggle("fullscreen"); //* Toggle fullscreen
    if(document.fullscreenElement) { //* Check if video is already in fullscreen mode
        fullScreenBtn.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
    }
    fullScreenBtn.classList.replace("fa-expand", "fa-compress");
    container.requestFullscreen(); //* Exit from fullscreen mode
});