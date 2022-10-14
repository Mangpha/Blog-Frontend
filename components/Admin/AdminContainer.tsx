import { NextPage } from 'next';
import React from 'react';
import { AdminSideBar } from '../../components/Admin/AdminSideBar';
import { SEO } from '../../components/SEO';

interface IAdminProps {
  children?: React.ReactNode;
}

const AdminContainer: NextPage<IAdminProps> = ({ children }) => {
  return (
    <div className="section min-h-screen px-[5vw]">
      <SEO title="Admin" />
      <div className="grid grid-cols-5">
        <AdminSideBar />
        <div className="col-span-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminContainer;
