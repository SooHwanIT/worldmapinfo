// // import * as React from 'react';
// // import {useState} from 'react';
// // import Iframe from 'react-iframe';

// // interface Googlee {
// //     iso1:string,
// //     iso2:string,
// //     data:string
// // }

// // const Graph: React.FC<Googlee> = ((data) => {

// //     const ISO = require("country-iso-2-to-3");
// //     let iso1 = ISO(data.iso1);
// //     let iso2 = ISO(data.iso2);

// //     const url:string = `https://www.google.co.kr/publicdata/embed?ds=d5bncppjof8f9_&ctype=l&strail=false&bcs=d&nselm=h&met_y=${data.data}&scale_y=lin&ind_y=false&rdim=world&idim=country:${iso1}:${iso2}&ifdim=world&hl=ko&dl=ko&ind=false`;

// //     console.log(url);

// //     return (
// //         <div className="graph">
// //             <Iframe
// //                 className="graph_iframe"
// //                 width="400"
// //                 height="325"
// //                 scrolling="no"
// //                 url={url}
// //             />
// //         </div>
// //     );

// // });

// // export default Graph;

import * as React from 'react';
import Iframe from 'react-iframe';
// import '../../css/CountryInputcss.css';

interface Info{
    iso1:string;
    iso2:string;
    _data:string;
}    

