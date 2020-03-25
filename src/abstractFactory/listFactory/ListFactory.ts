import { Factory } from '../factory/Factory';

class ListFactory extends Factory {
  constructor() {
    super();
  }
  public createLink(caption: string, url: string) {
    return new ListLink(caption, url);
  }
  public createTray(caption: string) {
    return new ListTray(caption);
  };
  public createPage(title: string, auther: string) {
    return new ListPage(title, auther);
  };
};

export default ListFactory;
