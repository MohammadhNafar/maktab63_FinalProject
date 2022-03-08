import React from 'react';
import Styles from './comments.module.css';
import { Icon } from '@iconify/react';

const CommentsComponent = (props) => {



    let currentTimestamp = props.date;
    console.log(currentTimestamp); // get current timestamp
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentTimestamp)
    console.log(date)
    return (
        <div className={Styles.container} >
            <Icon className={Styles.userPic} icon="fa:user-circle" width="50" height="50" />
            <div className={Styles.commentsWrapper}>
           
                <div className={Styles.commentBox}>
                    <div className={Styles.commentsItems}>
                    
                    <div className={Styles.commentHeader}>
                    <p className={Styles.scoreP}>{props.score}</p>
                    <p className={Styles.commentLikesP} >{props.likes} نفر  این کامنت را پسندیده اند</p>
                    <p className={Styles.commentLikesP} >{props.dislikes} نفر  این کامنت را نپسندیده اند</p>

                    <div className={Styles.likeDislike}>
                    <Icon onClick={props.like} className={Styles.commentIcon} icon="bxs:like" color="green" width="30" height="55" />
                    <Icon onClick={props.dislike} className={Styles.commentIcon} icon="bxs:dislike" color="#ee2d40" width="30" height="55" />
                    </div>
                    </div>
                <h1>
                       {props.username}
                   </h1>
                   <h2>
                        {props.userComment}
                        
                    </h2>
                    <p className={Styles.date} >
                      
                    تاریخ کامنت:  {date}
                        
                    </p>
                    </div>
                 
                </div>
                

            </div>
        </div>
    );
}

export default CommentsComponent;
