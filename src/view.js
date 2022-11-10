const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto');


class View {
    #console
    #userTicket
    constructor() {
        this.#console = MissionUtils.Console
        this.insertMoney();
    }

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

    inputUserNumber() {

    }

    showResult() {

    }
}

new View()
module.exports = View;