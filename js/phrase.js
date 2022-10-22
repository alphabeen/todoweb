const phrases = [
  {
    phrase: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author: "Mohatma Gandhi",
  },
  {
    phrase: "꿈이 있다면, 그 꿈을 잡고 절대 놓아주지마라.",
    author: "Carol burnett",
  },
  {
    phrase: "기운과 끈기는 모든 것을 이겨낸다.",
    author:"Bejamin Franklin",
  },
  {
    phrase: "절대로, 절대로, 절대로, 절대로 포기하지 마라",
    author: "Winston Churchill",
  },
  {
    phrase: "모든 위대한 것에는 작은 시작이 있다.",
    author: "George Bernard Shaw",
  },
  {
    phrase: "성공은 우연이 아니다. 그것은 노력, 인내, 학습, 공부, 희생이며 무엇보다 당신이하고있는 일에 대한 사랑이거나 배우는 것이다.",
    author: "Nora Roberts",
  },
  {
    phrase: "나는 내 인생에서 계속해서 실패했다. 이것이 내가 성공하는 이유다.",
    author: "Michael Jeffrey Jordan",
  },
  {
    phrase: "실수를 한 적이없는 사람은 새로운 것을 시도하지 않는다.",
    author: "Albert Einstein",
  },
  {
    phrase: "당신이 원했던 모든 것은 두려움의 반대편에 있다.",
    author: "George Addair",
  },
  {
    phrase: "사람의 마음이 생각하고 믿을 수있는 것은 무엇이든 이룰 수 있다.",
    author: "Napoleon Hill",
  }
]

const phrase = document.querySelector("#phrase span:first-child");
const author = document.querySelector("#phrase span:last-child");

const todaysPhrase = phrases[Math.floor(Math.random() * phrases.length)];

phrase.innerText = todaysPhrase.phrase;
author.innerText = todaysPhrase.author;
