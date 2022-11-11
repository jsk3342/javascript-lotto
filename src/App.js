const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto")
const lotto = new Lotto();

class App {
  play() { }

  insertMoney() {
      this.#console.readLine('구입금액을 입력해 주세요.', (userMoney) => {
          this.#userTicket = this.makeUserTicket(userMoney);
          console.log(this.#userTicket)
      })
  }

  makeUserTicket(userMoney) {
    const ticket = userMoney / 1000;
    return ticket;
  }

  setRank() {

  }

  rankMessege() {

  }

  rankPrice() {

  }

  setResult() {
    
  }

  inputUserNumber() {

  }

  showResult() {

  }
}

module.exports = App;
