import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Calendar from './components/Calendar';



ReactDOM.render(
        <Calendar />,
  document.getElementById('root')
);



// function httpGet(url) {
//
//     return new Promise(function(resolve, reject) {
//
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//
//         xhr.onload = function() {
//             if (this.status == 200) {
//                 resolve(this.response);
//             } else {
//                 var error = new Error(this.statusText);
//                 error.code = this.status;
//                 reject(error);
//             }
//         };
//
//         xhr.onerror = function() {
//             reject(new Error("Network Error"));
//         };
//
//         xhr.send();
//     });
//
// }
//
// httpGet('http://128.199.53.150/events')
// // 1. Получить данные о пользователе в JSON и передать дальше
//     .then(response => {
//       // console.log(response);
//       let user = JSON.parse(response);
//       return user;
//     })
//     // 2. Получить информацию с github
//     .then(user => {
//       console.log(user);
//       return httpGet(`https://api.github.com/users/${user.name}`);
//     });


// const makeRequest = function (URL) {
//     let weather = fetch(URL, {mode: 'cors'})
//         .then((res) => {
//             return res.json();
//         })
//         .catch((error) => {
//             throw new Error('Error with fetch');
//         });
//
//     //return weather;
//     console.log(weather)
// };
//
// makeRequest('http://128.199.53.150/events');
