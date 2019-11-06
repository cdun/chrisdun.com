import React, { FunctionComponent } from 'react';
import './NamePlate.scss';

const NamePlate: FunctionComponent = () => (
    <header className="NamePlate">
        <h1 className="NamePlate--title">
            Chris Dun
        </h1>
        <h2 className="NamePlate--subtitle">
            Software Engineer
        </h2>
    </header>
);

export default NamePlate;