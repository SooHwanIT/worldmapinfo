import * as React from 'react';
import {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import CountryInfo from './CountryInfo'
import CountryTable from './CountryTable';
import Flag from '../../Api/Flag';
// import Graph from './EconomyGraph'
import Graph from '../../Api/Graph';
import '../../css/CountryInputcss.css'
import AutoComplete from './Autocomplete'; //TEST

const CountryInput =()=> {
    const lookup = require('country-code-lookup')
    const [firstCountryName,setFirstCountryName] = useState("");
    const [secondCountryName,setsecondCountryName] = useState("");
    const [value, setvalue] = useState("");
    console.log(lookup.byCountry('United Kingdom'))
    // const NameToISO = (name:string) => {
    //     let country = [{"cName":"USA","iso":"US"},{"cName":"India","iso":"IN"},{"cName":"Brazil","iso":"BR"},{"cName":"Russia","iso":"RU"},{"cName":"France","iso":"FR"},{"cName":"Turkey","iso":"TR"},{"cName":"UK","iso":"GB"},{"cName":"Argentina","iso":"AR"},{"cName":"Colombia","iso":"CO"},{"cName":"Italy","iso":"IT"},{"cName":"Spain","iso":"ES"},{"cName":"Germany","iso":"DE"},{"cName":"Iran","iso":"IR"},{"cName":"Poland","iso":"PL"},{"cName":"Indonesia","iso":"ID"},{"cName":"Mexico","iso":"MX"},{"cName":"SouthAfrica","iso":"ZA"},{"cName":"Ukraine","iso":"UA"},{"cName":"Peru","iso":"PE"},{"cName":"Netherlands","iso":"NL"},{"cName":"Czechia","iso":"CZ"},{"cName":"Chile","iso":"CL"},{"cName":"Philippines","iso":"PH"},{"cName":"Iraq","iso":"IQ"},{"cName":"Canada","iso":"CA"},{"cName":"Belgium","iso":"BE"},{"cName":"Sweden","iso":"SE"},{"cName":"Bangladesh","iso":"BD"},{"cName":"Romania","iso":"RO"},{"cName":"Pakistan","iso":"PK"},{"cName":"Portugal","iso":"PT"},{"cName":"Malaysia","iso":"MY"},{"cName":"Israel","iso":"IL"},{"cName":"Japan","iso":"JP"},{"cName":"Hungary","iso":"HU"},{"cName":"Jordan","iso":"JO"},{"cName":"Serbia","iso":"RS"},{"cName":"Switzerland","iso":"CH"},{"cName":"Nepal","iso":"NP"},{"cName":"UAE","iso":"AE"},{"cName":"Austria","iso":"AT"},{"cName":"Morocco","iso":"MA"},{"cName":"Lebanon","iso":"LB"},{"cName":"Tunisia","iso":"TN"},{"cName":"SaudiArabia","iso":"SA"},{"cName":"Kazakhstan","iso":"KZ"},{"cName":"Ecuador","iso":"EC"},{"cName":"Bolivia","iso":"BO"},{"cName":"Greece","iso":"GR"},{"cName":"Paraguay","iso":"PY"},{"cName":"Belarus","iso":"BY"},{"cName":"Bulgaria","iso":"BG"},{"cName":"Panama","iso":"PA"},{"cName":"Slovakia","iso":"SK"},{"cName":"Thailand","iso":"TH"},{"cName":"CostaRica","iso":"CR"},{"cName":"Georgia","iso":"GE"},{"cName":"Kuwait","iso":"KW"},{"cName":"Uruguay","iso":"UY"},{"cName":"Croatia","iso":"HR"},{"cName":"Azerbaijan","iso":"AZ"},{"cName":"DominicanRepublic","iso":"DO"},{"cName":"Guatemala","iso":"GT"},{"cName":"Palestine","iso":"PS"},{"cName":"Denmark","iso":"DK"},{"cName":"Venezuela","iso":"VE"},{"cName":"Oman","iso":"OM"},{"cName":"Egypt","iso":"EG"},{"cName":"SriLanka","iso":"LK"},{"cName":"Ireland","iso":"IE"},{"cName":"Lithuania","iso":"LT"},{"cName":"Honduras","iso":"HN"},{"cName":"Ethiopia","iso":"ET"},{"cName":"Cuba","iso":"CU"},{"cName":"Bahrain","iso":"BH"},{"cName":"Slovenia","iso":"SI"},{"cName":"Moldova","iso":"MD"},{"cName":"Armenia","iso":"AM"},{"cName":"Qatar","iso":"QA"},{"cName":"Myanmar","iso":"MM"},{"cName":"Libya","iso":"LY"},{"cName":"BosniaandHerzegovina","iso":"BA"},{"cName":"Kenya","iso":"KE"},{"cName":"Zambia","iso":"ZM"},{"cName":"S.Korea","iso":"KR"},{"cName":"Nigeria","iso":"NG"},{"cName":"NorthMacedonia","iso":"MK"},{"cName":"Algeria","iso":"DZ"},{"cName":"Kyrgyzstan","iso":"KG"},{"cName":"Mongolia","iso":"MN"},{"cName":"Afghanistan","iso":"AF"},{"cName":"Latvia","iso":"LV"},{"cName":"Norway","iso":"NO"},{"cName":"Albania","iso":"AL"},{"cName":"Estonia","iso":"EE"},{"cName":"Uzbekistan","iso":"UZ"},{"cName":"Namibia","iso":"NA"},{"cName":"Montenegro","iso":"ME"},{"cName":"Finland","iso":"FI"},{"cName":"Ghana","iso":"GH"},{"cName":"Mozambique","iso":"MZ"},{"cName":"Uganda","iso":"UG"},{"cName":"Cyprus","iso":"CY"},{"cName":"Botswana","iso":"BW"},{"cName":"ElSalvador","iso":"SV"},{"cName":"Cameroon","iso":"CM"},{"cName":"Zimbabwe","iso":"ZW"},{"cName":"Maldives","iso":"MV"},{"cName":"Luxembourg","iso":"LU"},{"cName":"Cambodia","iso":"KH"},{"cName":"Singapore","iso":"SG"},{"cName":"Rwanda","iso":"RW"},{"cName":"Jamaica","iso":"JM"},{"cName":"IvoryCoast","iso":"CI"},{"cName":"Senegal","iso":"SN"},{"cName":"Vietnam","iso":"VN"},{"cName":"DRC","iso":"CD"},{"cName":"Madagascar","iso":"MG"},{"cName":"Malawi","iso":"MW"},{"cName":"Angola","iso":"AO"},{"cName":"Sudan","iso":"SD"},{"cName":"TrinidadandTobago","iso":"TT"},{"cName":"Réunion","iso":"RE"},{"cName":"CaboVerde","iso":"CV"},{"cName":"Malta","iso":"MT"},{"cName":"Australia","iso":"AU"},{"cName":"FrenchGuiana","iso":"GF"},{"cName":"Syria","iso":"SY"},{"cName":"Gabon","iso":"GA"},{"cName":"Guinea","iso":"GN"},{"cName":"Suriname","iso":"SR"},{"cName":"Mauritania","iso":"MR"},{"cName":"Guyana","iso":"GY"},{"cName":"Eswatini","iso":"SZ"},{"cName":"Haiti","iso":"HT"},{"cName":"Mayotte","iso":"YT"},{"cName":"FrenchPolynesia","iso":"PF"},{"cName":"Guadeloupe","iso":"GP"},{"cName":"PapuaNewGuinea","iso":"PG"},{"cName":"Seychelles","iso":"SC"},{"cName":"Taiwan","iso":"TW"},{"cName":"Fiji","iso":"FJ"},{"cName":"Somalia","iso":"SO"},{"cName":"Togo","iso":"TG"},{"cName":"Mali","iso":"ML"},{"cName":"Andorra","iso":"AD"},{"cName":"Tajikistan","iso":"TJ"},{"cName":"Belize","iso":"BZ"},{"cName":"BurkinaFaso","iso":"BF"},{"cName":"Bahamas","iso":"BS"},{"cName":"Martinique","iso":"MQ"},{"cName":"Congo","iso":"CG"},{"cName":"Curaçao","iso":"CW"},{"cName":"Lesotho","iso":"LS"},{"cName":"HongKong","iso":"HK"},{"cName":"Djibouti","iso":"DJ"},{"cName":"Aruba","iso":"AW"},{"cName":"SouthSudan","iso":"SS"},{"cName":"Timor-Leste","iso":"TL"},{"cName":"EquatorialGuinea","iso":"GQ"},{"cName":"Nicaragua","iso":"NI"},{"cName":"Benin","iso":"BJ"},{"cName":"CAR","iso":"CF"},{"cName":"Yemen","iso":"YE"},{"cName":"Iceland","iso":"IS"},{"cName":"Gambia","iso":"GM"},{"cName":"Eritrea","iso":"ER"},{"cName":"SierraLeone","iso":"SL"},{"cName":"Burundi","iso":"BI"},{"cName":"Niger","iso":"NE"},{"cName":"SaintLucia","iso":"LC"},{"cName":"Liberia","iso":"LR"},{"cName":"SanMarino","iso":"SM"},{"cName":"Chad","iso":"TD"},{"cName":"Gibraltar","iso":"GI"},{"cName":"Barbados","iso":"BB"},{"cName":"Guinea-Bissau","iso":"GW"},{"cName":"Comoros","iso":"KM"},{"cName":"Laos","iso":"LA"},{"cName":"Liechtenstein","iso":"LI"},{"cName":"NewZealand","iso":"NZ"},{"cName":"Monaco","iso":"MC"},{"cName":"SintMaarten","iso":"SX"},{"cName":"Bermuda","iso":"BM"},{"cName":"TurksandCaicos","iso":"TC"},{"cName":"SaintMartin","iso":"MF"},{"cName":"SaoTomeandPrincipe","iso":"ST"},{"cName":"Bhutan","iso":"BT"},{"cName":"St.VincentGrenadines","iso":"VC"},{"cName":"BritishVirginIslands","iso":"VG"},{"cName":"IsleofMan","iso":"IM"},{"cName":"Mauritius","iso":"MU"},{"cName":"CaribbeanNetherlands","iso":"BQ"},{"cName":"AntiguaandBarbuda","iso":"AG"},{"cName":"St.Barth","iso":"BL"},{"cName":"FaeroeIslands","iso":"FO"},{"cName":"CaymanIslands","iso":"KY"},{"cName":"SaintKittsandNevis","iso":"KN"},{"cName":"Tanzania","iso":"TZ"},{"cName":"WallisandFutuna","iso":"WF"},{"cName":"Brunei","iso":"BN"},{"cName":"Dominica","iso":"DM"},{"cName":"Grenada","iso":"GD"},{"cName":"NewCaledonia","iso":"NC"},{"cName":"Anguilla","iso":"AI"},{"cName":"Greenland","iso":"GL"},{"cName":"FalklandIslands","iso":"FK"},{"cName":"Macao","iso":"MO"},{"cName":"VaticanCity","iso":"VA"},{"cName":"SaintPierreMiquelon","iso":"PM"},{"cName":"Montserrat","iso":"MS"},{"cName":"SolomonIslands","iso":"SB"},{"cName":"WesternSahara","iso":"EH"},{"cName":"Vanuatu","iso":"VU"},{"cName":"MarshallIslands","iso":"MH"},{"cName":"Samoa","iso":"WS"},{"cName":"SaintHelena","iso":"SH"},{"cName":"China","iso":"CN"}];
    //     return !country.findIndex(e=>e.cName===name)?'undefined':country[country.findIndex(e=>e.cName===name)].iso;
    // }


    

    const Countrysubmit = () => {
        if(firstCountryName !== '' || secondCountryName !== ''){
            console.log("aa")
        } else {
            console.log("bb")
            //서치버튼을 눌렀을떄
            // console.log(firstCountryName,secondCountryName)
            
        }
    }

    console.log(firstCountryName);

return (
        <div>
            <div className="div_input">
                <div className="div_inputOnly">
                    <input tabIndex={1} placeholder="첫번째 국가를 입력하세요(영문)" type="text" className="input_first" onChange={e => setFirstCountryName(e.target.value)}/>
                    <AutoComplete
                        keyword={firstCountryName}
                    />
                    <button type="submit" className="input_btn" onClick={Countrysubmit}><AiOutlineSearch/></button>
                    <input tabIndex={2} placeholder="두번째 국가를 입력하세요(영문)" type="text" className="input_last"  onChange={e => setsecondCountryName(e.target.value)}/>
                    <AutoComplete
                        keyword={secondCountryName}
                    />
                </div>
                <div className="Flag_div">
            </div>
            <CountryInfo first={firstCountryName} second={secondCountryName}/>
            <div className="div_info">
                <CountryTable first={firstCountryName} second={secondCountryName}/>
            </div>
            <div className="div_select">
            <input type="text" onChange={e => setvalue(e.target.value)} className="option_input"/>
                <select>
                    <option value="ny_gdp_pcap_cd">1인당 GDP</option>
                    <option value="fr_inr_lndp">가산금리</option>
                    <option value="cm_mkt_trad_cd">거래 주식, 총 금액</option>
                    <option value="ms_mil_xpnd_zs">국방비</option>
                    <option value="trade_current_us">무역액 지수</option>
                    <option value="st_int_rcpt_cd">국제 관광 수입</option>
                    <option value="sp_dyn_le00_in">기대수명</option>
                    <option value="labor_force">노동력</option>
                    <option value="sp_pop_totl">인구 수</option>
                </select>
            </div>
            <div className="div_graph">
                <Graph iso1={firstCountryName} iso2={secondCountryName} _data={value}/>
            </div>
            </div>
        </div>
    );

}

export default CountryInput;
