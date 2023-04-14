import React from 'react'
import { Carousel, CarouselItem, CarouselControl, Row } from 'reactstrap';
import { items } from '../Features/fetaures';
import StatsItem from './Countanim';

const INTERVAL_TIME = 5000;
const Carol = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    React.useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, INTERVAL_TIME);
        return () => clearInterval(interval);
    });
    const slides = items.map((item, index) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={index}>
                <Row>
                    <div className="col-6">
                        <img src={item.src} style={{ objectFit: "cover", maxWidth: "100%" }} alt={item.altText} />
                    </div>
                    <div className="col-6">
                        <div className="solution_title">{item.title}</div>
                        <div className="solution_text">
                            <p>{item.text}</p>
                        </div>
                        <div className="solution_stats row hidden-xs">
                            <StatsItem stats1={item.stats1} stats2={item.stats2}
                                value1={item.value1} value2={item.value2} />
                        </div>
                    </div>
                </Row>
            </CarouselItem>
        );
    });
    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false} className='mb-5'>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    )
}

export default Carol