import { createTriangle } from './triangle-calculator';

function component() {
    const element = document.createElement('div');
    element.id = 'app';

    element.innerHTML = createTriangle().join(' ');

    return element;
}

document.body.appendChild(component());
