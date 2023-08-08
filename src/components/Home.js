import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import Swal from 'sweetalert2';

const Home = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await Swal.fire({
            icon: 'success',
            title: 'Log Out',
            text: 'success!'
          })
            sessionStorage.removeItem('username');
            navigate('/');
          }
    return (
    <div>
    <Button className='primary' danger onClick={handleSignOut}>Sign Out</Button>
    <h1 id="title">Drum 🥁 Kit</h1>
    <div className="set">
      <button className="w drum">w</button>
      <button className="a drum">a</button>
      <button className="s drum">s</button>
      <button className="d drum">d</button>
      <button className="j drum">j</button>
      <button className="k drum">k</button>
      <button className="l drum">l</button>
    </div>
    </div>
    )
}
export default Home;