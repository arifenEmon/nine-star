// Login page progrem; 

let loginWarp = document.querySelector('.login-wrap');
let adminIn = document.getElementById('admin');
let passIn = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');
let logOut = document.getElementById('logOut');
let passCode = 4321;


function dataLoad(){
  let singelAccountNames = document.querySelectorAll('.singelAccountName');
  let singelAccountImgs = document.querySelectorAll('.singelAccountImg');
  let singleAccountItem = document.querySelectorAll('.account-single-item');
  let logedProfileImgs = document.querySelectorAll('.logedProfileImg')
  let logedProfileNams = document.querySelectorAll('.logedProfileName');
  let logedProfileNumber = document.getElementById('logedProfileNumber')

  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/js/data.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      let person = JSON.parse(this.responseText).person;

      for(let i = 0 ; i < person.length; i++){
        singelAccountNames[i].innerHTML = person[i].name;
        singelAccountImgs[i].setAttribute('src', person[i].profilePic);

        singleAccountItem[i].addEventListener('click', ()=>{
          logedProfileNumber.innerHTML = person[i].phone;
          for(let j=0; j < logedProfileImgs.length ; j++){

            logedProfileImgs[j].setAttribute('src', person[i].profilePic);
          }
          for(let j=0; j < logedProfileNams.length; j++){

            logedProfileNams[j].innerHTML = person[i].name;
          }
          
          
         
          
        })
      }

      
    }
    else{
      alert("can't get data")
    }
  }

  xhr.send()
}




dataLoad()

















// loginBtn.addEventListener('click', (e) =>{
//   e.preventDefault()
//   // adminIn = parseInt(adminIn);
//   // passIn = parseInt(passIn);
// console.log(typeof(parseFloat(adminIn.value)));
//   if((parseFloat(adminIn.value )=== passCode) && (parseFloat(passIn.value) === passCode)){
    
//     loginWarp.classList.add('logSuccAdd');
    
//   }else{
//     alert('hoyni')
//   }

// })


logOut.addEventListener('click', ()=>{
  
  location.reload()

})
$('.slider-wrap').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }
    ]
  });
  $('.author-slider-wrap').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    arrows: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }
    ]
  });

  $('.bill-card-wrap').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }
    ]
  });





  $('.news-card-warp').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }
    ]
  });
