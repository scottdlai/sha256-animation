class Speed {
  normal: number;
  fast: number;
  slow: number;

  constructor(speed: number) {
    this.normal = speed;
    this.fast = speed / 10;
    this.slow = speed * 3;
  }

  public setSpeed(speed: number) {
    this.normal = speed;
    this.fast = speed / 10;
    this.slow = speed * 3;
  }
}

export default new Speed(250);
