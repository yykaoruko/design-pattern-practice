import Builder from './builder';

class Director {
  private _builder: Builder;
  constructor(builder: Builder) {
    this._builder = builder;
  }
  public build(): void {
    this._builder.makeTitle('Greeting');
    this._builder.makeString('朝から昼にかけて');
    this._builder.makeItems([
      'おはようございます',
      'こんにちは'
    ]);
    this._builder.makeString('夜に');
    this._builder.makeItems([
      'こんばんは',
      'おやすみなさい',
      'さようなら',
    ]);
    this._builder.close();
  }
}

export default Director;
