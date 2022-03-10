import React from 'react';
import styles from './comments.module.css';
import { Icon } from '@iconify/react';

const CommentsComponent = (props) => {



    let currentTimestamp = props.date;
    console.log(currentTimestamp); // get current timestamp
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentTimestamp)
    console.log(date)
    return (
        <div className={styles.container} >
            <Icon className={styles.userPic} icon="fa:user-circle" width="50" height="50" />
            <div className={styles.commentsWrapper}>
           
                <div className={styles.commentBox}>
                    <div className={styles.commentsItems}>
                    
                    <div className={styles.commentHeader}>
                        {
                            props.score > 3 ?
                            <p className={styles.scoreP}>{props.score}</p>  
                            :
                            <p className={styles.scoreRed}>{props.score}</p>
                        }
                    
                    <p className={styles.commentLikesP} >{props.likes} نفر  این کامنت را پسندیده اند</p>
                    <p className={styles.commentLikesP} >{props.dislikes} نفر  این کامنت را نپسندیده اند</p>

                    <div className={styles.likeDislike}>
                    <Icon onClick={props.like} className={styles.commentIcon} icon="bxs:like" color="green" width="30" height="55" />
                    <Icon onClick={props.dislike} className={styles.commentIcon} icon="bxs:dislike" color="#ee2d40" width="30" height="55" />
                    </div>
                    </div>
                <h1>
                       {props.username}
                   </h1>
                   <h2>
                        {props.userComment}
                        
                    </h2>
                    <p className={styles.date} >
                      
                    تاریخ کامنت:  {date}
                       
                    </p>
                    <p className={styles.report}>
                    <Icon icon="mdi:alert" color="#ee2d40" width="25" height="25" />
                 
                    </p>
                    </div>
                 
                </div>
                

            </div>
        </div>
    );
}

export default CommentsComponent;
