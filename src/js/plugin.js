import '../css/plugin.scss';

class Plugin {
    constructor(props){
        init();
    }
    init(){
        document.querySelector('body').innerText = '这是插件初始化写下的一段话'
    }
}

export default Plugin;
