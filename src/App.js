const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #userTicket

  play() { 
    this.insertMoney();
    
  }

  insertMoney() {
      MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (userMoney) => {
        this.userTicketCount = this.makeUserTicket(userMoney);
        this.setUserTicket(this.userTicketCount);
      })
  }

  makeUserTicket(userMoney) {
    const ticket = userMoney / 1000;
    return ticket;
  }

  setUserTicket(userTicketCount) {
  //티켓의 갯수만큼 로또 번호를 발생한다.
  //로또는 길이가 6이며 1~45까지 중복되지 않는 6개의 숫자이다.
  //먼저 하나의 배열을 만들고 반환한다.
    for (let makeTicket = 0; makeTicket < userTicketCount; makeTicket++){
      const userTicket = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6).sort((a,b) => a-b)
      MissionUtils.Console.print(userTicket)
    }
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
