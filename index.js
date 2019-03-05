import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
import { startCase } from 'lodash';
import * as State from './state';
import Navigo from 'navigo';
// import nameChecker from './src/Greeter';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');

var render;

root.innerHTML = `
${Navigation(state)}
${Footer(state)}
${Header(state.title)}
${Content(state)}
`;


    router.updatePageLinks();
}


function navHandler(destination){
    var destination = startCase(params.page);

    render(State[destination]);
}


router
    .on('/:page', navHandler)
    .on('/blog', () => navHandler('Blog'))
    .on('/', () => navHandler('Home'))
    .resolve();

// nameChecker();
