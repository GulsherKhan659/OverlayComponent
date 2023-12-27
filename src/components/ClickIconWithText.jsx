import React from 'react';
import AtomIcon from './AtomIcon';
import AtomText from './AtomText';

const ClickIconWithText = ({ iconSrc, iconRotation, text, onTap }) => (
    <div onClick={() => onTap()} style={{ width: '100%' }}>
        <div style={{ display: 'flex' }}>
            <AtomIcon src={iconSrc} rotation={iconRotation} width={50} height={50} alt="Icon" />
            <div style={{ width: '10px' }}></div>
            <AtomText>{text}</AtomText>
        </div>
    </div>
);

export default ClickIconWithText;
