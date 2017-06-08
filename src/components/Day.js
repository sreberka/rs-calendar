import React from 'react';
import Lection from './Lection'
import makeRequest from '../request';


// let req = makeRequest('http://128.199.53.150/events').then(function(defs){
//     console.log(defs)
// });

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.request = this.request.bind(this);
    this.state = {
      name: ''
    }
  }

  request(){
    let r = makeRequest('http://128.199.53.150/events').then(function(defs){
      console.log(defs);
      this.setState({
        name: defs
      })
    });
  }

  render() {

    return <div className={'item ' + (this.props.name === new Date().getDate() &&
                                      this.props.yearNow === new Date().getFullYear() &&
                                      this.props.monthNow === new Date().getMonth()
                                      ? 'today' : (this.props.name === '') ? 'empty' : '')}>
      <p>{this.props.name}</p>
      {this.request('http://128.199.53.150/events')}
      <Lection name = {this.state.name} text = "time" />

      <style jsx>{`
          .item{
            position: relative;
            width: 13.25%;
            min-height: 3.1rem;
            background: #fff;
            border-radius: 5px;
            margin: 0.5%;
            padding: 1rem;
            font-size: 2rem;
            text-align: center;
          }
          .today{
            color: red;
            font-weight: bold;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
          .empty{
            background: transparent;
          }
        `}
      </style>
    </div>;
  }
}

export default Day;
