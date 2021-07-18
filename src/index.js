import React from 'react';
import ReactDOM from 'react-dom';
import parse from 'html-react-parser'

ReactDOM.render(
    <div className='full-height container'>
        <div id={'intro'} className='full-height' style={{'background-color': 'coral'}}>
            test
        </div>
        <div id={'experience'} className='full-height' style={{'background-color': 'yellow'}}></div>
        <div id={'education'} className='full-height'></div>
    </div>
    ,
    document.getElementById('root')
);