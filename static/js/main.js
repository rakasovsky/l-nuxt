// Mobile menu dropdown

function initAccordion(accordionElem){
  
  //when panel is clicked, handlePanelClick is called.          

  function handlePanelClick(event){
      showPanel(event.currentTarget);
  }

//Hide currentPanel and show new panel.  
  
  function showPanel(panel){
    //Hide current one. First time it will be null. 
     var expandedPanel = accordionElem.querySelector(".is-Open");
     if (expandedPanel){
         expandedPanel.classList.remove("is-Open");
     }
     //Show new one
     if (expandedPanel !== panel) {
      panel.classList.add("is-Open");
    }

  }

  var allPanelElems = accordionElem.querySelectorAll(".m_li");
  for (var i = 0, len = allPanelElems.length; i < len; i++){
       allPanelElems[i].addEventListener("click", handlePanelClick);
  }

  //By Default Show first panel
  // showPanel(allPanelElems[0])

}

initAccordion(document.getElementById("menu"));




// GSAP
const tl = gsap.timeline();

tl.from(".lumex__content", {duration: 2,   x: 1500});
tl.from(".content",{duration:2, opacity:0, y:200, stagger: 0.25});
gsap.from(".lumex__video", {duration: 2, scale: 0.3,  x: -1500});


const catBlck = gsap.timeline({
  scrollTrigger: {
      trigger: ".cat_block", 
      start: "top bottom"
  }
})

catBlck.from(".cat_block",{duration:1, opacity:0, y:200, stagger:0.5});



// For catalog page
const catBlck2 = gsap.timeline({
scrollTrigger: {
    trigger: ".cat_block2", 
    start: "top bottom"
}
})

catBlck2.from(".cat_block2",{duration:1, opacity:0, y:200, stagger:0.5});
// For catalog page

const lbl = gsap.timeline({
  scrollTrigger: {
      trigger: ".lbl",
      start: "top bottom"
  }
})

lbl.from(".lbl",{duration:1, opacity:0, x:-100}),
lbl.from(".txt", {duration:1, opacity:0, y: 100,stagger: 0.25})


const MoP = gsap.timeline({
  scrollTrigger: {
      trigger: ".mop",
      start: "top bottom"
  }
})
MoP.from(".fl", {duration:.5, opacity:0, x: -400})
MoP.from(".txt2", {duration:1, opacity:0, y: 100,stagger: 0.25})


const JoC = gsap.timeline({
  scrollTrigger: {
      trigger: ".joc",
      start: "top bottom"
  }
})
JoC.from(".txt3", {duration:1, opacity:0, y: 100,stagger: 0.25})

// const mmTl = gsap.timeline({
//     paused: true
// });

// mmTl.from(".nav_dropdown",{duration:.5, opacity:0, y: gsap.utils.random(-100, 100, true), ease: Power3.easeOut});
// mmTl.to(".nav_dropdown",{duration:.5, opacity:0, y: 0, ease: Power3.easeOut});

// GSAP


// MEGA MENU

var lastOpenedDropdown = null;

