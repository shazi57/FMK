import anime from 'animejs/lib/anime.es';

const dataWindowPopIn = () => anime.timeline({ loop: false })
  .add({
    targets: ['.songListWrapper'],
    display: 'inline',
    opacity: 1,
    duration: 2000,
    translateX: ['-2em', 0],
    // translateY: ['3em', 0],
  });

export default dataWindowPopIn;
