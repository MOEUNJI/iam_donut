// 인피니티 슬라이드 시작
const copy = document.querySelector(".dount_container").cloneNode(true);
document.querySelector(".carousel_ani").appendChild(copy)
// 인피니티 슬라이드 끝


// 페이드 커피 이미지
let fade = document.querySelectorAll(".coffee_fade .fade");
let currentFade = 0;
let fadeInterval = setInterval(nextFade, 2000);

function nextFade() {
    fade[currentFade].className = " fade";
    currentFade = (currentFade + 1) % fade.length;
    console.log(fade.length);
    console.log(currentFade)
    fade[currentFade].className = " slide showing";
}
// 페이드 커피 끝


// 지점 검색 시작
const inputText = document.getElementById("input-text");
let searchBtn = document.querySelector(".search_btn");
searchBtn.addEventListener("click", input);
window.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && inputText === document.activeElement) {
        //inputText === document.activeElement (활성화된게 inputText 일때 엔터를 누르면 먹음(inputText 없으면 안 먹음))
        input();
    }
});

function input() {
    window.open("https://www.google.co.kr/maps/search/%EC%95%84%EC%9D%B4%EC%97%A0%EB%8F%84%EB%84%9B " + inputText.value + "/data=!3m1!4b1?hl=ko&entry=ttu");
}
// 지점검색 끝

var swiper = new Swiper(".swiper", {
    // direction: 'horizontal',
    loop: 'true',
    // cssMode: true,
    navigation: {
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
    },
    keyboard: true,
});


// 햄버거메뉴 
let burger = $('.menu_trigger');

burger.each(function (index) {
    var $this = $(this);

    $this.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active-' + (index + 1));
    })
});

let trigger = document.querySelector(".menu_trigger");
let mHeader = document.querySelector(".header_open");

trigger.addEventListener("click", triggerClick);


function triggerClick() {
    if (mHeader.style.display == "block") {
        mHeader.style.display = "none";
    } else {
        mHeader.style.display = "block";
    }
}