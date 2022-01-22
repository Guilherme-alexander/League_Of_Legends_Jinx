//Mebu Mobile
const btnMobile = document.querySelector('.menu-mobile i'),
      menuMobile = document.querySelector('.menu-mobile ul')

btnMobile.addEventListener('click', ()=>{
    menuMobile.classList.toggle('active')
})

//Load

let Loading = document.querySelector('.load')

window.addEventListener('load',()=>{
    Loading.style.display = 'none'
})

//Function Habilidades

const imgAtaque = document.querySelectorAll('.width__left__habilidades ul li img')

const info = document.querySelectorAll('.descrocao li')

//INFO
const info0 = document.querySelector('#info0'),
info1 = document.querySelector('#info1'),
info2 = document.querySelector('#info2'),
info3 = document.querySelector('#info3'),
info4 = document.querySelector('#info4')

// VIDEO
const video0 = document.querySelector('#video0'),
video1 = document.querySelector('#video1'),
video2 = document.querySelector('#video2'),
video3 = document.querySelector('#video3'),
video4 = document.querySelector('#video4')

const VideoHabilidade = document.querySelectorAll('.width__right__habilidades ul li')


//remove info
imgAtaque.forEach(function(value){
    value.addEventListener('click',()=>{
        for(i = 0; i < info.length; i++){
            info[i].classList.remove('active')
        }
    })
})
//remove video
imgAtaque.forEach(function(value){
    value.addEventListener('click',()=>{
        for(i = 0; i < VideoHabilidade.length; i++){
            VideoHabilidade[i].classList.remove('active__video')
        }
    })
})


imgAtaque.forEach(function(value,index){
    value.addEventListener('click',()=>{
      if(index == 0){
        info0.classList.add('active')
        video0.classList.add('active__video')
      }
      else if(index == 1){
        info1.classList.add('active')
        video1.classList.add('active__video')
      }
      else if(index == 2){
        info2.classList.add('active')
        video2.classList.add('active__video')
      }
      else if(index == 3){
        info3.classList.add('active')
        video3.classList.add('active__video')
      }
      else if(index == 4){
        info4.classList.add('active')
        video4.classList.add('active__video')
      }

    })
})