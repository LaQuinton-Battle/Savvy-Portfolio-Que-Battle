import { lowerCase } from 'lodash';

function linkBuilder(links){
    var linkHTML = '';
    var destination;
    
    
    links.forEach((link) => {
        if(link !== 'Home'){
            destination = lowerCase(link);
        }

    
        linkHTML += `
        <li>
        <a data-navigo href="./${destination}">;
            ${link}
           </a>
          </li>  
        `;
    });

    return linkHTML;
}

//     var linkHTML = links.map(link) => {
//         var destination = '';

//         if(link !== 'Home'){
//             destination = lowerCase(link);
//         }

//         return `<li>
//         <a data navigo href="./${destination}">;
//             ${link}
//         </a>
//        </li>
//     `;
// }).join('');


//     return linkHTML;
// }


export default function Navigation(state){
    return `
    <div id="nav">
            <ul class="Container">
                <li> <a class="facepic" href=".">Home</a></li>
                <li> <a class="facepic" href="./blog">Blog</a></li>
                <li> <a class="facepic" href="./contact">Contact</a></li>
                <li> <a class="facepic" href="./Projects">Projects</a>
                    <ul>
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                        
                    </ul>
                </li>
            </li>
        </ul>
    </div>
    `;
}
