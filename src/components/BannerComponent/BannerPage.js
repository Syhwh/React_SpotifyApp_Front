import React from 'react';
import './style.scss'
import { Scrollbars } from 'react-custom-scrollbars';

export function BannerPage() {
  return (<>

    <Scrollbars style={{ width: '100%', height: 300 }}
      autoHide
      // Hide delay in ms
      autoHideTimeout={1000}
      // Duration for hide animation in ms.
      autoHideDuration={200}
      renderTrackHorizontal={props => <div {...props} className="track-horizontal" />}
    >
      <div className="cardDisplay">
        <div className="cardDisplay--content"><img src="http://image.prntscr.com/image/15f7d1b8dca94296b249f56eb6cc78d3.png" /></div>
        <div className="cardDisplay--content"><img src="http://image.prntscr.com/image/f2b0ac9e43334eddac9c1af05e573888.png" /></div>
        <div className="cardDisplay--content"><img src="http://image.prntscr.com/image/6915d39cf813481fa3c19fa292c582ba.png" /></div>
        <div className="cardDisplay--content">
          <img src="http://image.prntscr.com/image/ad357d428faf4e88ab3bdac78782b523.png" /></div>
        <div className="cardDisplay--content">
          <img src="http://image.prntscr.com/image/7e98362d62b2490c998fe1472dcb0601.png" /></div>
      </div>
    </Scrollbars >


  </>)
}