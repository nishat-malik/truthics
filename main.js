$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

var position = $(window).scrollTop(); 

// should start at 0
$(document).ready(function() {
    if($(window).width() >= 900) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if(scroll <= 6){
                $('nav').addClass("transparent");
                $('.nav-link3').removeClass("nav-link2");
                $('.nav-link3').addClass("nav-link1");
          }
        
            else {
                $('nav').removeClass("transparent");
                $('.nav-link3').removeClass("nav-link1");
                $('.nav-link3').addClass("nav-link2"); 
            }
                
        
        });
    }
});

$(document).ready(function() {
    if($(window).width() <= 900) {
                $('nav').removeClass("transparent");
                $('.nav-link3').removeClass("nav-link1");
                $('.nav-link3').addClass("nav-link2");
                $('.hide').removeClass("hide");
        
        };
});


// fifthpage
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const card1 = document.querySelector(".card__inner1");

card1.addEventListener("click", function (e) {
    console.log("hi")
    document.querySelector(".card__inner1").classList.toggle('is-flipped');
})

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
    console.log("hi")
    document.querySelector(".card__inner2").classList.toggle('is-flipped');
})

const card3 = document.querySelector(".card__inner3");

card3.addEventListener("click", function (e) {
    console.log("hi")
    document.querySelector(".card__inner3").classList.toggle('is-flipped');
})

const card4 = document.querySelector(".card__inner4");

card4.addEventListener("click", function (e) {
    console.log("hi")
    document.querySelector(".card__inner4").classList.toggle('is-flipped');
})