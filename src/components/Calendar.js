import React from 'react';
import Day from './Day';
import Week from './Week';
import Month from './Month';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.empty = [];
    this.items = [];
    this.Dlast = new Date(this.props.year, this.props.month+1,0).getDate();
    this.D = new Date(this.props.year,this.props.month,this.Dlast);
    this.DNfirst = new Date(this.D.getFullYear(),this.D.getMonth(),1).getDay();
  }
  renderEmptyItems(){
    if(this.DNfirst != 0){
      this.empty = Array.from({ length: this.DNfirst - 1 }, (v, k) => k+1);
    }
    else{
      this.empty = Array.from({ length: 6 }, (v, k) => k+1);
    }
  }
  renderItems(){
    this.items = Array.from({ length: this.Dlast }, (v, k) => k+1)
  }

  render() {
    return (
    <div>
        <Month date={this.D} />
        <Week />
      <div className="calendar">
        {this.renderEmptyItems()}
        {this.renderItems()}
        {this.empty.map((index) => (
          <Day key={index} name = '' monthNow = {this.props.month} yearNow = {this.props.year} />
        ))}
        {this.items.map((index) => (
          <Day key={index} name = {index} monthNow = {this.props.month} yearNow = {this.props.year} />
        ))}

        <style jsx>{`
          .calendar{
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: stretch;
          }
        `}</style>
      </div>
    </div>

    );
  }
}


export default Calendar;




