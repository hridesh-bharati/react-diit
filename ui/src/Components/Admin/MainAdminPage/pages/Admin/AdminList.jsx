
import { useState, useEffect } from 'react';
import { getAdminList, deleteAdmin, } from '../../../../../api/adminApi/api'
export default function AdminList() {
    const [adminList, setAdminList] = useState([]);

    const fetchAdminList = async () => {
        const rspns = await getAdminList();
        if (rspns.ackbool == 1) {
            setAdminList(rspns.message);
        }
    }
    const deleteAdminViaId = async (_id) => {
        const rspns = await deleteAdmin(_id);
        if (rspns.ackbool == 1) {
            toast.success(rspns.message);
        }
    }
    useEffect(() => {
        fetchAdminList();
    }, [])
    const formatDate = (createdAt) => {
        const date = new Date(createdAt);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };
    return (
        <div className="rounded" id="AdminList">
            <div className="row myflex d-flex justify-content-center py-5">
                <div className="table-responsive ">
                    <table className='table table-hover table-bordered table-sm small table-dark diplomaTable'>
                        <tbody className='my-row-color'>
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>UIDAI NO.</th>
                                <th>Addres</th>
                                <th>Profession</th>
                                <th>Generated At</th>
                                <th>Delete</th>
                            </tr>
                            {
                                adminList && adminList.map((admin) => {
                                    return (
                                        <tr key={Math.random() + admin._id} id={admin._id}>
                                            <td ><img style={{ width: "40px" }} src={admin.profilePic} alt="Loading.." /></td>
                                            <td>{admin.name}</td>
                                            <td>{admin.email}</td>
                                            <td>{admin.mobileNumber}</td>
                                            <td>{admin.aadhaarNumber}</td>
                                            <td>{admin.address}</td>
                                            <td>{admin.profession}</td>
                                            <td>{formatDate(admin.createdAt)}</td>
                                            <td onClick={() => { deleteAdminViaId(admin._id) }}><button><i className="bi bi-trash3-fill"></i></button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
