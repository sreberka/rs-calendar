import React from 'react';

class Lection extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return <button>{this.props.name}
      <style jsx>{`
          button{
            width: 100%;
            padding: 5px 0;
            margin-top: 5px;
            background: #00c853;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 2rem;
            font-weight: 700;
            cursor: pointer;
          }
          button:hover{
            background: #006229;
          }
        `}
      </style>
    </button>
  }
}

export default Lection;
