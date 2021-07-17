import * as React from 'react';
// import flag from 'country-flags-svg';

// import CoronaPopulation from '../../Api/Corona/CoronaPopulation';
// import CoronaCase from '../../Api/Corona/CoronaCase';
// import CoronaActive from '../../Api/Corona/CoronaActive';
// import CoronaDeath from '../../Api/Corona/CoronaDeath';
// import CoronaRecovery from '../../Api/Corona/CoronaRecovery';
// import CoronaTest from '../../Api/Corona/CoronaTest';
import Corona from '../../Api/Corona';
// import Flag from '../../Api/Flag';
// import Graph from '../../Api/Graph';


interface Info{
    first:string;
    second:string;
  }

const CountryTable : React.FC<Info> =(data)=> {
    // const api = require('novelcovid');
    // api.twoDaysAgo.countries({country:'austria'}).then(console.log)

    let tmp_name1='Korea';
    let tmp_name2='United States';

    return (
        <table className="table_sub_info">

            <tr>
                <td><Corona value={1} name={data.first} /></td> {/*first*/}
                <td>총 검사자</td>
                <td><Corona value={1} name={data.second} /></td> {/*second*/}
            </tr>
            <tr>
                <td><Corona value={2} name={data.first} /></td> {/*first*/}
                <td>총 사망자</td>
                <td><Corona value={2} name={data.second} /></td> {/*second*/}
            </tr>
            <tr>
                <td><Corona value={3} name={data.first} /></td> {/*first*/}
                <td>현재 확진자</td>
                <td><Corona value={3} name={data.second} /></td> {/*second*/}
            </tr>
            <tr>
                <td><Corona value={4} name={data.first} /></td> {/*first*/}
                <td>총 확진자</td>
                <td><Corona value={4} name={data.second} /></td> {/*second*/}
            </tr>
            <tr>
                <td><Corona value={5} name={data.first} /></td> {/*first*/}
                <td>격리해제</td>
                <td><Corona value={5} name={data.second} /></td> {/*second*/}
            </tr>


        </table>
    );

}

export default CountryTable;