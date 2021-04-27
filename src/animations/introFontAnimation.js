import anime from 'animejs/lib/anime.es';

const introFontAnimation = () => anime.timeline({ loop: false })
  .add({
    targets: '.ml7 .letter',
    translateY: ['1.1em', 0],
    translateX: ['0.55em', 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 500,
    easing: 'easeOutExpo',
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: '.searchBoxWrapper',
    easing: 'easeOutExpo',
    width: '60%',
    duration: 500,
    borderWidth: [0, 1],
  })
  .add({
    targets: '.searchBoxWrapper',
    easing: 'easeOutExpo',
    duration: 500,
    height: '0.6em',
    paddingBottom: '1.15em',
    borderRadius: '10px',
  });

export default introFontAnimation;
