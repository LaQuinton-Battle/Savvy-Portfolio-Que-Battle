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
