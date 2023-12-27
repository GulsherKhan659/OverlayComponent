import React from 'react';
import './index.css';
import arrowRightImage from '../assets/images/arrow-right.png';
import tapImage from '../assets/images/tap-click.png';
import arrowRightOrLeftImage from '../assets/images/arrow-left-right.png';
import SwipeLeftRight from '../components/SwipeLeftRight';
import ClickIconWithText from '../components/ClickIconWithText';


function OverlayMain() {

    const handleSwipeLeft = () => {
        alert('Left');
        console.log('Swiped left!');
    };

    const handleSwipeRight = () => {
        alert('Right');
        console.log('Swiped right!');
    };

    const onTap = () => {
        alert('Tap');
    }
    return (
        <div>
            <div className="main-container">

                <div style={{ width: '35%' }}>
                    <ClickIconWithText
                        onTap={onTap}

                        iconSrc={tapImage} iconRotation={75} text="Tap to read an article" />
                </div>

                {/* Component 2 */}
                <div style={{ width: '20%' }}>
                    <SwipeLeftRight
                        leftIconSrc={arrowRightImage}
                        rightIconSrc={arrowRightImage}
                        arrowWidth={140}
                        swipeText="Swipe to see more news"
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                </div>

                {/* Component 3 */}
                <div style={{ width: '20%' }}>
                    <SwipeLeftRight
                        iconSrc={arrowRightOrLeftImage}
                        iconRotation={0}
                        fullWidthText="Swipe to see calendar events"
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                </div>


            </div>
        </div>
    );
}

export default OverlayMain;
