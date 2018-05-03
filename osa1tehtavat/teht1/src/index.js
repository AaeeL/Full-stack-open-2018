import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {

    return(
        <div>
            <h1>{props.name.nimi}</h1>
        </div>
    )
}

const Osa = (props) => {
    return(
        <div>
            <p> {props.name} {props.teht} </p>
        </div>
    )    
}

const Sisalto = (props) => {
    console.log(props.name.osat[0])
    return(
        <div>
            <Osa name={props.name.osat[0].nimi} teht={props.name.osat[0].tehtavia}/>
            <Osa name={props.name.osat[1].nimi} teht={props.name.osat[1].tehtavia}/>
            <Osa name={props.name.osat[2].nimi} teht={props.name.osat[2].tehtavia}/>
        </div>
    )
}

const Yhteensa = (props) => {
    return(
        <div>
            <p>Yhteensä {props.name.osat[0].tehtavia + props.name.osat[1].tehtavia + props.name.osat[2].tehtavia}</p>
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
  return (
    <div>
      <Otsikko name={kurssi}/>
      <Sisalto name={kurssi}/>
      <Yhteensa name={kurssi} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
