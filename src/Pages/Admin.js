import React from 'react'
import AdminNav from '../components/AdminNav'
import '../styles/admin.css';

function Admin() {
  return (
    <div>
        <h2>Admin</h2>
        <AdminNav />
        <div className='admin-description-container'>
          <div className='admin-description'>
            <h4>Welcome to the Admin Page. Here you have access to features and functionality such as deleting posts, creating/updating announcements and registering new admins</h4>
            <h4>You can access these features by using the navigation above</h4>
          </div>
        </div>
    </div>
  )
}

export default Admin