// MoleculeSwipeOrFullWidthWithText.js
import React from 'react';
import { useSwipeable } from 'react-swipeable';
import AtomIcon from './AtomIcon';
import AtomText from './AtomText';

const SwipeLeftRight = ({ leftIconSrc, rightIconSrc, arrowWidth, swipeText, iconSrc, iconRotation, fullWidthText, onSwipeLeft, onSwipeRight }) => {
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => onSwipeLeft && onSwipeLeft(),
        onSwipedRight: () => onSwipeRight && onSwipeRight(),
    });

    return (
        <div {...swipeHandlers} style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {leftIconSrc && rightIconSrc && (
                    <>
                        <AtomIcon src={leftIconSrc} rotation={180} width={arrowWidth} alt="Left Icon" />
                        <AtomIcon src={rightIconSrc} rotation={0} width={arrowWidth} alt="Right Icon" />
                    </>
                )}
                {iconSrc && iconRotation !== undefined && !leftIconSrc && !rightIconSrc && (
                    <AtomIcon src={iconSrc} rotation={iconRotation} width="100%" alt="Full Width Icon" />
                )}
            </div>
            <AtomText>{swipeText || fullWidthText}</AtomText>
        </div>
    );
};

export default SwipeLeftRight;
