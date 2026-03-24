// JavaScript Example
class Ship {
    constructor(name, cargo) {
        this.name = name;
        this.cargo = cargo;
    }

    sail() {
        console.log(this.name + " is sailing with " + this.cargo);
    }
}

// Creating objects
const ship1 = new Ship("Titanic", "Passengers");
const ship2 = new Ship("CargoMaster", "Goods");

// Using objects
ship1.sail();
ship2.sail();

// Objects Interacting Example
class WorkerAnt {
    work() {
        console.log("Worker ant is collecting food");
    }
}

class QueenAnt {
    command(worker) {
        worker.work();
    }
}

const worker = new WorkerAnt();
const queen = new QueenAnt();

queen.command(worker);