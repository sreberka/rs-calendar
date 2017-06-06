import React from 'react';
import Day from './Day';

class Week extends React.Component {
  constructor(props){
    super(props);
    this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
  render(){
    return <div className="week">
      {this.weekDays.map((index) => (
        <Day key={index} name = {index} />
      ))}
      <style jsx>{`
          .week{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
          }
        `}
      </style>
    </div>;
  }
}

export default Week;
