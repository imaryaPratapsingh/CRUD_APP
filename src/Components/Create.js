import axios from 'axios';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import{Form,Button} from 'semantic-ui-react';

    export default function Create() {
        const [Name ,setName] = useState('');
        const [Age ,setAge] = useState('');
        const [Email ,setemail] = useState('');
        const Navigate = useNavigate();

        const handleSubmit = (e) =>{
          e.preventDefault();
          axios.post('https://65c74f59e7c384aada6e5fe8.mockapi.io/fakedata',{
            e_name : Name,
            e_age : Age,
            e_email : Email
          }).then(() => {
            Navigate('/');
          })

        }
      return (
        <>
          <div className='row text-center'>
            <div className='col-md-4'>
              <div className='bg-primary p-4 text-center'>
                <h1>Create Data</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label >Enter Name :</label>
                  <input type="text" placeholder='NAME'  className='form-control' onChange={(e)=> setName(e.target.value) } />
                </div>
                <div className='form-group'>
                  <label >Enter AGE :</label>
                  <input type="number" placeholder='Age' onChange={(e)=> setAge(e.target.value) }   className='form-control'/>
                </div> 
                <div className='form-group'>
                  <label >Enter Email :</label>
                  <input type="email" placeholder='Email' onChange={(e)=> setemail(e.target.value) }   className='form-control'/>
                </div>
                <br />
                <div className='d-grid'>
                <input type="Submit" value ='submit' className='btn btn-primary'/>
                </div>
              </form>
              <div className='mt-2 mb-2'>
                <p>Want to See Saved Data Click Here : <br />
                <Link to={'/'}>
                    <button className='btn btn-primary'>Saved Data</button>
                </Link>
                </p>
              </div>
              {Name}
              <br />
              {Age}
              <br />
              {Email}
            </div>

          </div>
        </>
      )
    }
