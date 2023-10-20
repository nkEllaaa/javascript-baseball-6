const MissionUtils = require("@woowacourse/mission-utils");

const checkValidation = (random, user) => {
  if (user.length !== 3) {
    console.log("[ERROR] 잘못된 형식의 숫자입니다.");
    // MissionUtils.Console.readLine(user, error);
  } 
  console.log(user);
};

const createNum = () => {
  const computer = [];
  while (computer.length < 3) {
    const randomNum = MissionUtils.Random.pickNnkumberInRange(1, 9);
    if (!computer.includes(randomNum)) {
      computer.push(randomNum);
    }
    return randomNum;
  }
};

const testCreateNum = () => {
  let randomIndexArray = [];
  while (randomIndexArray.length < 3) {
    randomNum = Math.floor(Math.random() * 9) + 1;
    if (!randomIndexArray.includes(randomNum)) {
      randomIndexArray.push(randomNum);
    }
  }
  console.log(randomIndexArray);
  return randomIndexArray;
};

const gameinit = () => {
  // MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  // const userNum = MissionUtils.Console.readLine("숫자를 입력해주세요 : ");
  console.log("숫자 야구 게임을 시작합니다.")

  const userNum = prompt("숫자를 입력해주세요 : ");
  // const userNumToArr = userNum.split('');

  let generateNum = [];
  generateNum = testCreateNum();
  // generateNum = createNum();

  checkValidation(generateNum, userNum);
};