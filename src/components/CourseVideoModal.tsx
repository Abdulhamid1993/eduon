import React from "react";
import "../pages/Courses/SingleCoursePage/CoursesSinglePage.css";
// import CourseViewVideo from "../CourseVideoModal/CourseVideoModal";

import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";


export default function CourseVideoModal (props: any) {
  return (
    <div  className="course__video-moadal">
      
        <div className="course__video-moadalWrapper">
          <div className="course__video-modalContent">
            <svg
              className="exit-btn"
              onClick={() => props.setCourseModal(false)}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="#fff"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
            <div className="video-init">
              {props.type === "Youtube" ? (
                <Plyr
                options={{
                  controls: [
                    'rewind',
                    'play',
                    'fast-forward',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume',
                    'settings',
                    'fullscreen',
                    "quality",
                  ],
                  i18n: {
                    restart: 'Restart',
                    rewind: 'Rewind {seektime}s',
                    play: 'Play',
                    pause: 'Pause',
                    fastForward: 'Forward {seektime}s',
                    seek: 'Seek',
                    seekLabel: '{currentTime} of {duration}',
                    played: 'Played',
                    buffered: 'Buffered',
                    currentTime: 'Current time',
                    duration: 'Duration',
                    volume: 'Volume',
                    mute: 'Mute',
                    unmute: 'Unmute',
                    enableCaptions: 'Enable captions',
                    disableCaptions: 'Disable captions',
                    download: 'Download',
                    enterFullscreen: 'Enter fullscreen',
                    exitFullscreen: 'Exit fullscreen',
                    frameTitle: 'Player for {title}',
                    captions: 'Captions',
                    settings: 'Settings',
                    menuBack: 'Go back to previous menu',
                    speed: 'Speed',
                    normal: 'Normal',
                    quality: 'Quality',
                    loop: 'Loop',
                  }
                
                }}
                  source={{
                    type: "video",
                    sources: [
                      {
                        src: props?.trailer?.url,
                        provider: "youtube",
                      },
                    ],
                  }}
                />
              ) : (
                <Plyr
                  source={{
                    type: "video",
                    sources: [
                      {
                        src: "http://speaker.eduon.uz" + props?.videos?.video,
                        provider: "html5",
                      },
                    ],
                  }}
                />
              )}
            </div>
          </div>
        </div>
    </div>
  );
};
