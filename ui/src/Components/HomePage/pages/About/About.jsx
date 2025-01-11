import React, { useState } from "react";

import CounterCard from './CounterCard';
import Marquee from "../../Marquee"
import Footer from "../../../Footer/Footer";
function About() {
    const [activeButton, setActiveButton] = useState(0);
    const establishmentYearsFormatted = '2004';
    const listItemsData = [
        { icon: 'images/icon/homeTwo.png', label: 'Address', value: 'Paragpur Road near Ramharsh inter collage' },
        { icon: 'bi bi-map-fill text-success mx-1', label: 'City', value: 'Nichlaul' },
        { icon: 'bi bi-globe-central-south-asia text-success mx-1', label: 'District', value: 'Maharajganj' },
        { icon: 'bi bi-pin-map-fill text-danger mx-1', label: 'State', value: 'Uttar Pradesh' },
        { icon: 'bi bi-journal-text text-primary mx-1', label: 'Library', value: 'Yes' },
        { icon: 'bi bi-journal-text text-primary mx-1', label: 'Wify', value: 'Yes' },
        { icon: 'bi bi-bank2 fw-bold text-success mx-1', label: 'Establishment(in year)', value: `${establishmentYearsFormatted}` }
    ];
    const Vision4 = `
            Our vision is to improve the youth of rural India, by giving them
            high-class training atmosphere at a very affordable cost.
            We work on the philosophy of “SHINING INDIA”, which can be achieved by developing only rural India.
            We are committed to impart quality computer education among the students.`
    const accordionData = [
        {
            id: 'collapseOne',
            title: 'Our Aim',
            content: 'We will provide high and quality education for all very nominal fees to maximize the value of our students, as well as the community we serve in the progress and development of the nation.',
        },
        {
            id: 'collapseTwo',
            title: 'Our Mission 1',
            content: 'To be leader in the development of I.T. oriented Quality education and Training and be the Country’s premier organization for examination and certification in the field of IT.',
        },
        {
            id: 'collapseThree',
            title: 'Our Mission 2',
            content: 'All the training programs are designed and developed by the team of experts as per the industry input. It is our utmost satisfaction when our student is placed in various companies and firms on completion of his/her.',
        },
        {
            id: 'collapseFour',
            title: 'Our Mission 3',
            content: Vision4,
        }
    ];

    const affiliationsData = [
        {
            image: 'images/thumbnails/Certificate1.png',
            textColor: '#000',
            text: 'Registered under the society Act, 21, 1860, Government Of India having registration number 72/2013-2014.',
            duration: 400,
            className: 'affitioansA'
        },
        {
            image: 'images/thumbnails/Certificate3.png',
            textColor: '#000',
            text: 'Certified by BSI, as an ISO 9001:2008 certified institute, for International standard, quality training, having Certificate number MSYS/0485/15.',
            duration: 700,
            className: 'affitioansB'
        },
        {
            image: 'images/thumbnails/Certificate2.png',
            textColor: '#000',
            text: 'Registered with NIELIT(Formerly DOEACC) Government Of India, as a facilitation centre for CCC & O level. Having accreditation number 88001055.',
            duration: 1000,
            className: 'affitioansC'
        },
        {
            image: 'images/thumbnails/Certificate4.png',
            text: 'Registered with Algol Universal Trust, as an associate of KSOU(Karnataka state open university), for University level courses such as, BCA,BSC,MCA,MSC, etc, having reg. No. - KSOU/AUT/980-A',
            duration: 1300,
            className: 'affitioansD'
        }
    ];


    return (
        <div className="mt-4 pt-3">
            <div style={{ borderRadius: '0 !important' }}>
                <div className="row m-0 p-0 border-0 shadow-sm" id="aboutBg">
                    <div className="col-12 py-2">
                        <div className="row">
                            <div className="col-md-6 pb-2" data-aos="zoom-in" data-aos-duration="700">
                                <img src="images/vender/main.jpg" className="w-100 p-0 m-0 border border-0" alt="DIIT" />
                            </div>
                            <div className="col-md-6 px-4 " data-aos="zoom-in" data-aos-duration="700">
                                <h3 className="pt-1 fw-bolder" id='dText'>Drishtee Institute Information Of Technology</h3>
                                <small style={{ color: 'green' }}>A Complete I.T. Institute.</small>
                                <p className="CeoText" data-aos="zoom-in" data-aos-duration="900">
                                    <span className="text-danger">Drishtee Institute Of Information Technology </span> In
                                    Nichlaul Is One Of The Leading Businesses In The Computer I.T Training Institutes. Also
                                    Known For Computer Training Institutes, Computer Training Institutes For
                                    CCC, PGDCA, C Programming, C++, Python, HTML, CSS,
                                    Bootstrap, JavaScript, W3-CSS, SASS, JQuery, PHP, VB.NET, Hardware Networking,
                                    Software Development, Web Development and Much More.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission and Vision Section */}
                <div className="card-group border-0 m-0 p-0 my-2">
                    <div className="card rounded-0 border-0 mx-1 shadow-sm bg-transparent">
                        <div className="card-body m-0 p-0" data-aos="fade-down" data-aos-duration="300">
                            <ol className="list-group border-0 list-group-numbered">
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-start" id="MissionLeft1">
                                    <div className="me-auto">
                                        <div className="fw-bold text-primary">
                                            <span className="px-1">Our Vision</span>
                                        </div>
                                        <span className="m-0 p-0 CeoText">{Vision4}</span>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-start" id="MissionLeft2">
                                    <div className="me-auto border-0">
                                        <div className="fw-bold text-primary">
                                            <span className="px-1">Our Mission</span>
                                        </div>
                                        <p className="m-0 p-0 CeoText">DIIT is committed to impart Professional education by inculcating three basic values
                                            among the youth-----“Building National Character, quality education and developing Management Skills”.
                                            <span className="text-danger">We believe in doing & learning.</span>
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="card rounded-0 border-0 mx-1 shadow-sm" id='MissionRight'>
                        <div className="card-body">
                            <h5 className="card-title text-primary">THE REASONS ARE HERE………………………….</h5>
                            <p className="m-0 p-0 CeoText" data-aos="fade-down">
                                An ISO 9001:2008 Certified institute by BSI.
                                Online examination facility and quick result.
                                Training on Live project.
                                High-class technology.
                                Hi-tech lab.
                                Govt. recognize institute.
                                Affordable fees.
                                Free bags, books, and I-cards to each admission.
                                Monthly test facility, to understand the grasping power of students.
                                Tie-ups with Global companies.
                                Microsoft certified courses and study materials.
                                Conducted by well-experienced I.T. professionals.
                                100 % job-oriented Courses.
                                Free English speaking and personality development class.
                                Classes by well-experienced and qualified trainers.
                                …………………………. & many more reasons to Join Drishtee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card rounded-0 border-0 mx-1 shadow-sm bg-transparent">
                <div className="card-body" data-aos="fade-down" data-aos-duration="500">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <img src="images/vender/office.jpg" className="w-100 mb-3" alt="Office Space" />
                                   
                                </div>
                                <div className="col-12">
                                    <h5 className="text-primary">State-of-the-Art Computer Lab</h5>
                                    <p className="CeoText">
                                        Our modern computer laboratory is equipped with the latest hardware and software, providing students with hands-on experience in a professional environment.
                                    </p>
                                    <h5 className="text-primary">Learning Environment</h5>
                                    <p className="CeoText">
                                        At DIIT, we believe in creating an optimal learning environment that combines theoretical knowledge with practical application. Our infrastructure is designed to support both individual and collaborative learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="text-primary">Student Facilities</h5>
                                    <p className="CeoText">
                                        We provide comprehensive facilities to ensure students have everything they need for effective learning. This includes high-speed internet, digital resources, and dedicated study areas for both individual and group work.
                                    </p>
                                    <h5 className="text-primary">Professional Office Environment</h5>
                                    <p className="CeoText">
                                        Students learn in a professional office-like atmosphere that simulates real-world working conditions. Our facilities include dedicated spaces for group projects, individual study, and practical training sessions.
                                    </p>
                                </div>
                                <img src="images/vender/lab.jpg" className="w-100 mb-3" alt="Computer Lab" />
                                {/* <img src="images/vender/theory.jpg" className="w-100 mb-3" alt="Computer Lab" /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Section */}
            <div className="row p-0 m-0">
                <div className="col-md-8 m-0 p-0">
                    <div className="card m-2 rounded border-0">
                        <div className="accordion bg-white shadow-sm">
                            {accordionData.map((item, index) => (
                                <div key={index} className="accordion-item border-0" id='Accordion1'>
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button rounded-0 ${activeButton === index ? 'bg-primary text-white' : 'bg-white'}`}
                                            type="button"
                                            onClick={() => setActiveButton(index)}
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${item.id}`}
                                            aria-controls={item.id}
                                        >
                                            {item.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={item.id}
                                        className={`accordion-collapse collapse ${activeButton === index ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Basic Information Section */}
                <div className="col-md-4 m-0 p-0">
                    <div className="card m-2 shadow-sm rounded rounded-0 border-0" id="MyCardBg">
                        <div className="card-header rounded-0 fs-4" style={{ background: "var(--d-blue)" }}>
                            <div className="fw-bold text-white">
                                <i className="bi bi-card-list fst-normal text-uppercase text-warning"></i> Basic Information:
                            </div>
                        </div>
                        <ul className="list-group list-group-flush text-start small basicStuctureShadow">
                            {listItemsData.map((item, index) => (
                                <li key={index} className={`list-group-item transparentTableData text-success ps-1 `} data-aos="fade-right">
                                    {item.icon.includes('bi') ? (
                                        <i className={item.icon}></i>
                                    ) : (
                                        <img src={item.icon} width="20px" alt="" />
                                    )}
                                    {item.label}: <span className='px-1'>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Affiliations Section */}
            <div className="container-fluid mt-4 py-4">
                <div className="row m-auto">
                    <div className="w-100 text-center">
                        <h2 style={{ color: 'red' }}>Our Affiliations</h2>
                        <p className="pb-0 mb-0" style={{ color: 'orangered' }}>Drishtee is registered under the following organization.</p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 pt-0 mt-0 row-cols-sm-1 g-2">
                        {affiliationsData.map((affiliation, index) => (
                            <div key={index} className="col">
                                <div className={`p-0 m-0 shadow-sm p-1 border-0 ${affiliationsData.className}`} id="affiliations">
                                    <img src={affiliation.image} data-aos="fade-up" data-aos-duration="1200" className="card-img-top" alt="Affiliation" />
                                    <div className="card-body border-0 p-0 p-2 m-0">
                                        <p className="card-text text-success CeoText lh-base">
                                            <small data-aos="fade-down" data-aos-duration={affiliation.duration}>
                                                {affiliation.text}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CounterCard text={establishmentYearsFormatted} />
            <Footer />
        </div>


    );
}

export default About;
