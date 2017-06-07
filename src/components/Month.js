import React from 'react';

class Month extends React.Component {
  constructor(props){
    super(props);
    this.monthDays = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  }
  render(){
    return <div className="month">
      <span id="month">{this.monthDays[this.props.dateMonth]} <strong>{this.props.dateYear}</strong></span>
      <style jsx>{`
          .month{
            margin-top: 30px;
            text-align: right;
          }
          .month span{
            font-size: 25px;
            font-weight: 400;
          }
          .month strong{
          font-weight: 700;
          }
        `}
      </style>
    </div>;
  }
}

export default Month;
