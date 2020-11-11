import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { updateFriend } from '../store/actions'


// import { axiosWithAuth } from '../utilities/axiosWithAuth';

function EditFriend(props) {
    const { history, updateFriend, isLoading, error, friends, activeFriend, newFriend } = props;

    // const [ updatedFriend, setUpdatedFriend ] = useState(friend)

    const handleChange = e => {
        // setUpdatedFriend({
        //     ...updatedFriend,
        //     [e.target.name]: e.target.value
        // })

    
    }

    const edit = e => {
        e.preventDefault();
        // axiosWithAuth()
        //     .put(`/friends/${friend.id}`)
        // console.log('friend.id', friend.id)
    }


    return (
        <div>
            <form>
                <label>
                    Name
                    <input
                        type='text'
                        name='name'
                        // value={friend.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Age
                    <input
                        type='text'
                        name='age'
                        // value={friend.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='text'
                        name='email'
                        // value={friend.email}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        friends: state.friendsData,
        error: state.error,
        activeFriend: state.activeFriend,
        newFriend: state.newFriend
    }
}

export default connect(mapStateToProps, { updateFriend })(EditFriend);



