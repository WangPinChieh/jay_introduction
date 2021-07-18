import React from 'react';
import ReactDOM from 'react-dom';
import parse from 'html-react-parser'

const CarouselTypes = {
    Text: 'Text',
    Image: 'Image',
}

function CarouselControlButton(props) {
    return (
        <button className={"carousel-control-" + props.direction} type="button" data-bs-target={props.target}
                data-bs-slide={props.direction}>
            <span className={"carousel-control-" + props.direction + "-icon"} aria-hidden="true"></span>
            <span className="visually-hidden">{(props.direction === 'prev' ? 'Previous' : 'Next')}</span>
        </button>
    );
};

function CarouselIndicatorButton(props) {
    return (
        <button type="button" data-bs-target={props.target} data-bs-slide-to={props.slideTo}
                className={(props.active ? "active" : '')}
                aria-current={(props.current ? 'true' : '')}></button>
    );
};

class CarouselTextBlock extends React.Component {
    render() {
        return (
            <div>
                {parse(this.props.text)}
            </div>
        );
    }
}

class CarouselImageBlock extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imageSrc} className="responsive"></img>
            </div>
        );
    }
}

class CarouselItem extends React.Component {
    render() {
        return (
            <div className={"carousel-item" + (this.props.active ? ' active' : '')}>
                <svg className="bd-placeholder-img" width="100%" height="100%"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"
                     focusable="false">
                    <rect width="100%" height="100%" fill="#777"/>
                </svg>

                <div className="carousel-caption">
                    <div className="flex">
                        <div className="full">
                            {this.renderBlock(this.props.leftBlock)}
                        </div>
                        <div className="full">
                            {this.renderBlock(this.props.rightBlock)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderBlock(data) {
        switch (data.type) {
            case CarouselTypes.Text:
                return <CarouselTextBlock text={data.text}/>;
            case CarouselTypes.Image:
                return <CarouselImageBlock imageSrc={data.imageSrc}/>;
        }

        return <CarouselTextBlock/>;
    }
}

class Carousel extends React.Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide full-height" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <CarouselIndicatorButton slideTo={0} target={'#myCarousel'} active={true} current={true}/>
                    <CarouselIndicatorButton slideTo={1} target={'#myCarousel'}/>
                    <CarouselIndicatorButton slideTo={2} target={'#myCarousel'}/>
                </div>
                <div className="carousel-inner">
                    <CarouselItem active={true} leftBlock={{type: CarouselTypes.Text, text: '<h1>H1 Test</h1>'}}
                                  rightBlock={{type: CarouselTypes.Text, text: '<p>Test</p>'}}/>
                    <CarouselItem leftBlock={{type: CarouselTypes.Image, imageSrc: '../images/jay_photo.jpg'}}
                                  rightBlock={{type: CarouselTypes.Text, text: '<p>Test</p>'}}/>
                    <CarouselItem leftBlock={{type: CarouselTypes.Text, text: '<h1>H1 Test</h1>'}}
                                  rightBlock={{type: CarouselTypes.Text, text: '<p>Test</p>'}}/>
                </div>
                <CarouselControlButton target={'#myCarousel'} direction={'prev'} />
                <CarouselControlButton target={'#myCarousel'} direction={'next'} />
            </div>
        );
    }
}

class IntroductionPage extends React.Component {
    render() {
        return (
            <Carousel/>
        )
    }
}

ReactDOM.render(
    <IntroductionPage/>
    ,
    document.getElementById('root')
);