import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
console.log(player);
console.log(iframe);
