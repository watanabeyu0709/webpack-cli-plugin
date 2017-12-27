import '../css/plugin.scss';

class Plugin {
    constructor(props){
        this.option = props;
        this.init()
    }
    init(){
        //参数合理性判断
        let allowParams = new Set(['...','...']);
        let userParams = new Set();
        for (let i in this.option) {
            userParams.add(i)
        }
        let difference = new Set([...userParams].filter(x => !allowParams.has(x)));//计算用户的参数和允许参数的差集
        if (difference.size > 0) {//有未定的参数键值对
            console.warn(`'${Array.from(difference)}' are not allowed , param 'option' can only accept these configuration : '${Array.from(allowParams)}'`)
        }
        //效果
        document.querySelector('body').innerText = '这是插件初始化写下的一段话'
    }
}

export default Plugin;
