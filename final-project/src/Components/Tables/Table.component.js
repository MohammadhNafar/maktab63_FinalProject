import React from 'react';
import Styles from './table.module.css';
import BASE_URL from '../../configs/variable.config';
import axios from 'axios';


const TableComponent = (props) => {
   
    




    console.log(BASE_URL)
    return (




		<table className= {Styles.styled}>
    <thead>
    <tr>
              <th className={Styles.Id}>آیدی</th>
              <th className={Styles.nameSec}>2131</th>
        <th className={Styles.priceSec}>12313</th>
              <th className={Styles.TimeSec} >12313</th>
        <th className={Styles.statusSec}>12313</th>
              <th className={Styles.infoSec}>1231</th>
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
       
		
    </tbody>
</table>












    );
}

export default TableComponent;
