{
    class Singleton {
        constructor() {
            console.log('インスタンスを作成しました');
        }
        static getInstance() {
            return this._singleton;
        }
    }
    Singleton._singleton = new Singleton(); // staticメソッドはクラスのインスタンスから呼び出せない
    function main() {
        console.log('start');
        const obj1 = Singleton.getInstance();
        const obj2 = Singleton.getInstance();
        if (obj1 === obj2) {
            console.log('obj1とobj2は同じインスタンスです');
        }
        else {
            console.log('obj1とobj2は違うインスタンスです');
        }
        console.log('end');
    }
    main();
}
