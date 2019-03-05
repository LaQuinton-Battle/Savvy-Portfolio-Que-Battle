import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
import { startCase } from 'lodash';


// import nameChecker from './src/Greeter';

var State = {
    'Home': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'Welcome to my Savvys Coders website!'
    },


    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects,' ],
        'title': 'Welcome to my blog!'
    },


    'Contact': {
        'links': [ 'Home', 'Contact', 'Projects,'   ],
        'title': 'Welcome to my contact!'
    },

    'Projects': {
        'links': [ 'Home', 'Contact', 'Projects', ],
        'title': 'Welcome to my projects!'
    }
};


var root = document.querySelector('#root');

var render;

function navHandler(e){
    var destination = startCase(e.target.textContent);

    e.preventDefault();

    render(State[destination]);
}


render = function Render(state){
    var links;
    var i = 0;
    
    root.innerHTML = `
${Navigation(state)}
${Footer(state)}
${Header(state.title)}
${Content(state)}
`;


    links = document.querySelectorAll('#nav > ul > li > a');

    while(i < links.length){
        links[i].addEventListener('click', (e) => {
            e.preventDefault();
            render(State[e.target.textContent]);
        });

        links[i].addEventListener('click', navHandler);

        i++;
    }
};

render(State.Home);

// nameChecker();
