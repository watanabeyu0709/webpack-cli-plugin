import '../css/app.scss';
import Plugin from './plugin';

document.getElementById('example').innerHTML = (`
    <h1>示例</h1>
    <div class="ex-1">
      
    </div>
`);

document.querySelector('.ex-1').innerHTML = (`
    <code>
        window.onload=function () { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;new Plugin().init(); <br>
        }; <br>
    </code>
`);

window.onload=function () {
    new Plugin().init();
};

