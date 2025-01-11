import React, { useState } from "react";
import Footer from "../Footer/Footer";

function WebDesignCard() {
  const [DiplomaData, setDiplomaData] = useState("var(--mainBgcolor)");
  const [DiplomaText, setDiplomaText] = useState("#212329");
  const [mainContainer, setmainContainer] = useState("white");
  const [DiplomaTitle, setDiplomaTitle] = useState("white");
  const [mainContainerBorder, setmainContainerBorder] = useState("transparent");

  const DarkMode = () => {
    if (DiplomaData === "black") {
      setDiplomaData("var(--mainBgcolor)");
      setDiplomaText("#212329");
      setmainContainer("white");
      setDiplomaTitle("white");
      setmainContainerBorder("transparent");
    } else {
      setDiplomaData("black");
      setDiplomaText("white");
      setDiplomaTitle("var(--MyDarkGrayBg)");
      setmainContainer("var(--MyDarkGrayBg)");
      setmainContainerBorder("1px solid gray");
    }
  };

  const courseData = [
    {
      title: "Diploma in Web Designing (DWD)",
      duration: "12 MONTHS",
      contents: [
        { category: "M.S. Office", data: ["Ms. Word", "Ms Excel", "Ms. Powerpoint", "Ms. Access"] },

      ],
    },
    // Add more courses as needed
  ];

  return (
    <>
      <div className="container-fluid my-4 pt-3" data-aos="fade-down">
        {courseData.map((course, index) => (
          <div key={index}>
            <table className="table table-bordered border-primary table-lg table-hover" style={{ border: '1px solid skyblue' }}>
              <thead>
                <tr className="headText">
                  <th colSpan="4">{course.title}</th>
                </tr>
                <tr className="my-row-color">
                  <th>CATEGORY</th>
                  <th colSpan="3">COURSE CONTENTS</th>
                </tr>
                <tr>
                  <th colSpan="2"></th>
                  <th colSpan="2" style={{ textAlign: 'center' }}>DURATION: {course.duration}</th>
                </tr>
              </thead>
              <tbody>
                {course.contents.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td className="fw-medium text-danger">{category.category}</td>
                      <td className="transparentTableData" colSpan="3">
                        <ul>
                          {category.data.map((content, contentIndex) => (
                            <li key={contentIndex}>{content}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default WebDesignCard;
