const { log } = require("console");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

//emit: used to trigger an event
//on: used to add a callback function to be executed when the event is triggered

eventEmitter.on("start", () => {
  log("started");
});

eventEmitter.emit("start");

//can pass arguments to the event handler by passing them as additional arguments to emit()
eventEmitter.on("start", (number) => {
  log(`started ${number}`);
});
eventEmitter.emit("start", 23);

//multiple arguments
eventEmitter.on("start", (start, end) => {
  log(`started from ${start} to ${end}`);
});
eventEmitter.emit("start", 1, 100);
