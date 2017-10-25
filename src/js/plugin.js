import '../css/plugin.scss';

class plugin {
    constructor(props){
    }
    init(){
        document.querySelector('body').innerText = '这是插件初始化写下的一段话'
    }
}

export default plugin;
