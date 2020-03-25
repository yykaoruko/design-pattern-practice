import Link from './Link';
import Tray from './Tray';
import Page from './Page';

export abstract class Factory {
  constructor() {}

  public abstract createLink(caption: string, url: string): Link;
  public abstract createTray(caption: string): Tray;
  public abstract createPage(title: string, auther: string): Page;

  getFactory(classname: string): Factory | null {
    let factory: Factory = null;
    try {
      const cls = this.getClass(classname) as any; // うう
      factory = new cls();
    } catch (err) {
      console.log(err);
    }
    return factory;
  }
  getClass(classname: string): Function {
    return Function(`return (${classname})`)();
  }
}

export default Factory;