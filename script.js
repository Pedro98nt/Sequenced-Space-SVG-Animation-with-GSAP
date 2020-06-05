const astronaut = $('.astronaut');
const moon = $('.moon');
const moonPosition = moon.position();
const moonHeight = moon.outerHeight();
const star = $('.star, .rock');
const wrapper = $('.wrapper');
const title = $('.title');

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function sceneOne() {

  let tl = gsap.timeline(),
  mySplitText = new SplitText(title, { type: 'words, chars' }),
  chars = mySplitText.chars;

  tl.add('scene1');

  gsap.set(title, { perspective: 1000 });

  tl.from(chars, { duration: 0.8, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back", stagger: 0.01 }, "+=0");

  return tl;
}

function sceneTwo() {

  let tl = new TimelineMax({});

  tl.add('scene2');

  tl.to(astronaut, 5, {
    delay: 0.9,
    y: moonPosition.top - moonHeight,
    x: moonPosition.left,
    rotation: 360,
    scale: 0.5 });


  return tl;
}

function sceneThree() {
  let tl = new TimelineMax({
    repeat: -1,
    delay: 3 });


  tl.add('scene3');

  for (i = 0; i < star.length; i++) {
    TweenMax.from(star[i], randomNumber(1, 3), {
      opacity: 0,
      yoyo: true,
      delay: randomNumber(0.5, 1.5),
      repeat: -1,
      ease: Linear.easeNone });

  }

  return tl;
}

function sceneFour() {

  let tl = new TimelineMax({});

  tl.to(title, 0.8, {
    scale: 1.1,
    rotation: -25,
    color: '#339F94' });


  tl.add('scene4');

  return tl;
}

var master = new TimelineMax();

master.add(sceneOne(), "scene1");
master.add(sceneTwo(), "scene2");
master.add(sceneThree(), "scene3");
master.add(sceneFour(), "-=3.2", "scene4");