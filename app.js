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
const updateProgress =()=>{
    progressBar.style.width =`${(video.currentTime / video.duration) *100}%`
    
}


// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Even Listners
playBtn.addEventListener('click',tooglePlay)
video.addEventListener('click',tooglePlay)
video.addEventListener('timeupdate',updateProgress)
video.addEventListener('canplay',updateProgress)