document.querySelectorAll(".nav-trigger").forEach(function (li) {
const drp = gsap.timeline({
    defaults: {duration: 1},
    paused: true

});
var dr = li.querySelector('.nav_dropdown');
var dp = li.querySelector('.drp-list');
var dx = li.querySelectorAll('.drp_card')
// drp.to(dr,{duration: .5, scaleY: 1, height: '65vh'})
drp.to(dr,{duration: .5, scaleY: 1})
   .from(dp, {duration: .5, opacity: 0, y:0 , stagger: 0.25,}, "-=1")
   .from(dx, {duration: .5, opacity:0, x: "550%",stagger: 0.25, ease: "power4.in"}, "-=1")
   .reversed(true);

li.addEventListener('click', function(e) {
        if (drp.reversed()) {
          if (lastOpenedDropdown !== null && lastOpenedDropdown !== drp) {
            lastOpenedDropdown.reverse();
          }
          lastOpenedDropdown = drp;
          drp.play();
        } else {
          drp.reverse();
        }
});

li.querySelectorAll(".list_trigger").forEach(function (h) {
 
  if (h.hasAttribute("data-card")) {
    let linkName = h.getAttribute("data-card");
    let card_container = document.querySelector(
      'div[data-card="' + linkName + '"]'
    );
    if (card_container) {
      const scrollableDiv = card_container.closest(".cards_wrapper");
      h.addEventListener("mouseover", function () {
        const rsd = scrollableDiv.getBoundingClientRect();
        const rcc = card_container.getBoundingClientRect();
        const styles = getComputedStyle(card_container);
        const realCcWidth = rcc.width + parseInt(styles.marginLeft) + parseInt(styles.marginRight);
        const realCcLeft = rcc.left - parseInt(styles.marginLeft);
        const leftOverflow = rsd.left - realCcLeft;
        const rightOverflow = (realCcLeft + realCcWidth) - (rsd.left + rsd.width);
        const threshold = 30;
        if (leftOverflow > threshold) {
          scrollableDiv.scrollLeft -= rsd.left - realCcLeft;
         
        } else if (rightOverflow > threshold) {
          scrollableDiv.scrollLeft = realCcLeft + realCcWidth - (rsd.left + rsd.width);
          // gsap.from(".inner_container", {duration: 1, opacity:1, x: "20%",ease: "power1.out"},"+=2")
        }
        card_container.classList.add("active"); //TODO? change just to hovered style: li.list_trigger:hover {...}
        gsap.from(".inner_container", {duration: 2, opacity:1, x: "-10%", ease: "power1.out"})
      });
      h.addEventListener("mouseleave", function () {
        card_container.classList.remove("active");
      });
      
    } else {
 
    }
  } else {
    
  }
});
});




// Q/A CARDS 

document.querySelectorAll(".cat_block").forEach(function (f) {
  const qa = gsap.timeline({
    defaults: { duration: 1 },
    paused: true,
  });
  var tf = f.querySelector(".title__front");
  var tfd = f.querySelector(".title__front div");
  var tb = f.querySelector(".title__back");
  var tbd = f.querySelector(".title__back div");
  qa.to(tf, { duration: 0.5, width: "100%" })
    .to(tfd, { duration: 0.5, y: 20, opacity: 0 })
    .to(tf, { duration: 0.5, opacity: 0 })
    .to(tb, { duration: 0.5, opacity: 1 }, "-=1")
    .from(tbd, { duration: 0.5, y: 20, opacity: 0 }, "-=1");
  f.addEventListener("mouseover", function (e) {
    qa.play();
  });
  f.addEventListener("mouseout", function (e) {
    qa.reverse();
  });
});

document.querySelectorAll(".cat_block2").forEach(function (f) {
const qa = gsap.timeline({
  defaults: { duration: 1 },
  paused: true,
});
var tf = f.querySelector(".title__front");
var tfd = f.querySelector(".title__front div");
var tb = f.querySelector(".title__back");
var tbd = f.querySelector(".title__back div");
qa.to(tf, { duration: 0.5, y: 20, opacity: 1 })
  .to(tfd, { duration: 0.5, y: 20, opacity: 0 })
  .to(tf, { duration: 0.5, opacity: 0 })
  .to(tb, { duration: 0.5, opacity: 1 }, "-=1")
  .from(tbd, { duration: 0.5, y: 20, opacity: 0 }, "-=1");
f.addEventListener("mouseover", function (e) {
  qa.play();
});
f.addEventListener("mouseout", function (e) {
  qa.reverse();
});
});


// TABS 
                      
function openTab(evt, tabName) {
var i, x, tablinks;
x = document.getElementsByClassName("tab");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" lumex_button-active", "");
}
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " lumex_button-active";
}
                     
// product page tab 
function openTab2(evt, tabName) {
var i, x, tablinks;
x = document.getElementsByClassName("tab");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" lumex_button-active", "");
}
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " lumex_button-active";
}



// console.clear();


// Catalog mobile modal button

var showBtn = document.querySelector(".select-btn2");
var selectContainer = document.querySelector(".catalog_select")

showBtn.addEventListener("click", function() {
selectContainer.classList.toggle("select_style")
})

console.log(showBtn)