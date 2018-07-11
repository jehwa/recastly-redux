import React from 'react';
import VideoListEntry from './VideoListEntry.js';

const VideoList = (props) => (
  <div className="video-list">
    {
      props.videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
