import { useState } from "react";
import { addAdmin } from "../../../../../api/adminApi/api";
import { Link } from "react-router-dom";
export default function AddAdmin() {
  const [formData, setFormData] = useState({ image: "", name: "", nDob: new Date(), mobile: "", address: "", aadhaar: "", profession: "", email: "", password: "", rPassword: "", about: "" });
  const [uploadStatus, setUploadStatus] = useState(false);
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
    if (name === "image") setUploadStatus(false);
  };

  const uploadPhoto = () => {
    if (formData.image) {
      const data = new FormData();
      data.append("file", formData.image);
      data.append("upload_preset", "hridesh99!");
      data.append("cloud_name", "draowpiml");
      fetch('https://api.cloudinary.com/v1_1/draowpiml/image/upload', { method: 'post', body: data })
        .then(res => res.json())
        .then(data => { if (!data.error) { setPhoto(data.url); setUploadStatus(true); } })
        .catch(() => { toast.error('Failed to upload image'); });
    }
  };

  const RegisterAccount = async () => {
    const { name, nDob, mobile, address, aadhaar, profession, email, password, about } = formData;
    const response = await addAdmin({ name, email, profilePic: photo, dob: nDob, mobileNumber: mobile, address, aadhaarNumber: aadhaar, profession, about, password });
    if (response.ackbool === 1) toast.success(response.message);
  };

  return (
    <div className="rounded" id="NewAccount">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8 bg-white py-3 my-3 myshadow">
          <div className="p-2">
            <div className="text-center"><h1 className="h2 fw-bold text-gray-900 mb-4 text-primary">Create Account!</h1></div>
            <div className="form-group row g-3">
              <div className="col-md-6">
                <div className="input-group">
                  <i className="bi bi-image input-group-text"></i>
                  <input className="form-control form-control-sm py-2" id="formFileSm" type="file" name="image" onChange={handleChange} />
                  {uploadStatus ? <span>Uploaded</span> : <button className="btn btn-primary btn-small" onClick={uploadPhoto}>Upload</button>}
                </div>
              </div>
              <div className="col-md-6"><input type="text" className="form-control" name="name" onChange={handleChange} value={formData.name} placeholder="Enter Name" /></div>
              <div className="col-md-6"><small>D.O.B.</small><input type="date" className="form-control" name="nDob" onChange={handleChange} value={formData.nDob} /></div>
              <div className="col-md-6"><small>Mobile Number</small><input type="number" className="form-control" name="mobile" onChange={handleChange} value={formData.mobile} placeholder="Mobile Number" /></div>
              <div className="col-md-6"><input type="text" className="form-control" name="address" onChange={handleChange} value={formData.address} placeholder="Address" /></div>
              <div className="col-md-6"><input type="text" maxLength={12} className="form-control" name="aadhaar" onChange={handleChange} value={formData.aadhaar} placeholder="12 digit Aadhaar Number" /></div>
              <div className="col-md-6"><input type="text" className="form-control" name="profession" onChange={handleChange} value={formData.profession} placeholder="Profession" /></div>
              <div className="col-md-6"><input type="email" className="form-control" name="email" onChange={handleChange} value={formData.email} placeholder="Email" /></div>
              <div className="form-group row g-4">
                <div className="col-md-6"><input type="password" className="form-control" name="password" onChange={handleChange} value={formData.password} placeholder="Password....*" /></div>
                <div className="col-md-6"><input type="password" className="form-control" name="rPassword" onChange={handleChange} value={formData.rPassword} placeholder="Repeat Password....*" /></div>
                <div className="w-10"><textarea rows={4} className="form-control" name="about" onChange={handleChange} value={formData.about} placeholder="Write About"></textarea></div>
              </div>
              <button type="button" className="btn btn-primary w-100 my-2 py-2 rounded-pill" onClick={RegisterAccount}>Register Account</button>
            </div>
            <hr />
            <div className="text-center"><Link className="small" to="#">Forgot Password?</Link></div>
            <div className="text-center mb-3"><Link className="small" to="#">Already have an account? Login!</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
