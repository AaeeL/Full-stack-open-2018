import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => {return(<button onClick={handleClick}>{text}</button>)}

const Statistic = ({text, stat}) => {return(<tr><td>{text}</td><td>{stat}</td></tr>)}

const Mean = (stat) => {
    let huono = -stat.stat.huono
    let ka = ((huono) + stat.stat.hyvä) / 3
    return(<tr><td>keskiarvo</td><td>{ka}</td></tr>)
}

const Percent = (stat) => {
    let positiivisia = (stat.stat.hyvä / (stat.stat.hyvä + stat.stat.huono + stat.stat.neutraali)) * 100
    return(<tr><td>positiivisia</td><td> {positiivisia}%</td></tr>)
}

const Anecdote = (selection) => {
    let sentence = ""
    for (let i = 0; i < anecdotes.length; i++) {
        if (i === selection.selection){
            sentence = anecdotes[i]
            break   
        }
    }
    return(<div>{sentence}</div>)
}

const Stastics = (props) => {
    if(props.stats.hyvä !== 0 || props.stats.neutraali !== 0 || props.stats.huono !== 0) {
    return(
        <table>
            <tbody>
            <Statistic text="hyvä" stat={props.stats.hyvä}/>
            <Statistic text="neutraali" stat={props.stats.neutraali}/>
            <Statistic text="huono" stat={props.stats.huono}/>
            <Mean stat={props.stats}/>
            <Percent stat={props.stats}/>
            </tbody>
        </table>
    )
}
else return (<div>Ei yhtään palautetta annettu</div>)
}

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            hyvä: 0,
            huono: 0,
            neutraali: 0,
            selected: 0
        }
    }
    add = (state, addition) => 
    {
        return () => {
            let newState = this.state
            for (let i in newState) {
                if (i === state) {
                    newState[i] += addition
                    break
                }
            }
            this.setState(newState)
        }
    }
    show = (min, max) => {
        return () => {
            let number  = Math.round(Math.random() * 6)
            if(number === this.state.selected) number  = Math.round(Math.random() * 6)
            else this.setState({selected:number})}
    }
    render() {
        return(
            <div>
                <strong><p>Anna palautetta</p></strong>
                <Button text="hyvä" handleClick={this.add("hyvä", 1)}/>
                <Button text="huono" handleClick={this.add("huono", 1)}/>
                <Button text="neutraali" handleClick={this.add("neutraali", 1)}/>
                <strong><p>Statistiikka</p></strong>
                <Stastics stats={this.state}/>
                
                <Button text="Next ancdote" handleClick={this.show(0, anecdotes.length)}/>
                <Anecdote selection={this.state.selected}/>

            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App />, document.getElementById('root'));
