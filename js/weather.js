const myAPIKey = "c92dbe585f4eb9ae714ccbed144c3155";

function successCallBack(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myAPIKey}`;
  console.log(url);
}

function errorCallBack(){
  alert("현재 위치를 찾을 수 없습니다. 날씨가 제공되지 않습니다.");
}



navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);