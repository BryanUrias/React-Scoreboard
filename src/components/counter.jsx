import React from 'react';


class Counter extends React.Component {

    constructor(){
        super()
        this.state = {
            score: 0
        };
    }
//Doing this = () => will bind "this" to the Counter. There are a few methods to use but this is best
    
// Used the more concise method of calling prevState by getting rid of return. I left return in decrement as example
    incrementScore = () =>  {
        this.setState( prevState => ({
                score: prevState.score + 1
        }));
    }

    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            }
            
        });
    }

    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement'onClick={this.decrementScore}> - </button>
                <span className='counter-score'>{this.state.score}</span>
                <button className='counter-action increment' onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

export default Counter;