// function callApi() {
//   //apiを叩く処理
//   const res = window.fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(res);
// }
// callApi();

//(1)functionの前に async をつける
//async(非同期)関数内ではawaitを使うことができる
//(2)fetchの前にawaitをつける

// async function callApi() {
//   //apiを叩く処理
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(res);
// }
// callApi();

//(3)メソッドを実行する

async function callApi() {
  //apiを叩く処理
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //jsonメソッドを実行すう
  const users = await res.json();

  console.log(users);
}
callApi();

////////////////////////////////////////

//async.await以外の使い方->fetch.thenでかく

function callApi1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (users) {
      console.log(users);
    });
}
callApi1();

////////////////////////////////////////

//fetchをつかわない書き方

function callApi3() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    console.log(xhr.response);
  };
}
callApi3();
