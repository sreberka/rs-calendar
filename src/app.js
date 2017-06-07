import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Calendar from './components/Calendar';



ReactDOM.render(
  <Calendar />,
  document.getElementById('root')
);


const request = function request() {
  let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
  let xhr = new XHR();
  let obj = {};
  xhr.open('GET', 'http://128.199.53.150/events', true);
  xhr.onload = function () {
    obj = JSON.parse(this.responseText);

  };
  xhr.onerror = function () {
    document.write('error ' + this.status);
  };
  xhr.send();

  console.log(obj[0]);
};

request();

function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}
