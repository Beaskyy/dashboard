import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }


  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img
              className='userListImg'
              src="https://cdn.pixabay.com/photo/2021/10/13/11/31/couple-6706278__340.jpg"
              alt=""
            />
            <p>Jon Snow</p>
          </div>
        );
      }
    },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 140,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/user/" + params.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon className="userListDelete" onClick={() => handleDelete(params.id)} />
          </div>
        );
      }
    },
  ];

  

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList