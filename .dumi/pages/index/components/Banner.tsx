import * as React from 'react';
import { css } from '@emotion/react';
import { Link, useLocation } from 'dumi';
import useLocale from '../../../hooks/useLocale';
import useSiteToken from '../../../hooks/useSiteToken';
import SiteContext from '../../../theme/slots/SiteContext';
import { GroupMask } from './Group';
import Banner0 from './Banner0';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import GitHubButton from 'react-github-button';
import BannerSVGAnim from './BannerSVGAnim';

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
  `,
    bannertitlewrapper: css`
    width: 50%;
    max-width: 480px;
    height: 245px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 8%;
    margin: auto;
    z-index: 1;
    > * {
      will-change: transform;
    }
    h1 {
      font-family: "Futura", "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 36px;
      margin: 12px 0;
      text-align: left;
    }
    p {
      font-size: 20px;
    }
    .button-wrapper {
      .github-btn {
        display: flex;
        height: 28px;
        
        .gh-btn {
          height: 28px;
          border-radius: 4px;
          background: rgba(243, 243, 243, 1);
          background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(243, 243, 243, 1) 100%);
          border: 1px solid #ebedf0;
          align-items: center;
          display: flex;
          padding: 0 12px;
          font-size: 13px;
          box-sizing: border-box;
          margin-right: 8px;

          &:hover {
            color: @primary-color;
          }
          .gh-ico {
              width: 14px;
              height: 14px;
              margin-right: 8px;
              background: url(https://github-image-xyy.oss-cn-beijing.aliyuncs.com/github.svg) 0 0/100% 100% no-repeat;
          }
        }
        .gh-count {
          height: 28px;
          line-height: 22px;
          background: #fff;
          border: 1px solid #ebedf0;
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 13px;
          box-sizing: border-box;
        }
      }
    }
    .title-line {
      transform: translateX(-64px);
      animation: bannerTitleLine 3s ease-in-out 0s infinite;
    }
  `,
    bannerimagewrapper: css`
    width: 45%;
    max-width: 598px;
    height: 324px;
    position: absolute;
    right: 8%;
    margin: auto;
    top: 0;
    bottom: 0;
    opacity: 0;
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

  return (
    <>
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <Banner0 />
      </div>

      <div style={{ position: 'relative', background: '#fff', height: 520 }}>
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
          <div className="banner-wrapper1" style={{ position: 'relative', background: '#fff', height: 300 }}>
            <QueueAnim
              key="QueueAnim"
              type={['bottom', 'top']}
              leaveReverse
              component="i"
              delay={300}
              css={styles.bannertitlewrapper}>

              <div key="line" className="title-line-wrapper">
                <div className="title-line" style={{ transform: 'translateX(-64px)' }} />
              </div>

              <h1 key="h1">开始我们之间的故事</h1>

              <div key="button" className="button-wrapper">
                <GitHubButton
                  key="github-button"
                  type="stargazers"
                  namespace="xyy0313"
                  repo="xyy0313.github.io"
                />
              </div>
            </QueueAnim>

            <TweenOne animation={{ opacity: 1 }} css={styles.bannerimagewrapper}>
              <BannerSVGAnim />
            </TweenOne>
          </div>
          {children}
        </GroupMask>
      </div>
    </>
  );
}
