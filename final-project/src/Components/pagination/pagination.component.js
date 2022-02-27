import React from 'react';
import Styles from './pagination.module.css';

const PaginationComponent = ({postsPerPage, totalPosts, paginate},props) => {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++)
    {
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className={Styles.container}>
  
 
  <ul className={Styles.pagination}>
    
        {pageNumbers.map(number => (

            <div>
              <li key={number}>
                  <a onClick={() => paginate(number)} href='#'>
                      {number}
                      
                  </a>
                  
                  
              </li>
              
             </div>
                
        ))}
   
  </ul>
</div>
            
        </div>
    );
}

export default PaginationComponent;
