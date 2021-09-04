import join from 'lodash/join'
import './style.css'
import l from './footer.json'
import printMe from './print.js';


function component() {
    console.log(l)
    const element = document.createElement('div');
    element.classList.add('connect')
    const btn = document.createElement('button');

    element.innerHTML = join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}