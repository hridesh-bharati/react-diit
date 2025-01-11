import { useEffect, useState } from "react";
import { getStudentList, getAllQuery, getAllNotice, getCourseList } from "../../../../api/adminApi/api";
import StudentChart from "../../Charts/Chart"
export default function Analysis() {
  const [allStudent, setAllStudent] = useState([]);
  const [query, setQuery] = useState([]);
  const [offers, setOffers] = useState(0);
  const [courseList, setCourseList] = useState([]);

  const getStudentListHandler = async () => {
    const rspns = await getStudentList();
    if (rspns.ackbool == 1) {
      setAllStudent(rspns.message);
    }
  }
  const getAllQueryHandler = async () => {
    try {
      const rspns = await getAllQuery();
      if (rspns.ackbool == 1) {
        setQuery(rspns.message);
      }
    } catch (error) {
      throw error;
    }
  }
  const getAllNoticHandler = async () => {
    try {
      const rspns = await getAllNotice();
      if (rspns.ackbool == 1) {
        setOffers(rspns.message);
        console.log(rspns.message)
        console.log(offers)
      }
    } catch (error) {
      throw error;
    }
  }
  const getCourseListHandler = async () => {
    try {
      const rspns = await getCourseList();
      if (rspns.ackbool == 1) {
        setCourseList(rspns.message);
      }
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getStudentListHandler();
    getAllQueryHandler();
    getCourseListHandler(),
      getAllNoticHandler()
  }, [])
  return (
    <div className="tab-pane fade show active py-2" id="v-pills-home" role="tabpanel"
      aria-labelledby="v-pills-home-tab" tabIndex="0">
      <div className="mx-0 px-0">
        <div className="row mb-2 d-flex justify-content-center m-auto w-100">
          <div className="col-xl-3 col-xxl-3 col-md-6 my-2">
            <div className="widget-stat myshadow2 border-0 card bg-danger">
              <div className="card-body">
                <div className="media">
                  <span className="mx-1 bg-white">
                    <i className="bi bi-person-circle text-danger"></i>
                  </span>
                  <div className="media-body text-white">
                    <p className="mb-1">Total Students</p>
                    <h3 className="text-white">{Array.isArray(allStudent) ? allStudent.length : 'not available'}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-3 col-md-6 my-2">
            <div className="widget-stat myshadow2 border-0 card bg-warning d-flex">
              <div className="card-body">
                <div className="media">
                  <span className="mx-1">
                    <i className="fa fa-graduation-cap text-primary" aria-hidden="true"></i>
                  </span>
                  <div className="media-body text-white">
                    <p className="mb-1">Total Course</p>
                    <h3 className="text-white">{Array.isArray(courseList) && courseList.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-3 col-md-6 my-2">
            <div className="widget-stat myshadow2 border-0 card bg-voilet">
              <div className="card-body">
                <div className="media">
                  <span className="mx-1">
                    <i className="bi bi-award-fill text-voilet" aria-hidden="true"></i>
                  </span>
                  <div className="media-body text-white">
                    <p className="mb-1">Total Offers</p>
                    <h3 className="text-white">{Array.isArray(offers) && offers.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-3 col-md-6 my-2">
            <div className="widget-stat myshadow2 border-0 card bg-primary">
              <div className="card-body">
                <div className="media">
                  <span className="mx-1">
                    <i className="fa fa-comments text-primary" aria-hidden="true"></i>
                  </span>
                  <div className="media-body text-white">
                    <p className="mb-1">New Message</p>
                    <h3 className="text-white">{Array.isArray(query) ? query.length : 'not available'}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StudentChart std={allStudent} Tcourse={Array.isArray(courseList) && courseList.length} TOffer={Array.isArray(offers) ? offers.length : 0} />
    </div>
  )
}
