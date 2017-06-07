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
    console.log(obj[0]);
  };
  xhr.onerror = function () {
    document.write('error ' + this.status);
  };
  xhr.send();

  return obj;
};

request();
