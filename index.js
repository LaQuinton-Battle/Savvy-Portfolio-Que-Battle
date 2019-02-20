import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
// import nameChecker from './src/Greeter';


var root = document.querySelector('#root');


root.innerHTML = `
${Navigation()}
${Footer()}
${Header('"What does Que represent?"')}
${Content()}
`;

// nameChecker();
