import React, {Component} from 'react';
import { connect } from 'react-redux';
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash';

class StreamEdit extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchStream(id);
  }

  onSubmit = formValues => {
    const { match: { params: { id } } } = this.props;
    this.props.editStream(id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
       <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
