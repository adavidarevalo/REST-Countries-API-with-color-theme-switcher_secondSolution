import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
const header = document.querySelector(".header")