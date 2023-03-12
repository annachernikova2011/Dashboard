import React from 'react';
import { Menu } from 'antd';
import { LineChartOutlined, UserOutlined, SolutionOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function SideMenu() {
  const navigate = useNavigate();
  return (
    <Menu
      onClick={(item) => navigate(item.key)}
      items={[
        {
          label: 'Dashboard',
          icon: <LineChartOutlined />,
          key: '/',
        },
        {
          label: 'Orders',
          icon: <SolutionOutlined />,
          key: '/orders',
        },
        {
          label: 'Users',
          icon: <UserOutlined />,
          key: '/users',
        },
      ]}
    />
  );
}
