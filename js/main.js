// Login page progrem; 

let loginWarp = document.querySelector('.login-wrap');
let adminIn = document.getElementById('admin');
let passIn = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');
let logOut = document.getElementById('logOut');
let liveAmount = document.getElementById('liveAmount')





let passCode = 4321;


function dataLoad(){
  let singelAccountNames = document.querySelectorAll('.singelAccountName');
  let singelAccountImgs = document.querySelectorAll('.singelAccountImg');
  let singleAccountItem = document.querySelectorAll('.account-single-item');
  let logedProfileImgs = document.querySelectorAll('.logedProfileImg')
  let logedProfileNams = document.querySelectorAll('.logedProfileName');
  let logedProfileNumber = document.getElementById('logedProfileNumber');
  let logedSaving = document.getElementById('logedSaving');
  let logedDebts = document.getElementById('logedDebts');
  let totalDebt = document.getElementsByClassName('totalDebt');
  let loanBalance = document.getElementById('loanBalance');
  let liveAmount = document.getElementById('liveAmount');
  
  fetch('https://arifenemon.github.io/jsonAPI/data.json', {cache : 'reload'})
  .then(res=> res.json())
  .then(nineSter=> {
    let person = nineSter.person;
    liveAmount.innerText = nineSter.liveAmmount;

    for(let i = 0 ; i < person.length; i++){

      
      
      singelAccountNames[i].innerHTML = person[i].name;
      singelAccountImgs[i].setAttribute('src', person[i].profilePic);

      singleAccountItem[i].addEventListener('click', ()=>{
        logedProfileNumber.innerHTML = person[i].phone;
        logedSaving.innerHTML = person[i].savings;
        logedDebts.innerHTML = person[i].debts;
        loanBalance.innerHTML = person[i].loanBalance;
        

        for(let j=0; j < logedProfileImgs.length ; j++){
          logedProfileImgs[j].setAttribute('src', person[i].profilePic);
        }
        for(let j=0; j < logedProfileNams.length; j++){
          logedProfileNams[j].innerHTML = person[i].name;
        }
        for(let j=0; j<totalDebt.length; j++){
          totalDebt[j].innerHTML = person[i].totalDabt;
        }
        
        
      })
    }
  })
      
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
