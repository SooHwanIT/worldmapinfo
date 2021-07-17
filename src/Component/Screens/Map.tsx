import React, { useState } from "react"
import "../css/Map.css"
import { WorldMap } from "react-svg-worldmap"
import Header from './Semantic/Header';
import Footer from './Semantic/Footer';
function Map() {

    //
    const [state, setState] = useState({ cName: "Select Country", iso: "", val: "", pre: "", suff: "" })

    // data array
    const data =
        [
            { "country": "cn", value: 1389618778 }, // china
            { "country": "in", value: 1311559204 }, // india
            { "country": "us", value: 331883986 },  // united states
            { "country": "id", value: 264935824 },  // indonesia
            { "country": "br", value: 210301591 },  // brazil
            { "country": "ng", value: 208679114 },  // nigeria
            { "country": "ru", value: 141944641 },  // russia
            { "country": "mx", value: 127318112 }   // mexico
        ]
    // E.g. format the number 1000000 to "1 thousand"
    const formattedNumber = (num: number, digits: number) => {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: " thousand " },
            { value: 1E6, symbol: " million " },
            { value: 1E9, symbol: " billion " }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }

    const clickAction = (event: React.MouseEvent<SVGElement, Event>, countryName: string, isoCode: string, value: string, prefix: string, suffix: string) => {
        const numberValue = parseInt(value, 10)
        const fNumber = formattedNumber(numberValue, 2)
        setState({ cName: countryName, iso: isoCode, val: fNumber, pre: "", suff: "" })
        return (<div></div>)
    }

    return (
        < div className="Map" >
            <Header />
            < div className="Main">
                <WorldMap
                    title="The ten highest GDP per capita countries"
                    size="xl"
                    data={data}
                    onClickFunction={clickAction}
                    color = "red"
                />
                <div className="world_map">
                    <table>
                        <th>나라 정보</th>
                        <tr>
                            <td>Country: {state.cName}</td>
                        </tr>
                        <tr>
                            <td>Iso Code: {state.iso}</td>
                        </tr>
                        <tr>
                            <td>flag: <img width="100px" src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${state.iso}.svg`} alt="test" /></td>
                        </tr>
                        
                        <tr>
                            <td><p>GDP per capita: {state.val}</p></td>
                        </tr>

                    </table>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Map;