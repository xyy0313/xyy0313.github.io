import { css } from '@emotion/react';
import { Link, useLocation } from 'dumi';
import * as React from 'react';
import useSiteToken from '../../../hooks/useSiteToken';
import * as utils from '../../utils';

const useStyle = () => {
  const { token } = useSiteToken();
  const { headerHeight, colorTextHeading, fontFamily, mobileMaxWidth } = token;
  return {
    logo: css`
      height: 100%;
      display: flex;
      align-items:center;
      padding-left: 10px;
  
      img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
      }
    `,
    title: css`
      line-height: 2px;
    `,
  };
};

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo: React.FC<LogoProps> = () => {
  const { logo, title } = useStyle();
  return (
    <h1 style={{ height: 64 }}>
      <Link to="www.baidu.com" css={logo}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
        <span css={title}>web site title</span>
      </Link>
    </h1>
  );
};

export default Logo;
