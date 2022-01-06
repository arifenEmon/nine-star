
// Login page progrem; 
let loginWarp = document.querySelector('.login-wrap');
let adminIn = document.getElementById('admin');
let passIn = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');
let logOut = document.getElementById('logOut');
let liveAmount = document.getElementById('liveAmount')
let passCode = 4321;



function dataLoad(){
  window.localStorage.clear();
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
  

  // API_connect_to_site_program
  fetch('https://arifenemon.github.io/jsonAPI2/data.json', {cache : 'reload'})
  .then(res=> res.json())
  .then(nineSter=> {
    let person = nineSter.person;
    let letestNews = nineSter.letestNews;
    let transactions = nineSter.transactions;
    liveAmount.innerText = nineSter.liveAmmount;

    for(let i = 0 ; i < person.length; i++){
      // Profile_photo_and_name_Program.
      singelAccountNames[i].innerHTML = person[i].name;
      singelAccountImgs[i].setAttribute('src', person[i].profilePic);


      //right-offcamvas-onSingleItemClickToBack
      document.getElementById('asSdfgh').addEventListener('click',()=>{
        singleAccountItem[i].setAttribute("data-bs-toggle" , "offcanvas")
        singleAccountItem[i].setAttribute("data-bs-target" , "#offcanvasRight")
        singleAccountItem[i].setAttribute("aria-controls" , "offcanvasRight")
      })

      // Righr_offCamvas_single_item_click_to_Change_DATA_TO_API
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


  

    // Our_Members_program
    for(let i = 0 ; i < person.length ; i++){
      ourMembers(person[i].name, person[i].profilePic)
    }
    function ourMembers(name, photo){
      // creat_tag
      const mainDive = document.createElement('div')
      const div2 = document.createElement('div')
      const imgTag = document.createElement('img')
      const span = document.createElement('span')
      // append_tag
      mainDive.appendChild(div2)
      div2.appendChild(imgTag)
      div2.appendChild(span)
      span.innerText = name
      document.getElementById('cvbfhg').appendChild(mainDive)

      // set_attribut
      mainDive.setAttribute('class', `col-3 col-md-2 ml-3 p-0`)
      div2.setAttribute('class' , 'author')
      imgTag.setAttribute('src', photo)
    }

    // Transactions_programs
    for (let i = 0; i < transactions.length; i++) {
      transactionFunction(transactions[i].photo,transactions[i].name,transactions[i].balance,transactions[i].title)
    }
    function transactionFunction(photoLink,name,balanceText,title){
      //creat_tag
      const divTagMain = document.createElement('div');
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const span = document.createElement('span')
      const imgTag = document.createElement('img')
      const div2append = document.createElement('div')
      const h3Tag = document.createElement('h3')
      const div2appendDivSpanAppend = document.createElement('span')
      //append_tag
      divTagMain.appendChild(div1)
      div1.appendChild(div2)
      div1.appendChild(span)
      div2.appendChild(imgTag)
      div2.appendChild(div2append)
      div2append.appendChild(h3Tag)
      h3Tag.innerText = name
      span.innerText = balanceText
      div2appendDivSpanAppend.innerText = title
      div2append.appendChild(div2appendDivSpanAppend)
      document.getElementById('ghghgh').appendChild(divTagMain)
      //setAttribuat
      divTagMain.setAttribute('class',`col col-md-6 col-lg-4`)
      div1.setAttribute('class' , `tarans-item`)
      div2.setAttribute('class' , `taras-content`)
      span.setAttribute('class', 'decrement-value')
      imgTag.setAttribute('src', photoLink)
    }

    // letestNews_programs
    for(let i = 0 ; i < letestNews.length; i++){
      letestNewsFunction(letestNews[i].photo , letestNews[i].title)
    }
    function letestNewsFunction(imgLink, text){
      // creat
      const divTag = document.createElement('div');
      const imgTag = document.createElement('img');
      const pTag = document.createElement('p');
      const t = document.createTextNode(text)
      // append 
      document.getElementById('klklkl').appendChild(divTag)
      divTag.appendChild(imgTag)
      divTag.appendChild(pTag);
      pTag.appendChild(t)
      // attribute
      divTag.setAttribute('class',`col-6 ol-md-4 news-card`)
      imgTag.setAttribute('src', imgLink)
    }
    
  })
      
}
dataLoad()


// Top-Scroll-To_reload-App
function refresh(event){
  let ref = document.getElementById('ref');
  let touch = event.targetTouches[0];
  let y = touch.pageY;
  // console.log(y);
  if(y > 00 && y < 80){
    ref.style.height = y+'px';
    ref.style.maxHeight= '80px';
    ref.style.transition = '.3s'
  }
  if(y > 0 && y < 80){
    ref.style.height = '50px'
    ref.style.transition = '.2s';
    setTimeout(function(){location.reload(), 500} )
  }
}
















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

// log-out-Program
// logOut.addEventListener('click', ()=>{
//   location.reload()
// })


// slider-Prograam
  setTimeout(() => {
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
    $('#klklkl').slick({
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
  }, 500);



  // Click-Sound
  let clickAudio = new Audio('/audio/0.wav')
setTimeout(()=>{
  let clickSoundEle = [document.querySelectorAll('.min-dis'),document.querySelectorAll('.tarans-item'),document.querySelectorAll('.author'),document.querySelectorAll('.bill-card'),document.querySelectorAll('.prog'),document.querySelectorAll('.news-card'),document.querySelectorAll('.clickToSound'),document.querySelectorAll('.account-single-item')]
  clickSoundEle.forEach((item)=>{
    item.forEach((itemAddEven)=>{
      itemAddEven.addEventListener('click',()=>{
        clickAudio.play()
      })
    })
    
  })
},1000)
