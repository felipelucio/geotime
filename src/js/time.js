export default class Time {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.start = data.start;
    this.end = data.end;
    this.division = data.division;
  }

  get duration() {
    return this.start - this.end;
  }

  timePercent(total=4600e6) {
    return ((this.duration / total) * 100.0).toFixed(12);
  }

  bottomPercent(total=4600e6) {
    return (((total - this.start) / total) * 100.0).toFixed(12);
  }
}