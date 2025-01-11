import React from 'react';

export default function Slider() {
    const carouselItems = [
        { src: './images/vender/pooja.jpg', alt: 'DIIT' },
        { src: './images/vender/lab2.jpg', alt: 'DIIT' },
    ];

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000">
                        <img src={item.src} className="d-block w-100 img-fluid h-100" alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}
