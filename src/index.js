import { createTriangle } from './triangle-calculator';
import '@fontsource/abel';
import './styles/main.scss';

function createColumnElement(item) {
    const element = document.createElement('span');
    element.classList.add('pascal-t-column');

    element.innerHTML = item;

    return element;
}

function createRowElement(...children) {
    const element = document.createElement('div');
    element.classList.add('pascal-t-row');

    children.forEach((child) => element.appendChild(child));

    return element;
}

function component() {
    const element = document.createElement('div');
    element.id = 'app';

    const triangle = createTriangle(10);

    triangle.forEach((row) => {
        const columnElements = row.map(createColumnElement);
        const rowElement = createRowElement(...columnElements);

        element.appendChild(rowElement);
    });

    return element;
}

document.body.appendChild(component());
