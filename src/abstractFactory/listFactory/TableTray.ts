import Tray from '../factory/Tray';

class TableTray extends Tray {
  constructor(caption: string) {
    super(caption);
  }
  makeHTML() {
    let buffer = ``;
    return buffer;
  }
};

export default TableTray;
