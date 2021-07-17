import * as React from 'react';
import {useState} from 'react';

interface Coronaa {
    name:string,
    value:number
}

const Corona: React.FC<Coronaa> = (data) => {

        //     'Population':'Population',
    //     'Test':'Total Tests',
    //     'Death':'Total Deaths',
    //     'ActivityCase':'Active Cases',
    //     'Case':'Total Cases',
    //     'Recovery':'Total Recovered'
    // }

    let value = [
        'Population',
        'Total Tests',
        'Total Deaths',
        'Active Cases',
        'Total Cases',
        'Total Recovered'
    ]

    const [state,setState] = useState('');

    // const [statePopulation, setPopulationState] = useState(""); // 총 인구수
    // const [stateTest, setTestState] = useState(""); // 총 검사자
    // const [stateDeath, setDeathState] = useState(""); // 총 사망자
    // const [stateActivityCase, setActivityCaseState] = useState(""); // 현재 확진자
    // const [stateCase, setCaseState] = useState(""); // 총 확진자
    // const [stateRecovery, setRecoveryState] = useState(""); // 격리해제

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: `https://worldometers.p.rapidapi.com/api/coronavirus/country/${data.name}`,
        headers: {
            'x-rapidapi-key': 'fcb0e402d7mshc5c03f6430070b2p126faejsnc1e229da87f1',
            'x-rapidapi-host': 'worldometers.p.rapidapi.com'
        }
    };

    axios.request(options).then(function(response:any) {
        // setPopulationState(response.data.data['Population'].replace(/,/g,''));
        // setTestState(response.data.data['Total Tests'].replace(/,/g,''));
        // setDeathState(response.data.data['Total Deaths'].replace(/,/g,''));
        // setActivityCaseState(response.data.data['Active Cases'].replace(/,/g,''));
        // setCaseState(response.data.data['Total Cases'].replace(/,/g,''));
        // setRecoveryState(response.data.data['Total Recovered'].replace(/,/g,''));
        setState(response.data.data[value[data.value]].replace(/,/g,''));
    }).catch(function (error:any) {
        console.error(error);
    });

    return (
        // <div>
        //     <p className="Population">{statePopulation}</p>
        //     <p className="Test">{stateTest}</p>
        //     <p className="Death">{stateDeath}</p>
        //     <p className="ActivityCase">{stateActivityCase}</p>
        //     <p className="Case">{stateCase}</p>
        //     <p className="Recovery">{stateRecovery}</p>
        // </div>
        <p>{state}</p>
    )

}
export default Corona;