import { DownOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { FormattedMessage } from 'dumi';
import React from 'react';
import type { SharedProps } from './interface';
import { useSiteData } from 'dumi';
const useStyle = (rtl?: boolean) => ({
  smallStyle: css`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `,
  downOutlined: css`
    font-size: 9px;
    margin: ${rtl ? '-1px 2px 0 0' : '-1px 0 0 2px'};
    vertical-align: middle;
  `,
});

export const getEcosystemGroup = (): MenuProps['items'] => {
  const { pkg } = useSiteData();
  return [
    {
      label: (
        <a href={pkg.repository.url} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="app.header.menu.blogroll" />
        </a>
      ),
      key: 'charts',
    },
    {
      label: (
        <a href={pkg.repository.url} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="app.header.menu.blogroll" />
        </a>
      ),
      key: 'pro',
    },
    {
      label: (
        <a href={pkg.repository.url} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="app.header.menu.blogroll" />
        </a>
      ),
      key: 'procomponents',
    },
    {
      label: (
        <a href={pkg.repository.url} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="app.header.menu.blogroll" />
        </a>
      ),
      key: 'ng',
    }
  ]
};

const More: React.FC<SharedProps> = ({ isRTL }) => {
  const { downOutlined } = useStyle(isRTL);
  return (
    <Dropdown menu={{ items: getEcosystemGroup() }} placement="bottomRight">
      <Button size="small">
        <FormattedMessage id="app.header.menu.more" />
        <DownOutlined css={downOutlined} />
      </Button>
    </Dropdown>
  );
};

export default More;
