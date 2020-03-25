import Link from '../factory/Link';

class ListTray extends Link {
  constructor(caption: string, url: string) {
    super(caption, url);
  }
  public makeHTML() {
    return `<td><a href="${this.url}">${this.caption}</a></td>`;
  }
};

export default ListTray;
