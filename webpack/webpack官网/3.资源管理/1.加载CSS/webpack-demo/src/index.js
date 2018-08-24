import _ from 'lodash';
import './style.css';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    console.log(element);
    return element;
}

document.body.appendChild(component());