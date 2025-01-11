import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registrateStudent, uploadPhoto } from "../../../api/studentApi/api";
import { getCourseList } from '../../../api/adminApi/api';
import Time from './Time';

const AdmissionForm = () => {
  const initialFormData = {
    name: "",
    fatherName: "",
    motherName: "",
    gender: "",
    aadhaar: "",
    email: "",
    address: "",
    mobileNumber: "",
    dob: "",
    course: "",
    category: "",
    otherCategory: "",
    photo: "",
    checkboxChecked: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [error, setError] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [photoPreview, setPhotoPreview] = useState("");

  useEffect(() => {
    const fetchCourseList = async () => {
      const response = await getCourseList();
      if (response.ackbool === 1) {
        setCourseList(response.message);
      } else {
        toast.error("Failed to load course list");
      }
    };
    fetchCourseList();
  }, []);

  useEffect(() => {
    const { name, fatherName, motherName, gender, aadhaar, email, address, mobileNumber, dob, course, category, checkboxChecked } = formData;
    const isAadhaarValid = aadhaar.length === 12 && /^[0-9]{12}$/.test(aadhaar);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isMobileValid = /^[0-9]\d{9}$/.test(mobileNumber);

    setSubmitEnabled(
      name && fatherName && motherName && gender &&
      isAadhaarValid &&
      isEmailValid &&
      isMobileValid &&
      address && dob && course && category && checkboxChecked
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhotoChange = async (e) => {
    const image = e.target.files[0];
    if (image) {
      if (!/\.jpe?g$/i.test(image.name)) {
        toast.error('Please upload a valid JPEG/JPG image.');
        return;
      }
      if (image.size > 50 * 1024) {
        toast.error('Image size should not exceed 50 KB.');
        return;
      }
      try {
        const response = await uploadPhoto(image);
        if (response.url) {
          setPhotoUploaded(true);
          setPhotoPreview(response.url);
          setFormData(prevData => ({ ...prevData, photo: response.url }));
        }
      } catch (error) {
        toast.error('Failed to upload photo');
      }
    } else {
      toast.error('Please select a profile photo');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await registrateStudent(formData);
      if (response.ackbool === 1) {
        toast.success(response.message);
        resetForm();
      } else {
        setError("Registration failed. Please check your details.");
      }
    } catch (error) {
      setError("Registration failed due to a server error.");
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setPhotoUploaded(false);
    setPhotoPreview("");
    setError("");
  };

  return (
    <div className="shadow pt-2 mt-4 rounded">
      <form onSubmit={handleSubmit} className='container-fluid mx-0 px-3 admission-form'>
        <h3 className="text-center pt-3"><b style={{ color: "maroon" }}>CANDIDATE REGISTRATION FORM FOR NEW ADMISSION</b></h3>
        <p className="p-0 m-0 d-flex ">
          <Time />
          <marquee behavior="alternate" className='smallText' style={{ color: "maroon" }}>ऑनलाइन पंजीकरण करने हेतु पंजीकरण फॉर्म</marquee>
        </p>
        <div className="row AdmRow">
          <label className="small mt-1">A. Student's Personal Details</label>
          <div className="row">
            <div className="col-md-5">1: Student's Name/ छात्र का नाम *</div>
            <div className="col-md-7">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Name" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">2: Father's Name/पिता का नाम *</div>
            <div className="col-md-7">
              <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="form-control" placeholder="Father's Name" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">3: Mother's Name/माता का नाम *</div>
            <div className="col-md-7">
              <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} className="form-control" placeholder="Mother's Name" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">4: Date of Birth/जन्म तिथि *</div>
            <div className="col-md-7">
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-control" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">5: Gender / लिंग *</div>
            <div className="col-md-7">
              <select name="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <label className="small mt-4">B. Contact Details</label>
          <div className="row">
            <div className="col-md-5">1: Mobile Number/मोबाइल नंबर *</div>
            <div className="col-md-7">
              <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="form-control" placeholder="Mobile Number (10 digits)" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">2: Email / ईमेल *</div>
            <div className="col-md-7">
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" required />
            </div>
          </div>
          <div className="row">
            <label className="small mt-4 mb-1">C. Course for Student's</label>
            <div className="col-md-5">1: Course / कोर्स *</div>
            <div className="col-md-7">
              <select name="course" value={formData.course} onChange={handleChange} className="form-select" required>
                <option value="">Select Course</option>
                {courseList.map(course => (
                  <option key={course._id} value={course.name}>{course.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <label className="small mb-1">D. Identification Details / पहचान विवरण *</label>
            <div className="row">
              <div className="col-md-5">1: Aadhar Card Number/आधार कार्ड संख्या *</div>
              <div className="col-md-7">
                <input type="text" name="aadhaar" minLength={12} maxLength={12} value={formData.aadhaar} onChange={handleChange} className="form-control" placeholder="Aadhaar Number (12 digits)" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">2: Category / वर्ग *</div>
              <div className="col-md-7">
                <select name="category" value={formData.category} onChange={handleChange} className="form-select" required>
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC/ST">SC/ST</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">3: Address / पता *</div>
              <div className="col-md-7">
                <textarea name="address" value={formData.address} onChange={handleChange} className="form-control" placeholder="Address" required />
              </div>
            </div>
            <div className="col-md-5">4: Upload Photo / फोटो अपलोड करें *
              <input type="file" accept="image/*" className='border-0' onChange={handlePhotoChange} required />
              <p className='small'>Only JPEG/JPG images are allowed. <br /> The maximum photo size is 50 KB.</p>            </div>
            <div className="col-md-7">
              {photoUploaded ? (
                <>
                  <img src={photoPreview} alt="Preview" className="img-fluid mt-2" width="80" />
                  <small className="text-success d-block">
                    Uploaded <i className="bi bi-check-lg"></i>
                  </small>
                </>
              ) : (
                <img src="" alt="Photo" />
              )}
            </div>

          </div>
          <div className="row ">
            <label className="small mt-2">E. Declaration / घोषणा</label>
            <div className="p-1 m-0 w-100">
              <p className="my-2 smallText">
                <input type="checkbox" name="checkboxChecked" checked={formData.checkboxChecked} onChange={handleChange} className="form-check-input" required /> I declare that all the information provided by me in this form is correct to the best of my knowledge and belief.
              </p>
              {error && <p className="text-danger text-center mt-3">{error}</p>}
            </div>
            <div className="row container text-center ">
              <div className="col-12 m-auto text-center py-2 d-flex justify-content-center">
                <button type="button" className="btn btn-primary fw-medium text-white mx-2 px-5" onClick={resetForm}> Reset </button>
                <button type="submit" disabled={!submitEnabled} className="btn fw-medium text-white mx-2 px-5" style={{ background: 'green' }}> Send </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
