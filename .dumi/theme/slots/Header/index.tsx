import { GithubOutlined, MenuOutlined } from '@ant-design/icons';
import { ClassNames, css } from '@emotion/react';
import { Col, Modal, Popover, Row, Select } from 'antd';
import classNames from 'classnames';
import { useLocation, useSiteData } from 'dumi';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import useLocale from '../../../hooks/useLocale';
import useSiteToken from '../../../hooks/useSiteToken';
import * as utils from '../../utils';
import { getThemeConfig, ping } from '../../utils';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import type { SharedProps } from './interface';
import Logo from './Logo';
import More from './More';
import Navigation from './Navigation';
import SwitchBtn from './SwitchBtn';

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;

const useStyle = () => {
  const { token } = useSiteToken();
  const searchIconColor = '#ced4d9';

  return {
    header: css`
      position: relative;
      z-index: 10;
      max-width: 100%;
      background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadowTertiary};

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: ${searchIconColor};
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: ${searchIconColor};
          }
        }

        .dumi-default-search-shortcut {
          color: ${searchIconColor};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `,
    menuRow: css`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `,
    popoverMenu: {
      width: 300,

      [`${token.antCls}-popover-inner-content`]: {
        padding: 0,
      },
    },
  };
};

const SHOULD_OPEN_ANT_DESIGN_MIRROR_MODAL = 'ANT_DESIGN_DO_NOT_OPEN_MIRROR_MODAL';

function disableAntdMirrorModal() {
  window.localStorage.setItem(SHOULD_OPEN_ANT_DESIGN_MIRROR_MODAL, 'true');
}

function shouldOpenAntdMirrorModal() {
  return !window.localStorage.getItem(SHOULD_OPEN_ANT_DESIGN_MIRROR_MODAL);
}

interface HeaderState {
  menuVisible: boolean;
  windowWidth: number;
  searching: boolean;
}

