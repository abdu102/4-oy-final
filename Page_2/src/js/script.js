"use strcict";
//  header menu
let show = document.querySelector(".nav__toggle");
let btn = document.querySelector(".nav__menu");
let exit = document.querySelector(".nav__toggle-main-top-btn");
btn.addEventListener("click", () => {
    show.classList.add("show");
    
})
exit.addEventListener("click", () => {
    show.classList.remove("show");
});

// cashback slider
let firstMedia = window.matchMedia("(min-width:992px)");
let secondMedia = window.matchMedia("(max-width:992px)");
let thirdMedia = window.matchMedia("(max-width:576px)");

let list = document.querySelector(".cashback__lists"),
    listImg = document.querySelectorAll(".cashback__lists--list"),
    prev = document.querySelector(".cashback__prev"),
    next = document.querySelector(".cashback__next");

    if(firstMedia.matches){
        let index = 0;

    function slider () {
        if( index > listImg.length - 1 ) {
            index = 0;
        }
        if( index < 0 ) {
            index = listImg.length - 1;
        }
        list.style.transform = `translateX(${-index * 1180}px)` 
    }
   let play = setInterval( () => {
        index++;
        slider()
    }, 2000)
    next.addEventListener("click", () => {
        index++;
        slider();
        clearInterval(play)
    });
    prev.addEventListener("click", () => {
        index--;
        slider();
        clearInterval(play)
    });
    }
    if(secondMedia.matches){
        let index = 0;

    function slider () {
        if( index > listImg.length - 1 ) {
            index = 0;
        }
        if( index < 0 ) {
            index = listImg.length - 1;
        }
        list.style.transform = `translateX(${-index * 590}px)` 
    }
   let play = setInterval( () => {
        index++;
        slider()
    }, 2000)
    next.addEventListener("click", () => {
        index++;
        slider();
        clearInterval(play)
    });
    prev.addEventListener("click", () => {
        index--;
        slider();
        clearInterval(play)
    });
    }
    if(thirdMedia.matches){
        let index = 0;

    function slider () {
        if( index > listImg.length - 1 ) {
            index = 0;
        }
        if( index < 0 ) {
            index = listImg.length - 1;
        }
        list.style.transform = `translateX(${-index * 560}px)` 
    }
   let play = setInterval( () => {
        index++;
        slider()
    }, 2000)
    next.addEventListener("click", () => {
        index++;
        slider();
        clearInterval(play)
    });
    prev.addEventListener("click", () => {
        index--;
        slider();
        clearInterval(play)
    });
    }

    
    // sotilganlar card slider
    let cardSlider = document.querySelector(".sotilganlar__cards"),
    cards = document.querySelectorAll(".sotilganlar__cards--card"),
    left = document.querySelector(".sotilganlar__prev"),
    right = document.querySelector(".sotilganlar__next");

    let count = 0;

    function selled () {
        if( count > cards.length - 1 ) {
            count = 0;
        }
        if( count < 0 ) {
            count = cards.length - 1;
        }
        cardSlider.style.transform = `translateX(${-count * 150}px)` 
    }
   
    right.addEventListener("click", () => {
        count++;
       selled();
    });
    left.addEventListener("click", () => {
        count--;
       selled();
    });
    

    // ommabop cardlar slider

    let popularSlider = document.querySelector(".popular__cards"),
    popularCards = document.querySelectorAll(".popular__cards--card"),
    popularLeft = document.querySelector(".popular__prev"),
    popularRight = document.querySelector(".popular__next");

    let popularCount = 0;

    function popularSelled () {
        if( popularCount > popularCards.length - 1 ) {
            popularCount = 0;
        }
        if( popularCount < 0 ) {
            popularCount = popularCards.length - 1;
        }
        popularSlider.style.transform = `translateX(${-popularCount * 150}px)` 
    }
   
    popularRight.addEventListener("click", () => {
        popularCount++;
       popularSelled();
    });
    popularLeft.addEventListener("click", () => {
        popularCount--;
       popularSelled();
    });
