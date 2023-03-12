import React from 'react';
import { MailOutlined, SendOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Space>

        <SendOutlined />
        <a href="https://t.me/Let_anna">@Let_anna</a>
      </Space>

      <div>contact me</div>
      <Space>

        <MailOutlined />
        <div>annachernikowa2011@yandex.ru</div>
      </Space>
    </div>

  );
}
