import { css } from '@emotion/react';
import { Typography } from 'antd';
import { Link, useLocation } from 'dumi';
import * as React from 'react';
import useLocale from '../../../hooks/useLocale';
import useSiteToken from '../../../hooks/useSiteToken';
import SiteContext from '../../../theme/slots/SiteContext';
import * as utils from '../../../theme/utils';
import { GroupMask } from './Group';
import Banner0 from './Banner0';

const locales = {
  cn: {
    slogan: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
  },
  en: {
    slogan:
      'Help designers/developers building beautiful products more flexible and working with happiness',
  },
};

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    titleBase: css`
      h1& {
        font-family: AliPuHui, ${token.fontFamily};
      }
    `,
    title: css`
    h1& {
      margin-bottom: ${token.marginMD}px;
      font-weight: 900;
      font-size: 68px;
    }
  `
  };
};

export interface BannerProps {
  children?: React.ReactNode;
}

export default function Banner({ children }: BannerProps) {
  const [locale] = useLocale(locales);
  const { pathname } = useLocation();
  const { token } = useSiteToken();
  const styles = useStyle();
  const { isMobile } = React.useContext(SiteContext);

  const isZhCN = utils.isZhCN(pathname);

  return (
    <>
      <div style={{ height: 780 }} >
        <Banner0 />
      </div>
      <div style={{ position: 'relative', background: '#fff' }}>
        <img
          style={{ position: 'absolute', right: 0, top: 240, width: 240 }}
          src="https://gw.alipayobjects.com/zos/bmw-prod/b3b8dc41-dce8-471f-9d81-9a0204f27d03.svg"
          alt="Ant Design"
        />

        <GroupMask
          style={{
            textAlign: 'center',
            paddingTop: token.marginFar - 16,
            paddingBottom: token.marginFarSM,
          }}
        >
          <img
            style={{ position: 'absolute', left: isMobile ? -120 : 0, top: 0, width: 240 }}
            src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
            alt="bg"
          />
          <img
            style={{ position: 'absolute', right: isMobile ? 0 : 120, top: 0, width: 240 }}
            src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
            alt="bg"
          />

          <Typography.Title level={1} css={[styles.titleBase, styles.title]}>
            xyy
          </Typography.Title>
          <Typography.Paragraph
            style={{
              fontSize: isMobile ? token.fontSizeHeading5 - 2 : token.fontSizeHeading5,
              lineHeight: isMobile ? token.lineHeightSM : token.lineHeightHeading5,
              marginBottom: token.marginMD * 2,
              padding: isMobile ? `0 ${token.paddingLG + 2}px` : 0,
            }}
          >
            <div>{locale.slogan}</div>
          </Typography.Paragraph>
          {children}
        </GroupMask>
      </div>
    </>
  );
}
