/**
 * @file index.tsx
 * @description 首页
 * @date 2023-03-20 23:02:29
 */
import { ConfigProvider } from 'antd';
import React from 'react';
import Banner from './components/Banner';

const Homepage: React.FC = () => {

  return (
    <ConfigProvider theme={{ algorithm: undefined }}>
      <section>
        <Banner></Banner>
        <div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Homepage;
