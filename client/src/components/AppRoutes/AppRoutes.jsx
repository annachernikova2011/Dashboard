import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Orders from '../../pages/Orders/Orders';
import Users from '../../pages/Users/Users';

export default function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/orders" element={<Orders />} />

    </Routes>

  );
}
