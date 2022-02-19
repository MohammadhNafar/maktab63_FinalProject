import React from 'react';
import Styles from './comments.module.css';

const CommentsComponent = (props) => {
    return (
        <div className={Styles.container} >
            
            <div className={Styles.commentsWrapper}>
                <div className={Styles.commentBox}>
                    <div className={Styles.commentsItems}>

                    <p>{props.score}</p>
                <h1>
                       {props.username}
                   </h1>
                   <h2>
                        {props.userComment}
                        
                    </h2>

                    </div>
                 
                </div>
                

            </div>
        </div>
    );
}

export default CommentsComponent;
