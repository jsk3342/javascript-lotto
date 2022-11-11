const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #userTicket

  play() { 
    this.insertMoney();

  }

  insertMoney() {
      MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (userMoney) => {
        this.userTicketCount = this.makeUserTicket(userMoney);
        this.totalUserTicket = this.setUserTicket(this.userTicketCount);
        this.totalUserTicket.forEach(userTickeNumber => {
          MissionUtils.Console.print(userTickeNumber)
        })
      })
  }

  makeUserTicket(userMoney) {
    const ticket = userMoney / 1000;
    return ticket;
  }

  setUserTicket(userTicketCount) {
    const totalUserTicket = [];
    for (let makeTicket = 0; makeTicket < userTicketCount; makeTicket++){
      const userTicket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a-b)
      totalUserTicket.push(userTicket)
    }

    return totalUserTicket;
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

const app = new App();
app.play();

module.exports = App;
