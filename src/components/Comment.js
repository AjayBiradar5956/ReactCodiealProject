import propTypes from 'prop-types';
import styles from '../styles/home.module.css';
function Comment({ comment }) {
    return (
        <div className={styles.postCommentItem}>
            <div className={styles.postCommentHeader}>
                <span className={styles.postCommentAuthor}>{comment.user.name}</span>
                <span className={styles.postCommentTime}>A minute Ago</span>
            </div>
            <div className={styles.postCommentContent}>{comment.content}</div>
        </div>
    )
}
Comment.propTypes = {
    comment: propTypes.object.isRequired,
}

export default Comment;