const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');


function everySecond() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() % 12;
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(everySecond, 1000);