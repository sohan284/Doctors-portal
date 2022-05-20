import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer  drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <h1 className='text-4xl text-success'>Dashboard</h1>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 bg-[#f8f8f8] text-black overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='text-doctors font-bold'><Link to="/dashboard" >My Appointments</Link></li>
      <li className='text-doctors font-bold'><Link to="myreview" >My Reviews</Link></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;