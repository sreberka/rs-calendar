import React from 'react';

class Lection extends React.Component {
  constructor(props) {
    super(props);
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    this.xhr = new XHR();
    this.xhr.open('GET', 'http://128.199.53.150/events', true);
    this.xhr.onload = function () {
      this.obj = JSON.parse(this.responseText);
    };
    this.xhr.onerror = function () {
      document.write('error ' + this.status);
    };
    this.xhr.send();
  }
  render(){
    console.log(this.obj);
    return <span>{this.obj}</span>
  }
}

export default Lection;
