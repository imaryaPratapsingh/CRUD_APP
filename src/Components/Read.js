import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Read() {
    const [apiData, setapiData] = useState([])

     function Getdata() {
        axios.get('https://65c74f59e7c384aada6e5fe8.mockapi.io/fakedata')
        .then((responce)=>{
            setapiData(responce.data);
        }) 
    }

    function handledelete(id) {
        axios.delete(`https://65c74f59e7c384aada6e5fe8.mockapi.io/fakedata/${id}`)
        .then(()=>{
            Getdata();
        })
    }

    function setDtaToStorage(id,name,age,email) {
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
        
    }
    
   useEffect(() => {
    Getdata();
   }, [])
   
  return (
    <div className='row'>
        <div className='col-md-12'>
            <div className='mb-2 mt-2'>
                <Link to={'/create'}>
                    <button className='btn btn-primary'>Create New Data</button>
                </Link>
            </div>
            <table className='table table-bordered table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.map((iteam)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{iteam.id}</td>
                                        <td>{iteam.e_name}</td>
                                        <td>{iteam.e_age}</td>
                                        <td>{iteam.e_email}</td>
                                        <td>
                                            <Link to='./update'>
                                                <button className='btn btn-primary' onClick={()=>setDtaToStorage(iteam.id,iteam.e_name,iteam.e_age,iteam.e_email)}>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' 
                                                onClick={()=> {if(window.confirm('Are You Sure?')){handledelete(iteam.id)}}}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Read