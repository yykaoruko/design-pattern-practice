{
    class Product {
    }
    class Factory {
        create(owner) {
            const p = this.createProduct(owner);
            this.registerProduct(p);
            return p;
        }
    }
    class IDCard extends Product {
        constructor(owner, id) {
            super();
            console.log(`${owner}のカードを作ります。`);
            this._id = id;
            this._owner = owner;
        }
        use() {
            console.log(`${this._owner}のカードを使います。`);
        }
        getOwner() {
            return this._owner;
        }
        getId() {
            return this._id;
        }
    }
    class IDCardFactory extends Factory {
        constructor() {
            super();
            this._owners = [];
            this._ownersInfo = {};
            this._currentId = 0;
        }
        createProduct(owner) {
            return new IDCard(owner, this._currentId++);
        }
        registerProduct(product) {
            this._owners.push(product.getOwner());
            this._ownersInfo[product.getId()] = product.getOwner();
        }
        getOwners() {
            return this._owners;
        }
        getOwnersInfo() {
            return this._ownersInfo;
        }
    }
    function main() {
        const factory = new IDCardFactory();
        const card1 = factory.create('かつ');
        const card2 = factory.create('るこ');
        card1.use();
        card2.use();
        const owners = factory.getOwners();
        console.log(owners);
        const ownersInfo = factory.getOwnersInfo();
        console.log(ownersInfo);
    }
    main();
}
