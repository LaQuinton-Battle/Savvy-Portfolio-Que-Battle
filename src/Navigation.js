function linkBuilder(linksArr){
    var i;
    var linksHTML = '';

    while(i < linksArr.length){
        linksHTML += `<li><a href="./${linksArr[i]}">${linksArr[i]}</a><li>`;
        i++;
    }

    return linksHTML;
}

export default function Navigation(state){
    return `
    <div id="nav">
            <ul class="Container">
                ${linkBuilder(state.links)}
                <li> <a class="facepic" href=".">home</a></li>
                <li> <a class="facepic" href="./blog">blog</a></li>
                <li> <a class="facepic" href="./contact">pontact</a></li>
                <li> <a class="facepic" href="./Projects">projects</a>
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
