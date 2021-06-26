import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

//NOTE: map state from redux to component props
function mapStateToProps(state) {
  //NOTE: access comments state since we used combimed reducer which merge all the reducer states into one
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
