if(('localStorage' in window) && (window.localStorage !== null)) {
} else {
}


// ボタンを押したときにログイン情報をローカルストレージに保存
const $click = document.getElementById("js-button");
const $Email = document.getElementById("Email");
const $password = document.getElementById("password")


$click.addEventListener("click", (event)=> {
  event.preventDefault();

  localStorage.setItem("Email",$Email.value);
  localStorage.setItem("password",$password.value);


  if(localStorage.getItem("Email") === "") {
    localStorage.removeItem("Email");
  }else {
  };
  if(localStorage.getItem("password") === "") {
    localStorage.removeItem("password");
  }else {
  };
  if((localStorage.getItem("Email") !== null) && (localStorage.getItem("password") !== null)){
    alert("ログイン成功！")
  }else {
    alert("ログイン情報が間違っています")
  };
});

// console.log(localStorage.getItem("Email"));
// console.log(localStorage.getItem("password"));

// ローカルストレージの情報をHTML要素に挿入
const loginEmail = localStorage.getItem("Email");
const loginPass = localStorage.getItem("password");

if((loginEmail !== null) && (loginPass !== null)) {
  $Email.value = localStorage.getItem("Email");
  $password.value = localStorage.getItem("password");
};