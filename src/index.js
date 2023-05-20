import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const randomNum = Math.floor(Math.random() * 10) + 1;

function askQuestion() {
  rl.question('1から10までの数を当ててみてください: ', function (answer) {
    if (Number(answer) === randomNum) {
      console.log('正解です！');
      rl.close();
    } else {
      console.log('不正解です。もう一度お試しください。');
      askQuestion();
    }
  });
}

console.log('数当てゲームを開始します！');
askQuestion();
