import { useState, useEffect } from "react";
import { adminProfile } from "../../../../../api/adminApi/api";

export default function Profile() {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await adminProfile();
        if (response.ackbool === 1) {
          setAdminData(response.message);
        }
      } catch (error) {
        console.error("Error fetching admin profile:", error);
      }
    };

    fetchAdminProfile();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  if (!adminData) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const profileDetails = [
    { label: "Birthday", value: formatDate(adminData.dob) },
    { label: "E-mail", value: adminData.email },
    { label: "Adhar No.", value: adminData.aadhaarNumber },
    { label: "Profession", value: adminData.profession },
    { label: "Address", value: adminData.address },

  ];

  return (
    <div className="rounded" id="AdminProfile">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 bg-white shadow-sm p-4 rounded">
            <div className="row">
              {/* Profile Details */}
              <div className="col-md-8">
                <h1 className="fw-bolder text-primary">{adminData.name}</h1>
                <hr />
                <div className="row">
                  {profileDetails.map((detail, index) => (
                    <div className="col-6 mb-3" key={index}>
                      <label className="form-label fw-semibold">{detail.label}</label>
                      <p>{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Profile Picture */}
              <div className="col-md-4 text-center">
                <img
                  src={adminData.profilePic}
                  alt={adminData.name}
                  className="img-fluid rounded-circle shadow-sm"
                />
              </div>
            </div>
            <div className="mt-2">
              <h3 className="fw-bolder text-warning">About Me</h3>
              <p className="text-muted">{adminData.about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
