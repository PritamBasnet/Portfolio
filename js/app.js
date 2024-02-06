// gsap.registerPlugin(ScrollTrigger);
// Fix mobile version
ScrollTrigger.observe({
  trigger: 'body',
  type: "touch,pointer", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
  onUp: () => { ScrollTrigger.update(); },
});
function sheryJs() {
  // Shery.mouseFollower({
  //   //Parameters are optional.
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 0.5,
  // });
  Shery.textAnimate("#my-name" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 0.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.makeMagnet("#my-name,nav>ul>li>a>h5" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
sheryJs();
function jsOnWorkSection() {
  let categoryOfWork = document.querySelectorAll('.category-list>ul>li');
  let indexOfActiveGrid = 0;
  let grids = document.querySelectorAll(".work-container>.grid");
  categoryOfWork[indexOfActiveGrid].classList.add('active-list');
  grids[indexOfActiveGrid].classList.add('grid-active');
  categoryOfWork.forEach((category,categoryIndex)=>{
    category.addEventListener("click",()=>{
      indexOfActiveGrid = categoryIndex;
      upgradeClass(categoryIndex);
    });
  });
  function upgradeClass(categoryIndex) {
    categoryOfWork.forEach((category)=>{
      category.classList.remove('active-list')
    })
    grids.forEach((grid)=>{
      grid.classList.remove('grid-active')
    })
    categoryOfWork[indexOfActiveGrid].classList.add('active-list');
    grids[indexOfActiveGrid].classList.add('grid-active');
  }
}
jsOnWorkSection();

function gsapOnSkill() {
  gsap.to('.skill div',{
    transform:"translateX(-120%)",
    ease: "power1.inOut", 
    // duration:4,
    scrollTrigger:{
      trigger:".skill",
      scroller:"body",
      start:"top 0%",
      scrub:1,
      end:"top -100%",
      pin:true,
    }
  });
}
gsapOnSkill();