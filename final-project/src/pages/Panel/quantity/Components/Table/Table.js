import React from 'react';
import styles from './table.module.css';

const Table = (props) => {
    return (

        <div className= {styles.tableHead}>
            <div className={styles.List}>
            <h2>{props.quanitityList} </h2>

                
            </div>
            <div className={styles.List}>
        
            <h2>{props.priceList}</h2>

            </div>
            <div className={styles.List}>
            <h2>{props.nameList}</h2>


            </div>

      </div>




















//         <div>
            

// 		<table className= {styles.styled}>
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
