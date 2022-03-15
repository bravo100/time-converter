// timer class
class Timer {
  constructor (_ngTime, _utc) {
    this._ngTime = _ngTime;
    this._utc = _utc;
    this._oTime = this._ngTime + this._utc;
    this._error = false;
  }

  pm (_val) {
    _val -= 12;
    _val = `${_val} pm`;

    return _val;
  }

  solution () {
    (this._ngTime < 0 || this._ngTime > 24) ? this._error = `Invalid input` : (this._ngTime >= 13 && this._ngTime <= 24) ? this._ngTime = this.pm(this._ngTime) : this._ngTime = `${this._ngTime} am`;

    if (this._oTime < 0) {
      this._oTime += 24;
    }
    
    if (this._oTime > 24) {
      this._oTime -= 24;
    }

    this._oTime = (this._oTime >= 13 && this._oTime <= 24) ? this.pm(this._oTime) : `${this._oTime} am`;
  }

  getTimeMsg () {
    this.solution();

    return (this._error == false) ? `${this._ngTime} Nigerian time is ${this._oTime} American time` : `ERROR:: ${this._error}`;
  }
}

document.querySelector(`.btn`).addEventListener(`click`, e => {
  e.preventDefault();

  
  let ngTime = Number(document.querySelector(`.ngTime`).value);
  let utc = Number(document.querySelector(`.utc`).value);
  
  let timer = new Timer(ngTime, utc);

  let output = timer.getTimeMsg();
  
  document.querySelector(`.output`).innerHTML = output;
});