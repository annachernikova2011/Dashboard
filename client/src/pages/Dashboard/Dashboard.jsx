import { Card, Space, Statistic } from 'antd';
import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined, DollarOutlined, TeamOutlined } from '@ant-design/icons';
import axios from 'axios';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const orderSum = orders.reduce((acc, el) => el.quantity + acc, 0);

  const priceSum = orders.reduce((acc, el) => el.price + acc, 0);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios('/orders')
      .then((res) => setOrders(res.data));
  }, []);
  useEffect(() => {
    axios('/users')
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div className={styles.dashboard}>
      <DashboardCard
        icon={(
          <ShoppingCartOutlined
            style={{
              fontSize: 24,
              backgroundColor: 'rgba(176, 176, 176, 0.3)',
              padding: 8,
              borderRadius: 20,
            }}
          />
)}
        title="Orders"
        value={orderSum}
      />
      <DashboardCard
        icon={(
          <TeamOutlined
            style={{
              fontSize: 24,
              backgroundColor: 'rgba(176, 176, 176, 0.3)',
              padding: 8,
              borderRadius: 20,
            }}
          />
)}
        title="Users"
        value={users.length}
      />
      <DashboardCard
        icon={(
          <DollarOutlined
            style={{
              fontSize: 24,
              backgroundColor: 'rgba(176, 176, 176, 0.3)',
              padding: 8,
              borderRadius: 20,
            }}
          />
)}
        title="Total"
        value={priceSum}
      />
    </div>
  );
}

function DashboardCard({ title, icon, value }) {
  return (
    <Card style={{ margin: '0px 10px' }}>
      <Space direction="horizontal">
        {icon}

        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
