const video = document.querySelector('video'),
      progressRange = document.querySelector('.progress-range'),
      progressBar = document.querySelector('.progress-bar'),
      playBtn = document.getElementById('play-btn'),
      volumeIcon = document.getElementById('volume-icon'),
      volumeRange = document.querySelector('.volume-range'),
      volumeBar = document.querySelector('.volume-bar'),
      currentTime = document.querySelector('.time-elapsed'),
      duration = document.querySelector('.time-duration'),
      fullscreenBtn = document.querySelector('.fullscreen')

// Play & Pause ----------------------------------- //
const showPlayIcon =()=>{
    playBtn.classList.replace('bx-pause','bx-play')
}
const tooglePlay =()=>{
    if(video.paused){
        video.play()
        playBtn.classList.replace('bx-play','bx-pause')
        playBtn.setAttribute('title','Pause')
    }else{
        video.pause()
        showPlayIcon();
    }
}
// On Video End, Show play button icon
video.addEventListener('ended',showPlayIcon)

// Progress Bar ---------------------------------- //
// Calculate didplay time format
const displayTime =(time)=>{
    const minutes =  Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    seconds = seconds > 9 ? seconds: `0${seconds}`;
    return `${minutes}:${seconds}`
}
const updateProgress =()=>{
    progressBar.style.width =`${(video.currentTime / video.duration) *100}%`
    currentTime.textContent = `${displayTime(video.currentTime)} /`
    duration.textContent = ` ${displayTime(video.duration)}`
}

// Click to seek within the video
const setProgress =(e)=>{
    const newTime = e.offsetX / progressRange.offsetWidth;
    // Update Progress Bar
    progressBar.style.width = `${newTime * 100}%`
    // Update Cureent time of video
    video.currentTime = newTime * video.duration;
}


// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Even Listners
playBtn.addEventListener('click',tooglePlay)
video.addEventListener('click',tooglePlay)
video.addEventListener('timeupdate',updateProgress)
video.addEventListener('canplay',updateProgress)
progressRange.addEventListener('click', setProgress)