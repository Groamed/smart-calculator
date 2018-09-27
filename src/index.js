class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.num = initialValue;
    this.equ = [initialValue];
  }

  add(number) {
    // your implementation
    this.equ.push('+', number);
    this.calc();
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.equ.push('-', number);
    this.calc();
    return this;
  }

  multiply(number) {
    // your implementation
    this.equ.push('*', number);
    this.calc();
    return this;
  }

  devide(number) {
    // your implementation
    this.equ.push('/', number);
    this.calc();
    return this;
  }

  pow(number) {
    // your implementation
    this.equ.push('^', number);
    this.calc();
    return this;
  }

  valueOf () {
    return this.num;
  }

  calc() {
    var work = [], pos, left, right, count = 0;
    this.equ.forEach(el => {
      work[work.length] = el;
    });
    while((pos = work.lastIndexOf('^')) != -1) {
      left = work[pos - 1];
      right = work[pos + 1];
      this.num = Math.pow(left, right);
      work.splice(pos - 1, 3, this.num);
    }
    while((work.indexOf('*') != -1) || (work.indexOf('/') != -1)) {
      if((work.indexOf('*') != -1) && (work.indexOf('/') != -1)) {
        pos = Math.min(work.indexOf('*'), work.indexOf('/'))
      } else if(work.indexOf('*') != -1) {
        pos = work.indexOf('*');
      } else {
        pos = work.indexOf('/');
      }
      left = work[pos - 1];
      right = work[pos + 1];
      if(work[pos] == '*') {
        this.num = left * right;
      } else if(work[pos] == '/') {
        this.num = left / right;
      }
      work.splice(pos - 1, 3, this.num);
    }
    while((work.indexOf('+') != -1) || (work.indexOf('-') != -1)) {
      if((work.indexOf('+') != -1) && (work.indexOf('-') != -1)) {
        pos = Math.min(work.indexOf('+'), work.indexOf('-'))
      } else if(work.indexOf('+') != -1) {
        pos = work.indexOf('+');
      } else {
        pos = work.indexOf('-');
      }
      left = work[pos - 1];
      right = work[pos + 1];
      if(work[pos] == '+') {
        this.num = left + right;
      } else if(work[pos] == '-') {
        this.num = left - right;
      }
      work.splice(pos - 1, 3, this.num)
    }
    this.num = work[0];
  } 
}

module.exports = SmartCalculator;
