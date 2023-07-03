import React from 'react'
import '../styles/adminnav.css';

function AdminNav() {
  return (
    <div>
      <ul className="admin-navbar-links">
        <li><a href="/admin">Admin</a></li>
        <li><a href="/businessadmin">Business Admin</a></li>
        <li><a href="/AdminAnnouncement">Create Announcement</a></li>
        <li><a href="/imagepage">Upload Image</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/accounts">Accounts</a></li>

      </ul>
    </div>
  )
}

export default AdminNav