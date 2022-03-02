import React from 'react';
import   './table.module.css';

const TableComponent = (props) => {
    return (
        <div>
                        <table>
            
            <thead>
                <tr>
                <th scope="col">نام کالا</th>
                
                <th scope="col">تعداد</th>
                <th scope="col">قیمت</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >{props.name}</td>
                <td >{props.qty}</td>
                <td >{props.price}</td>
                </tr>
            </tbody>
            </table>
                    </div>
    );
}

export default TableComponent;
