import React, { Component } from 'react'
import Friend from './Friend';

export default class Friends extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <h1>My Friends App</h1>
        <div>
          {
            this.props.friends.map(friend => (
              <Friend 
                key={friend.id}
                friend={friend}
                deleteFriend={this.props.deleteFriend}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Friends;