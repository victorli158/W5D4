class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let parsedHours = this._parseTime(this.hours);
    let parsedMinutes = this._parseTime(this.minutes);
    let parsedSeconds = this._parseTime(this.seconds);
    let time = `${parsedHours}:${parsedMinutes}:${parsedSeconds}`;
    console.log(time);
  }

  _tick() {
    this._incrementSeconds();
    this.printTime();
  }

  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }

  _parseTime(time) {
    if (time < 10) {
      time = `0${time}`;
    }
    return time;
  }
}

const clock = new Clock();
