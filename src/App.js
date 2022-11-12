const MissionUtils = require("@woowacourse/mission-utils");

class App {
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
        this.inputUserNumber();
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

  inputUserNumber() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', userInputNumber => {
      const checkList = userInputNumber.split(",").map(number => +number)
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", bonusNumber => {
        checkList.push(Number(bonusNumber))
        MissionUtils.Console.print(checkList)
      })
    })
  }

  setRank() {

  }

  rankMessege() {

  }

  rankPrice() {

  }

  setResult() {
    
  }



  showResult() {

  }
}

const app = new App();
app.play();

module.exports = App;
