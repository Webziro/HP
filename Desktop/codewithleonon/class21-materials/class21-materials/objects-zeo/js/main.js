//Create a stopwatch object that has four properties and three methods
stopwatch = {
    startTime: 10,
    endTime: 0,
    running: false,
    duration: 0,
    start: function() {
        this.startTime = Date.now();
        this.running = true;
    },
    stop: function() {
        this.endTime = Date.now();
        this.running = false;
        this.duration = this.endTime - this.startTime;
    },
    reset: function() {
        this.startTime = 0;
        this.endTime = 0;
        this.running = false;
        this.duration = 0;
    },
    store: function() {
        // Store the stopwatch data (e.g., in localStorage)
        localStorage.setItem("stopwatch", JSON.stringify(this));
    }
};
stopwatch.start();
    console.log("Stopwatch started");
