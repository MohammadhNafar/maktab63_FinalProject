import React from 'react';
import Styles from './table.module.css';

const TableComponent = (props) => {
    return (




		<table className= {Styles.styled}>
    <thead>
        <tr>
            <th className={Styles.Id}>{props.id}</th>
            <th className={Styles.nameSec}>{props.name}</th>
			<th className={Styles.priceSec}>{props.price}</th>
            <th className={Styles.TimeSec} >{props.time}</th>
			<th className={Styles.statusSec}>{props.status}</th>
            <th className={Styles.infoSec}>{props.info}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{props.idList}</td>
            <td>{props.nameList}</td>
			<td>{props.priceList}</td>
            <td>{props.timeList}</td>
			<td>{props.statusList}</td>
            <td>{props.infoList}</td>
        </tr>
       
		<tr>
            <td>Dom</td>
            <td>6000</td>
			<td>Dom</td>
            <td>6000</td>
			<td>Dom</td>
            <td>6000</td>
        </tr>
        
    </tbody>
</table>












//         <div>
//            <table className= {Styles.container}>
// 	<thead>
// 		<tr>
// 			<th><h1 className={Styles.tableH1}> {props.title1}  </h1></th>
// 			<th><h1 className={Styles.tableH1}>{props.title2} </h1></th>
// 			<th><h1 className={Styles.tableH1}>{props.title3} </h1></th>
// 			<th><h1 className={Styles.tableH1First}>{props.title4} </h1></th>
// 		</tr>
// 	</thead>
// 	<tbody>
// 		<tr>
// 			<td>{props.list1}</td>
// 			<td>{props.list2}</td>
// 			<td>{props.list3}</td>
// 			<td>{props.list4}</td>
// 		</tr>
		
// 	</tbody>
// </table>
//         </div>
    );
}

export default TableComponent;
