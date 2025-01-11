import React from 'react';

const cardData = [
    {
        imageUrl: "images/icon/projector.png",
        title: "Live Projects",
        text: "To work on real-time projects.",
        duration: 300,
        id: 'liveA',
    },
    {
        imageUrl: "images/icon/trainers.png",
        title: "Expert Trainers",
        text: "Learn from certified & experienced trainers.",
        duration: 600,
        id: 'liveB',
    },
    {
        imageUrl: "images/icon/course2.png",
        title: "Globally Recognized Certificates",
        text: "Our Certificates are valued by top corporates.",
        duration: 900,
        id: 'liveC',
    },
    {
        imageUrl: "images/icon/practical.gif",
        title: "Hands on Training",
        text: "100% Practical based training model.",
        duration: 1200,
        id: 'liveD',
    }
];

export default function LiveCards() {
    return (
        <div className="card-group py-5 mx-3 fixed-position" id="liveCards">
            <span className="w-100 d-block text-center h2 fw-bolder">
                <p id="LiveWork" className='textColorOne' data-aos="fade-right" data-aos-duration="1000"> WHY CHOOSE DRISHTEE </p>
                <center data-aos="fade-left" data-aos-duration="1000">
                    <small className="h6 fw-normal" >We are a modern and inviting institute perfectly suited for students, providing all educational materials here.</small>
                    <hr size="5" color="yellow" width="20%" />
                </center>
            </span>
            {cardData.map((card) => (
                <div
                    key={card.id}
                    id={card.id}
                    className="card text-center m-2 border-secondary myshadow"
                    data-aos="fade-up"
                    data-aos-duration={card.duration}
                >
                    <img
                        className="card-img-top mt-2 rounded mx-auto d-block"
                        src={card.imageUrl}
                        alt={card.title}
                        style={{ width: '70px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder" style={{ color: 'blue' }}>
                            {card.title}
                        </h5>
                        <p className="card-text">
                            {card.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
