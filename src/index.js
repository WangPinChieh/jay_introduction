import React from 'react';
import ReactDOM from 'react-dom';

const CarouselTypes = {
    Text: 'Text',
    Image: 'Image',
}

class CarouselTextBlock extends React.Component {
    render() {
        return (
            <div>
                <h1>Another example headline.</h1>
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
            <div className="carousel-item">
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
                return <CarouselTextBlock />;
            case CarouselTypes.Image:
                return <CarouselImageBlock imageSrc={data.imageSrc}/>;
        }

        return <CarouselTextBlock/>;
    }
}

class IntroductionPage extends React.Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide full-height" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"
                             focusable="false">
                            <rect width="100%" height="100%" fill="#777"/>
                        </svg>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <CarouselItem leftBlock={{type: CarouselTypes.Image, imageSrc: '../images/jay_photo.jpg'}}
                                  rightBlock={{type: CarouselTypes.Text}}/>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"
                             focusable="false">
                            <rect width="100%" height="100%" fill="#777"/>
                        </svg>

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <IntroductionPage/>
    ,
    document.getElementById('root')
);