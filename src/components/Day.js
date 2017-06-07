import React from 'react';

class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={'item ' + (this.props.name === new Date().getDate() &&
                                      this.props.yearNow === new Date().getFullYear() &&
                                      this.props.monthNow === new Date().getMonth()
                                      ? 'today' : (this.props.name === '') ? 'empty' : '')}>
      <p>{this.props.name}</p>
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
