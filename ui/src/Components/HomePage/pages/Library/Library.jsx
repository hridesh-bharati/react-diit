import React from 'react'
import Footer from '../../../Footer/Footer';

export default function Library() {
    const libraryFeatures = [
        [
            {
                icon: "bi-book-half",
                title: "Digital Resources",
                text: "Access to over 50,000 e-books, academic journals, research papers and digital learning materials."
            },
            {
                icon: "bi bi-wifi",
                title: "High-Speed WiFi",
                text: "Seamless high-speed internet connectivity throughout the library for uninterrupted learning."
            },
            {
                icon: "bi bi-laptop",
                title: "Computer Lab",
                text: "State-of-the-art computer facilities equipped with latest software and hardware for research and learning."
            },
            {
                icon: "bi bi-people",
                title: "Study Groups",
                text: "Spacious collaborative zones and discussion rooms for group studies and academic interactions."
            }
        ],
        [
            {
                icon: "bi bi-headset",
                title: "Audio Resources",
                text: "Comprehensive collection of audio books, language learning materials and educational podcasts."
            },
            {
                icon: "bi bi-printer",
                title: "Printing Services",
                text: "Advanced printing, scanning and photocopying facilities available at nominal charges."
            },
            {
                icon: "bi bi-calendar-check",
                title: "24/7 Access",
                text: "Round-the-clock access to digital resources and extended hours during examination periods."
            },
            {
                icon: "bi bi-person-video3",
                title: "Expert Support",
                text: "Dedicated team of professional librarians providing research assistance and guidance."
            }
        ]
    ];

    const generalRules = [
        "Maintain silence in the library premises",
        "Library cards are non-transferable",
        "Keep mobile phones in silent mode",
        "Handle books and equipment with care",
        "No food or drinks allowed inside",
        "Keep your belongings safely"
    ];

    const borrowingRules = [
        "Maximum 3 books can be issued at a time",
        "Books are issued for 14 days",
        "Late fee applies after due date",
        "Lost books must be replaced or compensated",
        "Reference books for in-library use only",
        "Return books in good condition"
    ];

    const statistics = [
        {
            number: "50K+",
            text: "Books Collection",
            delay: 0
        },
        {
            number: "10K+",
            text: "E-Resources",
            delay: 100
        },
        {
            number: "24/7",
            text: "Digital Access",
            delay: 200
        },
        {
            number: "500+",
            text: "Study Spaces",
            delay: 300
        }
    ];

    return (
        <div className="mx-0 px-0 pt-4">
            <div className="container-fluid mx-0 px-0">
                {/* Hero Section */}
                <div className="position-relative mb-5">
                    <div id="libraryCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="images/library/library.jpg"
                                    alt="DIIT Library"
                                    className="w-100"
                                    style={{
                                        height: "auto",
                                        minHeight: "300px",
                                        maxHeight: "800px",
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="images/vender/homepic.png"
                                    alt="DIIT Library"
                                    className="w-100"
                                    style={{
                                        height: "auto",
                                        minHeight: "300px",
                                        maxHeight: "800px",
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#libraryCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#libraryCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle text-center d-none d-lg-block diitLibrary">
                        <div className="card bg-white border-0">
                            <div className="card-body">
                                <h1 className="display-3 fw-bold text-primary bg-white mb-3">
                                    DRISHTEE LIBRARY
                                </h1>
                                <p className="text-dark mb-4 fs-5">
                                    <div>
                                        Welcome to DIIT's state-of-the-art library - your gateway to knowledge and academic excellence.
                                        Our modern facility combines traditional resources with cutting-edge digital technology to provide
                                        an optimal learning environment for students and faculty alike.
                                    </div>
                                    <a className="btn btn-primary btn-md" href="#features">
                                        Explore Resources <i className="bi bi-arrow-down"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div id="features">
                    <div className="container my-5">
                        <h2 className="text-center mb-5 fw-bolder text-primary" data-aos="fade-up">Our Library Features</h2>
                        {libraryFeatures.map((row, rowIndex) => (
                            <div className="row g-4 mb-4" key={rowIndex}>
                                {row.map((feature, index) => (
                                    <div
                                        className="col-lg-3 col-md-6"
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={100 * (rowIndex * 4 + index + 1)}
                                    >
                                        <div className="card h-100 shadow-sm hover-shadow transition-all lbCardBg">
                                            <div className="card-body text-center p-4">
                                                <div className="feature-icon bg-light border border-primary shadow shadow-sm bg-opacity-10 rounded-circle p-3 px-4 mb-4 mx-auto" style={{ width: "fit-content" }}>
                                                    <i className={`bi ${feature.icon} fs-2 text-primary`}></i>
                                                </div>
                                                <h5 className="card-title text-primary mb-3">{feature.title}</h5>
                                                <p className="card-text text-muted">{feature.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-light py-5 mb-5">
                    <div className="container">
                        <div className="row text-center g-4">
                            {statistics.map((stat, index) => (
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={stat.delay} key={index}>
                                    <h2 className="display-4 fw-bold text-primary">{stat.number}</h2>
                                    <p className="text-muted">{stat.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Library Rules Section */}
                <div className="container mb-5">
                    <h2 className="text-center mb-4 text-primary" data-aos="fade-up">Library Rules & Guidelines</h2>
                    <div className="row g-4">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-primary mb-3">General Rules</h5>
                                    <ul className="list-unstyled">
                                        {generalRules.map((rule, index) => (
                                            <li key={index} className="mb-2">
                                                <i className="bi bi-check2-circle text-success me-2"></i>
                                                {rule}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-primary mb-3">Borrowing Guidelines</h5>
                                    <ul className="list-unstyled">
                                        {borrowingRules.map((rule, index) => (
                                            <li key={index} className="mb-2">
                                                <i className="bi bi-check2-circle text-success me-2"></i>
                                                {rule}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
