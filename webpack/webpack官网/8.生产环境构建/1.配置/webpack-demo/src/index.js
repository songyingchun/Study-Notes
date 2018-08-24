import {cube} from './math.js';

if (process.env.NODE_ENV == 'development') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');
    console.log(123123);
       element.innerHTML = [
             'Hello webpack!',
             '5 cubed is equal to ' + cube(5)
           ].join('\n\n');
    
    return element;
}

document.body.appendChild(component());
