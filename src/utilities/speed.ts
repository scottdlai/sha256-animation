class Speed {
  medium: number;
  fast: number;
  slow: number;

  constructor(speed: number) {
    this.medium = speed;
    this.fast = speed / 10;
    this.slow = speed * 3;
  }

  public setSpeed(speed: number) {
    this.medium = speed;
    this.fast = speed / 10;
    this.slow = speed * 3;
  }
}

export default new Speed(250);
