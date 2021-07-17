import * as React from 'react';
import Corona from '../../Api/Corona';
import Flag from '../../Api/Flag'
//:{first:string,second:string}
interface Info{
    name:string,
}
const AnalysisInfo : React.FC<Info> =({name})=> {
    //country.first //country.second
    // console.log(name)
    return (
      <div className="table_main_info_div">
        <table className="table_main_info">
            <tr>
                <td>국가 이름</td>
                <td>{name}</td>
            </tr>
            <tr>
                {/* <td>국기</td> */}
                {/* <td><Flag iso={iso}/></td> */}
            </tr>
            <tr>
                <td>국기</td>
                <td><Flag name ={name}/></td>
            </tr>
            <tr>
                <td>인구수</td>
                <td><Corona value={0} name={name}/></td>
            </tr>
            <tr>
                <td>검사자</td>
                <td><Corona value={1} name={name}/></td>
            </tr>
            
            <tr>
                <td>총 사망자</td>
                <td><Corona value={2} name={name}/></td>
            </tr>
            <tr>
                <td>현제 확진자</td>
                <td><Corona value={3} name={name}/></td>
            </tr>
            <tr>
                <td>총 확진자</td>
                <td><Corona value={4} name={name}/></td>
            </tr>
            <tr>
                <td>격리 해제</td>
                <td><Corona value={5} name={name}/></td>
            </tr>
        </table>
      </div>
    );
  
}

export default AnalysisInfo;