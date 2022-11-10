const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto');


class View {
    #console
    constructor() {
        this.#console = MissionUtils.Console
    }

    insertMoney() {
        this.#console.readLine('구입금액을 입력해 주세요.', (userMoney) => {
            this.makeUserTicket(userMoney);
        })
    }

    makeUserTicket(userMoney) {
        
    }

    inputUserNumber() {

    }

    showResult() {

    }
}

new View()
module.exports = View;