// ================================= Header =================================
const Header: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);
  const [, lang] = useLocale();
  console.log("获取语言配置", lang);
  
  /**
   *  获取站点配置数据:
   *  pkg: 项目的 package.json 数据
   *  demos: 项目全量的 demo 数据
   *  components: 项目全量的组件数据（如果只需要单独获取这一份数据，请使用 useAtomAssets）
   *  locales: 项目的 locales 配置
   *  themeConfig: 用户从 .dumirc.ts 传入的 themeConfig
   *  loading: 当前页面的加载状态，由于默认启用路由按需加载，所以切换路由时会有 loading 的过程
   */
  const { pkg } = useSiteData();
  console.log("pkg", pkg);

  const themeConfig = getThemeConfig();
  const [headerState, setHeaderState] = useState<HeaderState>({
    menuVisible: false,
    windowWidth: 1400,
    searching: false,
  });
  const { direction, isMobile, updateSiteConfig } = useContext<SiteContextProps>(SiteContext);
  const pingTimer = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { pathname, search } = location;
  const style = useStyle();
  const handleHideMenu = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, menuVisible: false }));
  }, []);
  const onWindowResize = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, windowWidth: window.innerWidth }));
  }, []);
  const handleShowMenu = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, menuVisible: true }));
  }, []);
  const onMenuVisibleChange = useCallback((visible: boolean) => {
    setHeaderState((prev) => ({ ...prev, menuVisible: visible }));
  }, []);
  /**
   * @description 阅读方式切换事件，从左往右还是从右往左
   */
  const onDirectionChange = () => {
    updateSiteConfig({ direction: direction !== 'rtl' ? 'rtl' : 'ltr' });
  };

  useEffect(() => {
    handleHideMenu();
  }, [location]);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    pingTimer.current = ping((status) => {
      if (status !== 'timeout' && status !== 'error') {
        if (
          window.location.host !== 'ant-design.antgroup.com' &&
          shouldOpenAntdMirrorModal()
        ) {
          Modal.confirm({
            title: '提示',
            content: '内网用户推荐访问国内镜像以获得极速体验～',
            okText: '🚀 立刻前往',
            cancelText: '不再弹出',
            closable: true,
            zIndex: 99999,
            onOk() {
              window.open('https://ant-design.antgroup.com', '_self');
              disableAntdMirrorModal();
            },
            onCancel() {
              disableAntdMirrorModal();
            },
          });
        }
      }
    });
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (pingTimer.current) {
        clearTimeout(pingTimer.current);
      }
    };
  }, []);

  /**
   * @description 版本切换事件
   */
  const handleVersionChange = useCallback((url: string) => {
    window.open(url);
  }, []);

  /**
   * @description 中英文切换
   */
  const onLangChange = useCallback(() => {
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.slice(currentProtocol.length);
    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search).pathname,
      );
  }, [location]);

  const nextDirectionText = useMemo<string>(
    () => (direction !== 'rtl' ? 'RTL' : 'LTR'),
    [direction],
  );

  const getDropdownStyle = useMemo<React.CSSProperties>(
    () => (direction === 'rtl' ? { direction: 'ltr', textAlign: 'right' } : {}),
    [direction],
  );

  const { menuVisible, windowWidth, searching } = headerState;
  console.log("pkg", pkg);

  const docVersions: Record<string, string> = {
    [pkg.version]: pkg.version,
    ...themeConfig.docVersions,
  };
  const versionOptions = Object.keys(docVersions).map((version) => ({
    value: docVersions[version],
    label: version,
  }));

  const isHome = ['', 'index', 'index-cn'].includes(pathname);
  const isZhCN = lang === 'cn';
  const isRTL = direction === 'rtl';
  let responsive: null | 'narrow' | 'crowded' = null;
  if (windowWidth < RESPONSIVE_XS) {
    responsive = 'crowded';
  } else if (windowWidth < RESPONSIVE_SM) {
    responsive = 'narrow';
  }

  const headerClassName = classNames({
    clearfix: true,
    'home-header': isHome,
  });

  const sharedProps: SharedProps = {
    isZhCN,
    isRTL,
    isClient,
  };

  const navigationNode = (
    <Navigation
      key="nav"
      {...sharedProps}
      responsive={responsive}
      isMobile={isMobile}
      directionText={nextDirectionText}
      onLangChange={onLangChange}
      onDirectionChange={onDirectionChange}
    />
  );

  let menu = [
    navigationNode,
    // 版本切换
    <Select
      key="version"
      className="version"
      size="small"
      defaultValue={pkg.version}
      onChange={handleVersionChange}
      dropdownStyle={getDropdownStyle}
      dropdownMatchSelectWidth={false}
      getPopupContainer={(trigger) => trigger.parentNode}
      options={versionOptions}
    />,
    // 更多
    <More key="more" {...sharedProps} />,
    // 语言切换
    <SwitchBtn
      key="lang"
      onClick={onLangChange}
      value={utils.isZhCN(pathname) ? 1 : 2}
      label1="中"
      label2="En"
      tooltip1="中文 / English"
      tooltip2="English / 中文"
    />,
    // 阅读方向
    <SwitchBtn
      key="direction"
      onClick={onDirectionChange}
      value={direction === 'rtl' ? 2 : 1}
      label1={
        <img
          src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6k0CTJA-HxUAAAAAAAAAAAAADrJ8AQ/original"
          alt="direction"
        />
      }
      tooltip1="LTR"
      label2={
        <img
          src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SZoaQqm2hwsAAAAAAAAAAAAADrJ8AQ/original"
          alt="LTR"
        />
      }
      tooltip2="RTL"
      pure
    />,
    // github 地址
    <a
      key="github"
      href="https://github.com/xyy0313/xyy0313.github.io.git"
      target="_blank"
      rel="noreferrer"
    >
      <SwitchBtn value={1} label1={<GithubOutlined />} tooltip1="Github" label2={null} pure />
    </a>,
  ];

  if (windowWidth < RESPONSIVE_XS) {
    menu = searching ? [] : [navigationNode];
  } else if (windowWidth < RESPONSIVE_SM) {
    menu = searching ? [] : menu;
  }

  const colProps = isHome
    ? [{ flex: 'none' }, { flex: 'auto' }]
    : [
      { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
      { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
    ];

  return (
    <header css={style.header} className={headerClassName}>
      {isMobile && (
        <ClassNames>
          {({ css: cssFn }) => (
            <Popover
              overlayClassName={cssFn(style.popoverMenu)}
              placement="bottomRight"
              content={menu}
              trigger="click"
              open={menuVisible}
              arrow={{ arrowPointAtCenter: true }}
              onOpenChange={onMenuVisibleChange}
            >
              <MenuOutlined className="nav-phone-icon" onClick={handleShowMenu} />
            </Popover>
          )}
        </ClassNames>
      )}
      <Row style={{ flexFlow: 'nowrap', height: 64 }}>
        <Col {...colProps[0]}>
          <Logo {...sharedProps} location={location} />
        </Col>
        <Col {...colProps[1]} css={style.menuRow}>
          <div className="nav-search-wrapper">
            <DumiSearchBar />
          </div>
          {!isMobile && menu}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
