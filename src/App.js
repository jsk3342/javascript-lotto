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
        //totalUserTicket과 userTickeNumber를 비교하면서 몇 개 일치 했는지 확인하기
        this.inputUserNumber(this.totalUserTicket);
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

  inputUserNumber(totalUserTicket) {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', userInputNumber => {
      const checkList = userInputNumber.split(",").map(number => +number)
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", bonusNumber => {
        checkList.push(Number(bonusNumber))
        this.makeRankData(totalUserTicket, checkList)
      })
    })
  }

  makeRankData(totalUserTicket, checkList) {
    let bonusNumber = checkList.pop();
    // console.log('totalUserTicket', totalUserTicket)
    // console.log('checkList', checkList)
    // console.log("보너스", bonusNumber)
    const resultList = [];
    totalUserTicket.forEach(userTicket => {
      let target = 0;
      let point = 0;
      let bonusPoint = 0;
      for (let i = 0; i < 6; i++) {
        target = checkList[i]
        if (userTicket.includes(target)) {
          point++;
        }
      }
      if (userTicket.includes(bonusNumber)) {
          bonusPoint++;
      }
      resultList.push([point,bonusPoint])
      // console.log(userTicket, '유저 티켓')
      // console.log(count, '몇개 맞췄는지?')
      // console.log(bonusCount, "보나스 몇점?")
    })

    this.rankMessege(resultList)
  }

  rankMessege(resultList) {
    const rankList = [0, 0, 0, 0, 0, 0];
    let secondRank = 0;
    resultList.forEach(result => {
      let [point, bonusPoint] = result;
      if (point === 0) {
        return;
      }

      if (point === 5 && bonusPoint === 1) {
        secondRank++;
        return;
      }
      rankList[point - 1]++;
    });

    console.log(rankList, secondRank)
    
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
