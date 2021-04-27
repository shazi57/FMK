import anime from 'animejs/lib/anime.es';

const logoDisappearAnimation = () => anime.timeline({ loop: false })
  .add({
    targets: ['.logo', '.logoWrapper'],
    translateY: [0, '50em'],
    easing: 'easeInBack',
    duration: 1000,
    display: 'none',
  });

export default logoDisappearAnimation;
