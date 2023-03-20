/**
 * @file Logo.tsx
 * @description Logo和标题
 * @date 2023-03-20 22:25:48
 */
import { css } from '@emotion/react';
import { Link } from 'dumi';
import * as React from 'react';
import { useSiteData } from 'dumi';

const useStyle = () => {
  return {
    logo: css`
      height: 100%;
      display: flex;
      align-items:center;
      padding-left: 10px;
  
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 8px;
      }
    `,
    title: css`
      color: rgba(0, 0, 0, 0.88);
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji',sans-serif;
      line-height: 32px;
      letter-spacing: -0.18px;
      white-space: nowrap;
    `,
  };
};

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo: React.FC<LogoProps> = () => {
  const { logo, title } = useStyle();
  const { pkg } = useSiteData();
  return (
    <h1 style={{ height: 64 }}>
      <Link to="/index-cn" css={logo}>
        <img src="https://github-image-xyy.oss-cn-beijing.aliyuncs.com/github-user-logo.jpg" alt="logo" />
        <span css={title}>{pkg.author} 一个有趣的前端开发工程师</span>
      </Link>
    </h1>
  );
};

export default Logo;
