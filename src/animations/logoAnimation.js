import anime from 'animejs/lib/anime.es';

const paths = document.getElementsByTagName('path');
const logoAnimation = () => anime.timeline({ loop: false })
  .add({
    targets: '.logo',
    opacity: 1,
    easing: 'linear',
    duration: 1000,
  })
  .add({
    targets: [anime.path(paths[1])],
    translateX: anime.path(paths[1]),
    translateY: anime.path(paths[1]),
    rotate: anime.path(paths[1]),
    duration: 1000,
    easing: 'linear',
  });

export default logoAnimation;
