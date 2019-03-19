import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
import { startCase } from 'lodash';
import * as State from './state';
import Navigo from 'navigo';
import axios from 'axios';
// import nameChecker from './src/Greeter';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');

function render(state){
    console.log(state);

    if(!state.links.includes('Blog')){
        state.posts = [];

        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                state.posts = response.data;
                console.log('inside axios call', state.posts);
            });
    }

    root.innerHTML = `
    ${Navigation(state.links)}
    ${Footer(state)}
    ${Header(state.title)}
    ${Content(state.posts)}
`;

    router.updatePageLinks();
}

function navHandler(params){
    var destination = startCase(params.page);

    render(State[destination]);
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(((response) => console.log((response.data))
    
    )
    ); 