class Employee {
  constructor(name, department, hoursPerMonth, hourlyPay) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.hourlyPay = hourlyPay;
  }

  calculateMonthlyPay() {
    return this.hoursPerMonth * this.hourlyPay;
  }
}

class FullTime extends Employee {
  static #HOURLY_PAY = 20000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTime.#HOURLY_PAY);
  }
}

class PartTime extends Employee {
  static #HOURLY_PAY = 15000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTime.#HOURLY_PAY);
  }
}

const fullTime = new FullTime("김철수", "회계", 180);
console.log(
  `${fullTime.department}팀 ${
    fullTime.name
  }님의 이번 달 월급은 ${fullTime.calculateMonthlyPay()}원 입니다.`
); // 회계팀 김철수님의 이번 달 월급은 3600000원 입니다.

const partTime = new PartTime("박경수", "총무", 150);
console.log(
  `${partTime.department}팀 ${
    partTime.name
  }님의 이번 달 월급은 ${partTime.calculateMonthlyPay()}원 입니다.`
); // 총무팀 박경수님의 이번 달 월급은 2250000원 입니다.
