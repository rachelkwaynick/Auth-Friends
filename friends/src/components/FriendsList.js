import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// import { axiosWithAuth } from '../utilities/axiosWithAuth';

import { fetchFriends, postFriend, deleteFriend } from '../store/actions';


const initialInput = {
    name: '', 
    age: '', 
    email: '',
}

function FriendsList(props) {
    const { history, fetchFriends, postFriend, deleteFriend, isLoading, error, friends, activeFriend, newFriend} = props;

    const [input, setInput] = useState(initialInput);

    useEffect(() => {
        fetchFriends();

        // axiosWithAuth()
        //     .get('/friends')
        //     .then(res => {
        //         setFriends(res.data)
        //     })
        //     .catch(err => console.log(err))
        
    }, [newFriend])

    const edit = () => {
        
    }

    const handleDeleteFriend = (id) => {
        deleteFriend(id)
    }

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        postFriend(input);
        setInput(initialInput)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type='text'
                        name='name'
                        value={input.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Age
                    <input
                        type='text'
                        name='age'
                        value={input.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='text'
                        name='email'
                        value={input.email}
                        onChange={handleChange}
                    />
                </label>

                <button>Submit New Friend</button>
            </form>

            {
                isLoading ? <p>Loading Friends</p> : null
            }
            {
                error ? <p>{error}</p> : null
            }

            {
                friends.map((friend, idx) => (
                    <div key={idx}>
                        <div>{friend.name}</div>
                        <div>{friend.age}</div>
                        <div>{friend.email}</div>

                        <div className='buttons'>
                            <button onClick={() => edit(idx)}>Edit</button>
                            <button onClick={() => handleDeleteFriend(friend.id)}>Delete</button>
                        </div>
                        
                    </div>
                    

                ))
            }
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

export default connect(mapStateToProps, { fetchFriends, postFriend, deleteFriend })(FriendsList);
