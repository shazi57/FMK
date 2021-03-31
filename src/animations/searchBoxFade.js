import anime from 'animejs/lib/anime.es';

const searchBoxFade = () => anime.timeline({ loop: false })
  .add({
    targets: '.inputSearch',
    opacity: 1,
    easing: 'linear',
    duration: 1000,
  });

export default searchBoxFade;
