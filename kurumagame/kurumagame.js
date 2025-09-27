// くるまゲーム メインスクリプト
const bgList = ["haikei1.png", "haikei2.png", "haikei3.png", "haikei4.png", "haikei5.png"];
const roadList = ["road1.png", "road2.png", "road3.png", "road4.png"];
const mainCarImg = "けいじどうしゃ.gif";
const carImgs = ["car1.png", "car2.png", "car3.png", "car4.png"];
const carNames = ["car1", "car2", "car3", "car4"];
const carCount = 4;
const minLanes = 1, maxLanes = 4;
let laneNum = 4;
let bgIdx = 0;
let speedMode = "random"; // "random" or 1-5
let cars = [];
let carId = 0;

const game = document.getElementById("game");

function setBackground(idx) {
  bgIdx = idx;
  game.style.background = `url('${bgList[idx]}') center/cover no-repeat`;
}

function renderBgBtns() {
  const bgBtns = document.querySelector(".bg-btns");
  bgBtns.innerHTML = bgList.map((bg, i) => `<button onclick="setBackground(${i})">${i+1}</button>`).join("");
}

function setLanes(n) {
  laneNum = n;
  renderRoads();
  resetCars();
}

function renderLaneBtns() {
  const laneBtns = document.querySelector(".lane-btns");
  laneBtns.innerHTML = Array.from({length: maxLanes}, (_,i) => `<button onclick="setLanes(${i+1})">${i+1}レーン</button>`).join("");
}

function setSpeed(mode) {
  speedMode = mode;
  resetCars();
}

function renderSpeedBtns() {
  const speedBtns = document.querySelector(".speed-btns");
  let html = "";
  for(let i=1;i<=5;i++) html += `<button onclick=\"setSpeed(${i})\">${i}</button>`;
  html += `<button onclick=\"setSpeed('random')\">ランダム</button>`;
  speedBtns.innerHTML = html;
}

function renderRoads() {
  // 既存レーン削除
  document.querySelectorAll('.road').forEach(e=>e.remove());
  for(let i=0;i<laneNum;i++) {
    const road = document.createElement('img');
    road.src = roadList[i] || roadList[roadList.length-1];
    road.className = 'road';
    road.style.top = `${10 + (80/(laneNum+1))*(i+1) - 7.5}%`;
    road.style.zIndex = 5 + i;
    game.appendChild(road);
  }
}

function resetCars() {
  // 既存車削除
  document.querySelectorAll('.car').forEach(e=>e.remove());
  cars = [];
  for(let i=0;i<laneNum;i++) {
    spawnCar(i);
  }
}

function spawnCar(lane) {
  const car = document.createElement('img');
  car.src = carImgs[lane%carImgs.length];
  car.className = 'car';
  car.dataset.lane = lane;
  car.dataset.id = carId++;
  car.style.top = `${10 + (80/(laneNum+1))*(lane+1) - 7.5 + 5}%`;
  car.style.height = '10vh';
  car.style.width = 'auto';
  let dir = (laneNum==4 && lane>=2) ? 1 : (laneNum==4 ? -1 : (laneNum==3 ? (lane==2?1:-1): -1));
  if(laneNum==2) dir = lane==1?1:-1;
  car.dataset.dir = dir;
  if(dir==-1) {
    car.style.left = '100vw';
    car.style.transform = 'scaleX(-1)';
  } else {
    car.style.left = '-15vw';
    car.style.transform = 'scaleX(1)';
  }
  car.dataset.speed = getCarSpeed();
  car.addEventListener('click', ()=>onCarClick(car));
  game.appendChild(car);
  cars.push(car);
}

function getCarSpeed() {
  if(speedMode==='random') return 2+Math.floor(Math.random()*4); // 2~5
  return Number(speedMode);
}

function onCarClick(car) {
  // 拡張子除いた名前読み上げ
  const name = car.src.split('/').pop().replace(/\..+$/,"");
  speak(name);
  car.style.transform += ' scale(1.3)';
  setTimeout(()=>{
    car.style.transform = car.style.transform.replace(' scale(1.3)','');
  },200);
}

function speak(text) {
  if(window.speechSynthesis) {
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = 'ja-JP';
    window.speechSynthesis.speak(uttr);
  }
}

function renderMainCar() {
  let main = document.querySelector('.maincar');
  if(!main) {
    main = document.createElement('img');
    main.className = 'maincar';
    main.src = mainCarImg;
    game.appendChild(main);
  }
}

function animateCars() {
  for(const car of cars) {
    let dir = Number(car.dataset.dir);
    let speed = Number(car.dataset.speed);
    let left = parseFloat(car.style.left);
    if(isNaN(left)) left = dir==-1?100:-15;
    // 前の車との距離
    let lane = Number(car.dataset.lane);
    let ahead = null;
    for(const c of cars) {
      if(Number(c.dataset.lane)===lane && c!==car) {
        let cLeft = parseFloat(c.style.left);
        if((dir==-1 && cLeft<left && (!ahead || cLeft>parseFloat(ahead.style.left))) ||
           (dir==1 && cLeft>left && (!ahead || cLeft<parseFloat(ahead.style.left)))) {
          ahead = c;
        }
      }
    }
    let minDist = 12; // vw
    if(ahead) {
      let dist = Math.abs(parseFloat(ahead.style.left)-left);
      if(dist<minDist) speed = 1; // 追い越し禁止
    }
    car.style.left = `${left+dir*speed*0.3}vw`;
    // 画面外でリセット
    if((dir==-1 && left<-15) || (dir==1 && left>100)) {
      car.remove();
      cars = cars.filter(c=>c!==car);
      spawnCar(lane);
    }
  }
}

function gameLoop() {
  animateCars();
  requestAnimationFrame(gameLoop);
}

// 初期化
window.onload = function() {
  renderBgBtns();
  renderLaneBtns();
  renderSpeedBtns();
  setBackground(0);
  renderRoads();
  resetCars();
  renderMainCar();
  gameLoop();
};