var country = [{"iso":"AF","cName":"Afghanistan"},{"iso":"AX","cName":"Aland Islands"},{"iso":"AL","cName":"Albania"},{"iso":"DZ","cName":"Algeria"},{"iso":"AS","cName":"American Samoa"},{"iso":"AD","cName":"Andorra"},{"iso":"AO","cName":"Angola"},{"iso":"AI","cName":"Anguilla"},{"iso":"AQ","cName":"Antarctica"},{"iso":"AG","cName":"Antigua And Barbuda"},{"iso":"AR","cName":"Argentina"},{"iso":"AM","cName":"Armenia"},{"iso":"AW","cName":"Aruba"},{"iso":"AU","cName":"Australia"},{"iso":"AT","cName":"Austria"},{"iso":"AZ","cName":"Azerbaijan"},{"iso":"BS","cName":"Bahamas"},{"iso":"BH","cName":"Bahrain"},{"iso":"BD","cName":"Bangladesh"},{"iso":"BB","cName":"Barbados"},{"iso":"BY","cName":"Belarus"},{"iso":"BE","cName":"Belgium"},{"iso":"BZ","cName":"Belize"},{"iso":"BJ","cName":"Benin"},{"iso":"BM","cName":"Bermuda"},{"iso":"BT","cName":"Bhutan"},{"iso":"BO","cName":"Bolivia"},{"iso":"BA","cName":"Bosnia And Herzegovina"},{"iso":"BW","cName":"Botswana"},{"iso":"BV","cName":"Bouvet Island"},{"iso":"BR","cName":"Brazil"},{"iso":"IO","cName":"British Indian Ocean Territory"},{"iso":"BN","cName":"Brunei Darussalam"},{"iso":"BG","cName":"Bulgaria"},{"iso":"BF","cName":"Burkina Faso"},{"iso":"BI","cName":"Burundi"},{"iso":"KH","cName":"Cambodia"},{"iso":"CM","cName":"Cameroon"},{"iso":"CA","cName":"Canada"},{"iso":"CV","cName":"Cape Verde"},{"iso":"KY","cName":"Cayman Islands"},{"iso":"CF","cName":"Central African Republic"},{"iso":"TD","cName":"Chad"},{"iso":"CL","cName":"Chile"},{"iso":"CN","cName":"China"},{"iso":"CX","cName":"Christmas Island"},{"iso":"CC","cName":"Cocos (Keeling) Islands"},{"iso":"CO","cName":"Colombia"},{"iso":"KM","cName":"Comoros"},{"iso":"CG","cName":"Congo"},{"iso":"CD","cName":"Congo, Democratic Republic"},{"iso":"CK","cName":"Cook Islands"},{"iso":"CR","cName":"Costa Rica"},{"iso":"CI","cName":"Cote D\"Ivoire"},{"iso":"HR","cName":"Croatia"},{"iso":"CU","cName":"Cuba"},{"iso":"CY","cName":"Cyprus"},{"iso":"CZ","cName":"Czech Republic"},{"iso":"DK","cName":"Denmark"},{"iso":"DJ","cName":"Djibouti"},{"iso":"DM","cName":"Dominica"},{"iso":"DO","cName":"Dominican Republic"},{"iso":"EC","cName":"Ecuador"},{"iso":"EG","cName":"Egypt"},{"iso":"SV","cName":"El Salvador"},{"iso":"GQ","cName":"Equatorial Guinea"},{"iso":"ER","cName":"Eritrea"},{"iso":"EE","cName":"Estonia"},{"iso":"ET","cName":"Ethiopia"},{"iso":"FK","cName":"Falkland Islands (Malvinas)"},{"iso":"FO","cName":"Faroe Islands"},{"iso":"FJ","cName":"Fiji"},{"iso":"FI","cName":"Finland"},{"iso":"FR","cName":"France"},{"iso":"GF","cName":"French Guiana"},{"iso":"PF","cName":"French Polynesia"},{"iso":"TF","cName":"French Southern Territories"},{"iso":"GA","cName":"Gabon"},{"iso":"GM","cName":"Gambia"},{"iso":"GE","cName":"Georgia"},{"iso":"DE","cName":"Germany"},{"iso":"GH","cName":"Ghana"},{"iso":"GI","cName":"Gibraltar"},{"iso":"GR","cName":"Greece"},{"iso":"GL","cName":"Greenland"},{"iso":"GD","cName":"Grenada"},{"iso":"GP","cName":"Guadeloupe"},{"iso":"GU","cName":"Guam"},{"iso":"GT","cName":"Guatemala"},{"iso":"GG","cName":"Guernsey"},{"iso":"GN","cName":"Guinea"},{"iso":"GW","cName":"Guinea-Bissau"},{"iso":"GY","cName":"Guyana"},{"iso":"HT","cName":"Haiti"},{"iso":"HM","cName":"Heard Island & Mcdonald Islands"},{"iso":"VA","cName":"Holy See (Vatican City State)"},{"iso":"HN","cName":"Honduras"},{"iso":"HK","cName":"Hong Kong"},{"iso":"HU","cName":"Hungary"},{"iso":"IS","cName":"Iceland"},{"iso":"IN","cName":"India"},{"iso":"ID","cName":"Indonesia"},{"iso":"IR","cName":"Iran, Islamic Republic Of"},{"iso":"IQ","cName":"Iraq"},{"iso":"IE","cName":"Ireland"},{"iso":"IM","cName":"Isle Of Man"},{"iso":"IL","cName":"Israel"},{"iso":"IT","cName":"Italy"},{"iso":"JM","cName":"Jamaica"},{"iso":"JP","cName":"Japan"},{"iso":"JE","cName":"Jersey"},{"iso":"JO","cName":"Jordan"},{"iso":"KZ","cName":"Kazakhstan"},{"iso":"KE","cName":"Kenya"},{"iso":"KI","cName":"Kiribati"},{"iso":"KR","cName":"Korea"},{"iso":"KW","cName":"Kuwait"},{"iso":"KG","cName":"Kyrgyzstan"},{"iso":"LA","cName":"Lao People\"s Democratic Republic"},{"iso":"LV","cName":"Latvia"},{"iso":"LB","cName":"Lebanon"},{"iso":"LS","cName":"Lesotho"},{"iso":"LR","cName":"Liberia"},{"iso":"LY","cName":"Libyan Arab Jamahiriya"},{"iso":"LI","cName":"Liechtenstein"},{"iso":"LT","cName":"Lithuania"},{"iso":"LU","cName":"Luxembourg"},{"iso":"MO","cName":"Macao"},{"iso":"MK","cName":"Macedonia"},{"iso":"MG","cName":"Madagascar"},{"iso":"MW","cName":"Malawi"},{"iso":"MY","cName":"Malaysia"},{"iso":"MV","cName":"Maldives"},{"iso":"ML","cName":"Mali"},{"iso":"MT","cName":"Malta"},{"iso":"MH","cName":"Marshall Islands"},{"iso":"MQ","cName":"Martinique"},{"iso":"MR","cName":"Mauritania"},{"iso":"MU","cName":"Mauritius"},{"iso":"YT","cName":"Mayotte"},{"iso":"MX","cName":"Mexico"},{"iso":"FM","cName":"Micronesia, Federated States Of"},{"iso":"MD","cName":"Moldova"},{"iso":"MC","cName":"Monaco"},{"iso":"MN","cName":"Mongolia"},{"iso":"ME","cName":"Montenegro"},{"iso":"MS","cName":"Montserrat"},{"iso":"MA","cName":"Morocco"},{"iso":"MZ","cName":"Mozambique"},{"iso":"MM","cName":"Myanmar"},{"iso":"NA","cName":"Namibia"},{"iso":"NR","cName":"Nauru"},{"iso":"NP","cName":"Nepal"},{"iso":"NL","cName":"Netherlands"},{"iso":"AN","cName":"Netherlands Antilles"},{"iso":"NC","cName":"New Caledonia"},{"iso":"NZ","cName":"New Zealand"},{"iso":"NI","cName":"Nicaragua"},{"iso":"NE","cName":"Niger"},{"iso":"NG","cName":"Nigeria"},{"iso":"NU","cName":"Niue"},{"iso":"NF","cName":"Norfolk Island"},{"iso":"MP","cName":"Northern Mariana Islands"},{"iso":"NO","cName":"Norway"},{"iso":"OM","cName":"Oman"},{"iso":"PK","cName":"Pakistan"},{"iso":"PW","cName":"Palau"},{"iso":"PS","cName":"Palestinian Territory, Occupied"},{"iso":"PA","cName":"Panama"},{"iso":"PG","cName":"Papua New Guinea"},{"iso":"PY","cName":"Paraguay"},{"iso":"PE","cName":"Peru"},{"iso":"PH","cName":"Philippines"},{"iso":"PN","cName":"Pitcairn"},{"iso":"PL","cName":"Poland"},{"iso":"PT","cName":"Portugal"},{"iso":"PR","cName":"Puerto Rico"},{"iso":"QA","cName":"Qatar"},{"iso":"RE","cName":"Reunion"},{"iso":"RO","cName":"Romania"},{"iso":"RU","cName":"Russian Federation"},{"iso":"RW","cName":"Rwanda"},{"iso":"BL","cName":"Saint Barthelemy"},{"iso":"SH","cName":"Saint Helena"},{"iso":"KN","cName":"Saint Kitts And Nevis"},{"iso":"LC","cName":"Saint Lucia"},{"iso":"MF","cName":"Saint Martin"},{"iso":"PM","cName":"Saint Pierre And Miquelon"},{"iso":"VC","cName":"Saint Vincent And Grenadines"},{"iso":"WS","cName":"Samoa"},{"iso":"SM","cName":"San Marino"},{"iso":"ST","cName":"Sao Tome And Principe"},{"iso":"SA","cName":"Saudi Arabia"},{"iso":"SN","cName":"Senegal"},{"iso":"RS","cName":"Serbia"},{"iso":"SC","cName":"Seychelles"},{"iso":"SL","cName":"Sierra Leone"},{"iso":"SG","cName":"Singapore"},{"iso":"SK","cName":"Slovakia"},{"iso":"SI","cName":"Slovenia"},{"iso":"SB","cName":"Solomon Islands"},{"iso":"SO","cName":"Somalia"},{"iso":"ZA","cName":"South Africa"},{"iso":"GS","cName":"South Georgia And Sandwich Isl."},{"iso":"ES","cName":"Spain"},{"iso":"LK","cName":"Sri Lanka"},{"iso":"SD","cName":"Sudan"},{"iso":"SR","cName":"Suriname"},{"iso":"SJ","cName":"Svalbard And Jan Mayen"},{"iso":"SZ","cName":"Swaziland"},{"iso":"SE","cName":"Sweden"},{"iso":"CH","cName":"Switzerland"},{"iso":"SY","cName":"Syrian Arab Republic"},{"iso":"TW","cName":"Taiwan"},{"iso":"TJ","cName":"Tajikistan"},{"iso":"TZ","cName":"Tanzania"},{"iso":"TH","cName":"Thailand"},{"iso":"TL","cName":"Timor-Leste"},{"iso":"TG","cName":"Togo"},{"iso":"TK","cName":"Tokelau"},{"iso":"TO","cName":"Tonga"},{"iso":"TT","cName":"Trinidad And Tobago"},{"iso":"TN","cName":"Tunisia"},{"iso":"TR","cName":"Turkey"},{"iso":"TM","cName":"Turkmenistan"},{"iso":"TC","cName":"Turks And Caicos Islands"},{"iso":"TV","cName":"Tuvalu"},{"iso":"UG","cName":"Uganda"},{"iso":"UA","cName":"Ukraine"},{"iso":"AE","cName":"United Arab Emirates"},{"iso":"GB","cName":"United Kingdom"},{"iso":"US","cName":"United States"},{"iso":"UM","cName":"United States Outlying Islands"},{"iso":"UY","cName":"Uruguay"},{"iso":"UZ","cName":"Uzbekistan"},{"iso":"VU","cName":"Vanuatu"},{"iso":"VE","cName":"Venezuela"},{"iso":"VN","cName":"Viet Nam"},{"iso":"VG","cName":"Virgin Islands, British"},{"iso":"VI","cName":"Virgin Islands, U.S."},{"iso":"WF","cName":"Wallis And Futuna"},{"iso":"EH","cName":"Western Sahara"},{"iso":"YE","cName":"Yemen"},{"iso":"ZM","cName":"Zambia"},{"iso":"ZW","cName":"Zimbabwe"}];    
var data_1 = [{"value":"ny_gdp_pcap_cd", "data":"1인당 GDP"},{"value":"fr_inr_lndp","data":"가산금리"},{"value":"cm_mkt_trad_cd","data":"거래 주식, 총 금액"},{"value":"ms_mil_xpnd_zs","data":"국방비"},{"value":"trade_current_us","data":"무역액 지수"},{"value":"st_int_rcpt_cd","data":"국제 관광 수입"},{"value":"sp_dyn_le00_in","data":"기대수명"},{"value":"labor_force","data":"노동력"},{"value":"sp_pop_totl","data":"인구 수"}];


