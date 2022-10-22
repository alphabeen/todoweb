// 카카오 초기화
Kakao.init("8803169b1b94942b3d7f9c26b8d8b3ea");
console.log(Kakao.isInitialized());

const loginBtn = document.querySelector('#kakao-login-btn');
const logoutBtn = document.querySelector('.api-btn');

const name = document.querySelector('#name');

function loginWithKakao(){
  Kakao.Auth.login({
    success: function(authObj){
      console.log(authObj); //access토큰 값
      Kakao.Auth.setAccessToken(authObj.access_token); //access 토큰값 저장
      logoutBtn.classList.remove("hidden");
      loginBtn.classList.add("hidden");
      getInfo();
    },
    fail: function(err){
      console.log(err);
    }
  });
}

//access 토큰을 발급받고, 아래 함수를 호출시켜서 사용자 정보를 받아옴.
function getInfo(){
  Kakao.API.request({
    url: '/v2/user/me',
    success: function(res){
      console.log(res);
      //닉네임
      const nickname = res.kakao_account.profile.nickname;
      console.log(nickname);
    },
    fail: function(error){
      alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요.' + JSON.stringify(error));
    }
  });
}

//로그아웃 기능 - 카카오 서버에 접속하는 access 토큰을 만료, 사용자 어플리케이션의 로그아웃은 따로 진행
function kakaoLogout(){
  Kakao.Auth.logout(function(){
    alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
    logoutBtn.classList.add("hidden");
    loginBtn.classList.remove("hidden");

  });
}
















/*
// 카카오 초기화
Kakao.init("8803169b1b94942b3d7f9c26b8d8b3ea");
console.log(Kakao.isInitialized());

Kakao.Auth.createLoginButton({
  container: '#kakao-login-btn',
  success: function(authObj) {
    Kakao.API.request({
      url: '/v2/user/me',
      success: function(res) {
        console.log(res.id);
        console.log(res.properties['nickname']);
        console.log(authObj.access_token);
        
      },
      fail: function(error) {
        alert(
          'login success, but failed to request user information: ' +
            JSON.stringify(error)
        )
      },
    })
  },
  fail: function(err) {
    alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요. ' + JSON.stringify(err))
  },
})


const KakaoToken = Kakao.Auth.getAccessToken(); //카카오 데이터

function kakaoLogout() {
  if (!KakaoToken) {
    alert("No login");
    return
  }
  Kakao.Auth.logout(function() {
    alert('logout ok\naccess token -> ' + KakaoToken)
  })
}
*/




