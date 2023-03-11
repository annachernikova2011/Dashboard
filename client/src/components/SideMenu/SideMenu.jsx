import React from 'react';
import { Menu } from 'antd';
import { AlignLeftOutlined, UserOutlined, SolutionOutlined } from '@ant-design/icons';

export default function SideMenu() {
  return (
    <Menu items={[
      {
        label: 'Dashboard',
        icon: <AlignLeftOutlined />,
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