const EconomyGraph : React.FC<Info> =({iso1,iso2,_data})=> {

    // console.log(iso1, iso2);
    console.log(data_1)
    const ISO = require("country-iso-2-to-3"); // ISO 2 to 3
    const result_1:number = country.findIndex(e=>e.cName===iso1);
    const result_2:number = country.findIndex(e=>e.cName===iso2);
    const result_3:number = data_1.findIndex(e=>e.data===_data); 
    // let result_1:string = "";
    // let result_2:string = "";
    let firstCountry:string = ""; 
    let secondCountry:string = "";
    let dataCountry:string = "";
    
    // console.log(result_1);

    if(result_1 !== -1){
        firstCountry = country[result_1].iso;
        firstCountry = ISO(firstCountry);
    }

    if(result_2 !== -1){
        secondCountry = country[result_2].iso;
        secondCountry = ISO(secondCountry);
    }

    if(result_3 !== -1){
        dataCountry = data_1[result_3].value;
    }
    // console.log(firstCountry, secondCountry)
    const url:string = `https://www.google.co.kr/publicdata/embed?ds=d5bncppjof8f9_&ctype=l&strail=false&bcs=d&nselm=h&met_y=${dataCountry}&scale_y=lin&ind_y=false&rdim=world&idim=country:${firstCountry}:${secondCountry}&ifdim=world&hl=ko&dl=ko&ind=false`;
    //data는 추후 변경 예정
    // console.log(url)
    return (
        <div className="graph_iframe_div">
            <Iframe
                className="graph_iframe"
                width="400"
                height="325"
                scrolling="no"
                url={url}
            />
        </div>
    );
}

export default EconomyGraph;