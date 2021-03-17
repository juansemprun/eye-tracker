// Containers
const upLeft = document.querySelector('.up-left')
const upRight = document.querySelector('.up-right')
const downLeft = document.querySelector('.down-left')
const downRight = document.querySelector('.down-right')

// Colors
const colors = {
   containerNotObserved: '#252839',
   observedContainer: '#677077'
}

webgazer.setGazeListener((data, elapsedTime) => {

   if (!data) {
      return
   }

   upLeft.style.backgroundColor = colors.containerNotObserved
   upRight.style.backgroundColor = colors.containerNotObserved
   downLeft.style.backgroundColor = colors.containerNotObserved
   downRight.style.backgroundColor = colors.containerNotObserved

   if (data.x < window.innerWidth / 2 && data.y < window.innerHeight / 2) {
      upLeft.style.backgroundColor = colors.observedContainer
   }

   if (data.x > window.innerWidth / 2 && data.y < window.innerHeight / 2) {
      upRight.style.backgroundColor = colors.observedContainer
   }

   if (data.x < window.innerWidth / 2 && data.y > window.innerHeight / 2) {
      downLeft.style.backgroundColor = colors.observedContainer
   }

   if (data.x > window.innerWidth / 2 && data.y > window.innerHeight / 2) {
      downRight.style.backgroundColor = colors.observedContainer
   }

}).begin()