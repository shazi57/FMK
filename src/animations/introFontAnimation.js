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
    targets: '.line',
    easing: 'easeOutExpo',
    width: ['0%', '80%'],
    duration: 1500,
  });

export default introFontAnimation;
