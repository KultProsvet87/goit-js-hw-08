import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STOR_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

if (localStorage.getItem(LOCAL_STOR_KEY)) {
  player.setCurrentTime(localStorage.getItem(LOCAL_STOR_KEY));
}

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate({ seconds }) {
  localStorage.setItem(LOCAL_STOR_KEY, seconds);
}
