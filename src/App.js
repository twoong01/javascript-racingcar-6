import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #playerNames
  #attempt
  #racingResult

  async play() {
    this.#playerNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n');
    this.#playerNames = this.#playerNames.split(',');
    this.#playerNames.forEach((el) => {
      if(el.length > 5){
        throw new Error('[ERROR]');
      }
    });
    this.#attempt = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#racingResult = Array(this.#playerNames.length).fill(0);
    Console.print(this.#playerNames);
    Console.print(this.#racingResult);
    Console.print('실행 결과')

    let count = 0;
    while(true){
      if(count > this.#attempt) break;
      this.#racingResult = this.#racingResult.map((el) => {
        if(this.pickRandomNumber()){
          return el + 1;
        }
        return el;
      })
      for(let i = 0; i < this.#playerNames.length; i++){
        const cur_result = '-'.repeat(this.#racingResult[i]);
        Console.print(`${this.#playerNames[i]} : ${cur_result}`);
      }
      Console.print('');
      count ++;
    }
    const ans = this.createResult(this.#racingResult);
    let answer = '최종 우승자 : ';
    ans.forEach((el) => {
      answer += `${this.#playerNames[el]}`;
    });
    Console.print(answer);
  }

  pickRandomNumber() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if(randomNumber >= 4){
      return true;
    }
    return false;
  }

  createResult(arr) {
    const max = Math.max(...arr);
    return arr.reduce((acc, val, index) => {
      if(val === max){
        acc.push(index);
      }
      return acc;
    }, []);
  }
}

export default App;
