import styles from '../styles/home.module.css';
import { useAuth } from '../hooks';
import { Link } from 'react-router-dom';
const FriendsList = () => {
    const auth = useAuth();
    const { friends = [] } = auth.user;

    return (
        <div className={styles.friendsList}>
            <div className={styles.headers} >
                {friends && friends.length === 0 &&
                    (<div className={styles.noFriends}>No Friends Found</div>)}
                {friends && friends.map(friend => <div key={`friend-${friend._id}`}>
                    <Link className={styles.friendsItem} to={`/user/${friend._id}`}>
                        <div className={styles.friendsImg}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.friendsName}>{friend.to_user.email}</div>
                    </Link>
                </div>)}
            </div>
        </div>
    )
}

export default FriendsList;