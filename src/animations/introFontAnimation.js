import anime from 'animejs/lib/anime.es';

const introFontAnimation = () => anime.timeline({ loop: false })
  .add({
    targets: '.ml7 .letter',
    translateY: ['1.1em', 0],
    translateX: ['0.55em', 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: 'easeOutExpo',
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: '.searchBoxWrapper',
    easing: 'easeOutExpo',
    width: '80%',
    duration: 750,
    borderWidth: [0, 1],
  })
  .add({
    targets: '.searchBoxWrapper',
    easing: 'easeOutExpo',
    duration: 750,
    height: '1em',
    paddingBottom: '0.6em',
    borderRadius: '10px',
  });

export default introFontAnimation;
