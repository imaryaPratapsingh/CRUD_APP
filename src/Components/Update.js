import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Update() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const Navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    }, [])
     
    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://65c74f59e7c384aada6e5fe8.mockapi.io/fakedata/${id}`,{
            e_name : name,
            e_age : age,
            e_email : email
        }).then(() => {
            Navigate('/');
          })

        }
  return (
    <>
          <div className='row text-center'>
            <div className='col-md-4'>
              <div className='bg-primary p-4 text-center'>
                <h1>Update Data</h1>
              </div>
              <form onSubmit={handleUpdate}>
                <div className='form-group'>
                  <label >Enter Name :</label>
                  <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' />
                </div>
                <div className='form-group'>
                  <label >Enter AGE :</label>
                  <input type="number" placeholder='Age'value={age} onChange={(e)=>setName(e.target.value)}  className='form-control'/>
                </div> 
                <div className='form-group'>
                  <label >Enter Email :</label>
                  <input type="email" placeholder='Email' value= {email}   className='form-control'/>
                </div>
                <br />
                <div className='d-grid'>
                <input type="Submit" value ='Update' className='btn btn-primary'/>
                </div>
              </form>
              <div className='mt-2 mb-2'>
                <p>Want to See saved Data Click Here : <br />
                <Link to={'/'}>
                    <button className='btn btn-primary'>Read Data</button>
                </Link>
                </p>
              </div>
            </div>
          </div>
        </>
  )
}

export default Update