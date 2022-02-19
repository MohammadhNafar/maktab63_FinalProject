import React from 'react';
import Styles from './comments.module.css';
import { Icon } from '@iconify/react';

const CommentsComponent = (props) => {
    return (
        <div className={Styles.container} >
            
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

                    </div>
                 
                </div>
                

            </div>
        </div>
    );
}

export default CommentsComponent;
