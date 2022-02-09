import React from 'react';
import Styles from './table.module.css';

const TableComponent = (props) => {
    return (
        <div>
           <table className= {Styles.container}>
	<thead>
		<tr>
			<th><h1 className={Styles.tableH1}> {props.title1}  </h1></th>
			<th><h1 className={Styles.tableH1}>{props.title2} </h1></th>
			<th><h1 className={Styles.tableH1}>{props.title3} </h1></th>
			<th><h1 className={Styles.tableH1}>{props.title4} </h1></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{props.list1}</td>
			<td>{props.list2}</td>
			<td>{props.list3}</td>
			<td>{props.list4}</td>
		</tr>
		
	</tbody>
</table>
        </div>
    );
}

export default TableComponent;
