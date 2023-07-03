import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../components/AdminNav';

function AdminAccounts() {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchAccounts = async () => {
          try {
            const response = await fetch('https://mnmuslims-api.onrender.com/api/users/');
            const data = await response.json();
            setAccounts(data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching accounts:', error);
          }
        };
    
        fetchAccounts();
      }, []);
    

  return (
    <div>
        <h2>Admin Accounts</h2>

        <AdminNav/>

        {loading ? (
        <p>Loading...</p>
      ) : (
        accounts.map((account) => (
          <div key={account._id} className="page-details">
              <p>
                <strong>username: </strong>
                {account.username}
              </p>
            <p>
              <strong>password (hashed): </strong>
              {account.password}
            </p>
          </div>
        ))
      )}

    </div>
  )
}

export default AdminAccounts