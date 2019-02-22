import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
// import nameChecker from './src/Greeter';

var home = {
    'title': 'Welcome to my Savvys Coders website!'
};


var blog = {
    'title': 'Welcome to my blog!'
};


var contact = {
    'title': 'Welcome to my contact!'
};


var projects = {
    'title': 'Welcome to my projects!'
};


var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
${Navigation(state)}
${Footer(state)}
${Header(state.title)}
${Content(state)}
`;
}

render(home);


document.querySelector('#nav li:nth-child(1) > a').addEventListener('click', (e) => {
    console.log(e.preventDefault());
    console.log(e.target.href);
    render(home);
});


document.querySelector('#nav li:nth-child(2) > a').addEventListener('click', (e) => {
    console.log(e.preventDefault());
    console.log(e.target.href);
    render(blog);
});


document.querySelector('#nav li:nth-child(3) > a').addEventListener('click', (e) => {
    console.log(e.preventDefault());
    console.log(e.target.href);
    render(contact);
});


document.querySelector('#nav li:nth-child(4) > a').addEventListener('click', (e) => {
    console.log(e.preventDefault());
    console.log(e.target.href);
    render(projects);
});


// nameChecker();
