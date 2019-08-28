{
  abstract class Product {
    public abstract use(): void;
  }

  abstract class Factory {
    create(owner: string): Product {
      const p: Product = this.createProduct(owner);
      this.registerProduct(p);
      return p;
    }
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
  }

  class IDCard extends Product {
    private _owner: string;
    private _id: number;
    constructor(owner: string, id: number) {
      super();
      console.log(`${owner}のカードを作ります。`);
      this._id = id;
      this._owner = owner;
    }
    public use() {
      console.log(`${this._owner}のカードを使います。`);
    }
    public getOwner(): string {
      return this._owner;
    }
    public getId(): number {
      return this._id;
    }
  }

  type OwnersInfoType = {
    [key: number]: string;
  };
  class IDCardFactory extends Factory {
    private _owners: string[] = [];
    private _ownersInfo: OwnersInfoType = {};
    private _currentId: number = 0;
    constructor() {
      super();
    }
    protected createProduct(owner: string) {
      return new IDCard(owner, this._currentId++);
    }
    protected registerProduct(product: IDCard) {
      this._owners.push(product.getOwner());
      this._ownersInfo[product.getId()] = product.getOwner();
    }
    public getOwners(): string[] {
      return this._owners;
    }
    public getOwnersInfo() {
      return this._ownersInfo;
    }
  }

  function main(): void {
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
