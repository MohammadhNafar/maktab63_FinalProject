import React from 'react';
import Styles from './table.module.css';

const Table = (props) => {
    return (

        <div className= {Styles.tableHead}>
            <div className={Styles.List}>
            <h2>{props.quanitityList} </h2>

                
            </div>
            <div className={Styles.List}>
        
            <h2>{props.priceList}</h2>

            </div>
            <div className={Styles.List}>
            <h2>{props.nameList}</h2>


            </div>

      </div>




















//         <div>
            

// 		<table className= {Styles.styled}>
//     <thead>
   
//     </thead>
//     <tbody>
//         <tr>
          
//             <td>{props.nameList}</td>
// 			<td>{props.priceList}</td>
            
			
//             <td>{props.quanitityList}</td>
//         </tr>
       
		
//     </tbody>
// </table>

//         </div>
    );
}

export default Table;
