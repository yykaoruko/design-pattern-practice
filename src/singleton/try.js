{
    class TicketMaker {
        constructor() { }
        static getNextTicketNumber() {
            return this._ticket++;
        }
        static getTicketMaker() {
            return this._ticketMaker;
        }
    }
    TicketMaker._ticket = 1000;
    TicketMaker._ticketMaker = new TicketMaker();
    function ticketMaker() {
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
        constructor(id) {
            this._id = id;
        }
        static getInstance(id) {
            return this._triples[id];
        }
        getId() {
            return this._id;
        }
    }
    Triple._triples = {
        0: new Triple(0),
        1: new Triple(1),
        2: new Triple(2),
    };
    function triple() {
        const one = Triple.getInstance(1);
        console.log(one);
        console.log(one.getId());
        const two = Triple.getInstance(2);
        console.log(two);
        console.log(two.getId());
    }
    triple();
}
