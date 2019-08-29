{
  class TicketMaker {
    private static _ticket = 1000;
    private static _ticketMaker: TicketMaker = new TicketMaker();
    private constructor() {}
    public static getNextTicketNumber(): number {
      return this._ticket++;
    }
    public static getTicketMaker(): TicketMaker {
      return this._ticketMaker;
    }
  }
  function ticketMaker(): void {
    console.log(TicketMaker.getNextTicketNumber());
    console.log(TicketMaker.getNextTicketNumber());
    console.log(TicketMaker.getNextTicketNumber());
    const tm1 = TicketMaker.getTicketMaker();
    const tm2 = TicketMaker.getTicketMaker();
    console.log(tm1 === tm2);
  }
  ticketMaker();
}

{
  class Triple {
    private _id: number;
    private static _triples = {
      0: new Triple(0),
      1: new Triple(1),
      2: new Triple(2),
    };
    private constructor(id: number) {
      this._id = id;
    }
    public static getInstance(id: number): Triple {
      return this._triples[id];
    }
    public getId(): number {
      return this._id;
    }
  }
  function triple(): void {
    const one = Triple.getInstance(1);
    console.log(one);
    console.log(one.getId());

    const two = Triple.getInstance(2);
    console.log(two);
    console.log(two.getId());
  }
  triple();
}
