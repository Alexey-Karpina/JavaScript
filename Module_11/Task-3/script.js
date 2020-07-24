"use strcit";

const timer = document.querySelector("#timer-1");
class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
    this.intervalId = null;
  }
  startTimer() {
    const dayValue = this.selector.querySelector(`span[data-value = "days"]`);
    const hoursValue = this.selector.querySelector(
      `span[data-value = "hours"]`
    );
    const minValue = this.selector.querySelector(`span[data-value = "mins"]`);
    const secValue = this.selector.querySelector(`span[data-value = "secs"]`);
    const finalDate = this.targetDate.getTime();
    this.intervalId = setInterval(() => {
      const timeNow = Date.now();
      const time = finalDate - timeNow;
      if (
        dayValue.textContent == 0 &&
        hoursValue.textContent == 0 &&
        minValue.textContent == 0 &&
        secValue.textContent == 0
      ) {
        clearInterval(this.intervalId);
        return alert(`Congratulations, ${this.targetDate} has come!`);
      }
      if (time < 0) {
        clearInterval(this.intervalId);
        return alert(`This Date is already in the past`);
      }
      dayValue.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      hoursValue.textContent = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minValue.textContent = Math.floor(
        (time % (1000 * 60 * 60)) / (1000 * 60)
      );
      secValue.textContent = Math.floor((time % (1000 * 60)) / 1000);
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.intervalId);
  }
}
// const test = new CountdownTimer(timer, "Jul 23, 2020, 13:08");
// test.startTimer();
