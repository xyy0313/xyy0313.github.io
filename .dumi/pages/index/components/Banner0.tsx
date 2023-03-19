import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './util';
import { css } from '@emotion/react';

const dataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://github-image-xyy.oss-cn-beijing.aliyuncs.com/banner-content-image.png',
  },
  content: {
    className: 'banner0-content',
    children: '一个有趣的前端开发工程师',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
const useStyle = () => {
  return {
    banner: css`
    width: 100%;
    height: 100vh;
    position: relative;
    text-align: center;
    border-color: #666;
    background-image: url("https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: #fff;

    .banner0-text-wrapper {
      display: block;
      position: absolute;
      top: 20%;
      margin: auto;
      left: 0;
      right: 0;
      font-size: 14px;
      color: @template-text-color-light;
      width: 550px;
      >.queue-anim-leaving {
        position: relative !important;
      }
    }
    
    .banner0-title {
      width: 350px;
      left: 30px;
      min-height: 60px;
      margin: auto;
      display: inline-block;
      font-size: 40px;
      position: relative;
    }

    .banner0-content {
      margin-bottom: 20px;
      word-wrap: break-word;
      min-height: 24px;
    }

    .banner0-button {
      border: 1px solid #fff;
      color: #fff;
      background: transparent;
      box-shadow: 0 0 0 transparent;
      font-size: 16px;
      height: 40px;
      transition: background .45s @ease-out, box-shadow .45s @ease-out;
      &:hover {
        color: #fff;
        border-color: #fff;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 10px rgba(50, 250, 255, 0.75);
      }
      &:focus {
        color: #fff;
        border-color: #fff;
      }
      &.queue-anim-leaving {
        width: auto;
      }
    }

    .banner0-icon {
      top: 750px;
      font-size: 24px;
      position: absolute;
      left: 50%;
      margin-left: -12px;
      color: @template-text-color-light;
    }
    `,
  };
};
export default function Banner0() {
  const styles = useStyle();
  return (
    <div css={styles.banner}>
      <QueueAnim
        key="QueueAnim"
        type={['bottom', 'top']}
        delay={300}
        {...dataSource.textWrapper}
      >
        <div key="title" {...dataSource.title}>
          {typeof dataSource.title.children === 'string' &&
            dataSource.title.children.match(isImg) ? (
            <img src={dataSource.title.children} width="100%" alt="img" />
          ) : (
            dataSource.title.children
          )}
        </div>
        <div key="content" {...dataSource.content}>
          {dataSource.content.children}
        </div>
        <Button ghost key="button" {...dataSource.button}>
          {dataSource.button.children}
        </Button>
      </QueueAnim>
      <TweenOne
        animation={{
          y: '-=20',
          yoyo: true,
          repeat: -1,
          duration: 1000,
        }}
        className="banner0-icon"
        key="icon"
      >
        <DownOutlined />
      </TweenOne>
    </div >
  );
}