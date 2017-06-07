import React from 'react';

class Month extends React.Component {
  constructor(props){
    super(props);
    this.monthDays = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  }
  render(){
    return <span id="month">{this.monthDays[this.props.dateMonth]} <strong>{this.props.dateYear}</strong>
      <style jsx>{`
         span{
            display: inline-block;
            margin: 0 15px;
            font-size: 25px;
            font-weight: 400;
          }
          strong{
            font-weight: 700;
          }
    `}</style>
    </span>

  }
}

export default Month;
