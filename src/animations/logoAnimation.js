import anime from 'animejs/lib/anime.es';

const logoAnimation = () => anime.timeline({ loop: false })
  .add({
    targets: '.logo',
    opacity: 1,
    easing: 'linear',
    duration: 1000,
  });

export default logoAnimation;
