import './styles/main.sass';
import './styles/scroll/_nav.sass';

// nice
import './js/nav';

const nav = document.querySelector('.y-card');
const ref = document.querySelector('.main-reference');

let userHasScrolled = false;

window.onscroll = (e) =>
{
    console.log(window.scrollY)
    if(window.scrollY > 200) {
        nav.classList.add('y-card-tall');
    }
    if(window.scrollY < 200) {
        nav.classList.remove('y-card-tall')
    }
}
