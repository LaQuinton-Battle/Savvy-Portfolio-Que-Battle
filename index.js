import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
// import nameChecker from './src/Greeter';

var State = {
    'Home': {
        'title': 'Welcome to my Savvys Coders website!'
    },


    'Blog': {
        'title': 'Welcome to my blog!'
    },


    'Contact': {
        'title': 'Welcome to my contact!'
    },

    'Projects': {
        'title': 'Welcome to my projects!'
    }
};


var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
${Navigation(state)}
${Footer(state)}
${Header(state.title)}
${Content(state)}
`;


    document.querySelector('#nav li:nth-child(1) > a').addEventListener('click', (e) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });


    document.querySelector('#nav li:nth-child(2) > a').addEventListener('click', (e) => {
        event.preventDefault();
        render(State[event.target.textContent]);
        
        // render(State.Blog);
    });


    document.querySelector('#nav li:nth-child(3) > a').addEventListener('click', (e) => {
        event.preventDefault();
        render(State[event.target.textContent]);

        // render(State.Contact);
    });


    document.querySelector('#nav li:nth-child(4) > a').addEventListener('click', (e) => {
        event.preventDefault();
        render(State[event.target.textContent]);

        // render(State.Projects);
    });
}


render(State.Home);

// nameChecker();
