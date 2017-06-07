import React from 'react';

class ListComponent extends React.Component {
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        };
    }
    change(){
        this.setState({
            month: this.D.getMonth() + 1,
            year: this.D.getFullYear()
        });
        console.log(this.D);
        console.log(this.state);
        console.log('DDD ' + this.state.d)
    }
    render(){
        this.Dlast = new Date(this.state.year,this.state.month+1,0).getDate();
        this.D = new Date(this.state.year,this.state.month,this.Dlast);
        this.DNfirst = new Date(this.D.getFullYear(),this.D.getMonth(),1).getDay();

        return (
            <div>
                <button onClick={this.change}>Change</button>
                Month{this.state.month} Year{this.state.year}
                <style jsx>{`
                  div{
                   font-size: 30px;
                  }
                `}</style>
            </div>
        )
    }
}



export default ListComponent