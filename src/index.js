import React from 'react';
import ReactDOM from 'react-dom';
import parse from 'html-react-parser'

ReactDOM.render(
    <div className='full-height container'>
        <div id={'intro'} className='full-height background-image'>
            <div className={'flex responsive'}>
                <div className={'full'}>
                    <img className={'introImg'} src='../images/jay_photo.jpg'/>
                </div>
                <div className={'full content'}>
                    <p id={'intro_1'}><i>Hi, I'm</i></p>
                    <p id={'intro_2'}>Jay Wang</p>
                    <p id={'intro_3'}>王品傑 / 1989</p>
                    <p id={'intro_3'}>桃園市</p>
                </div>
            </div>
        </div>
        <div id={'experience'} className='full-height'>
            <div className={'flex responsive'}>
                <div className={'full content'}>
                    <p className={'sessionHeader'}>My Journey</p>
                    <div className={'flex'}>
                        <div style={{'flex-shrink': 1}}>
                            <img style={{right: 0}} src='../images/apex.png'/>
                        </div>
                        <div style={{'flex-shrink': 2}}>Test</div>
                    </div>
                </div>
            </div>
        </div>
        <div id={'education'} className='full-height'></div>
    </div>
    ,
    document.getElementById('root')
);