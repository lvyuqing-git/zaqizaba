class Tab {
    constructor(obj) {
        let option = {
            selectName: '.item',
            eventType: 'mouseover',
            activeClassName: 'active',
            contentName: '.content',
            contentClassName: 'show',

        }
        Object.assign(option, obj);
        Object.assign(this, option);

        this.items = document.querySelectorAll(this.selectName);
        this.contents = document.querySelectorAll(this.contentName);
        this.addEvent();
    }
    //注册事件
    addEvent() {
        this.items.forEach((element, index) => {
            element.addEventListener(this.eventType, (event) => {
                let target = event.target;
                this.huanLei(target);
                this.huanConten(index)
            })
        });
    }
    //切换分类
    huanLei(target) {
        this.items.forEach((e) => {
            e.classList.remove(this.activeClassName);
        });
        target.classList.add(this.activeClassName);

    }
    //切换内容
    huanConten(index) {
        this.contents.forEach((e) => {
            e.classList.remove(this.contentClassName);
        });
        this.contents[index].classList.add(this.contentClassName);
    }
}
// let tab =new Tab('.item','mouseover','active','.content','show');
let tab = new Tab({
    eventType: 'mouseover',
    selectName: '.item',
    activeClassName: 'a2',

});
