import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

class App extends React.Component {

  componentDidMount() {
    this.props.handleSearchInputChange('puppy');
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSearchInputChange: q => dispatch(handleVideoSearch(q))
})

export default connect(null, mapDispatchToProps)(App)
