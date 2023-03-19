import React, { useContext, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
import { Helmet, useOutlet, useSiteData } from 'dumi';
import '../../static/style';
import ConfigProvider from 'antd/es/config-provider';
import classNames from 'classnames';
import zhCN from 'antd/es/locale/zh_CN';
import SiteContext from '../../slots/SiteContext';
import Header from '../../slots/Header';
import Footer from '../../slots/Footer';
import useLocale from '../../../hooks/useLocale';
import useLocation from '../../../hooks/useLocation';
import ResourceLayout from '../ResourceLayout';
import GlobalStyles from '../../common/GlobalStyles';
import SidebarLayout from '../SidebarLayout';

const locales = {
  cn: {
    title: '君可曾见-兰陵缭乱',
    description: '君可曾见-兰陵缭乱',
  },
  en: {
    title: "title",
    description: 'description',
  },
};

const DocLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const { pathname, search, hash } = location;
  const [locale, lang] = useLocale(locales);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { direction } = useContext(SiteContext);
  const { loading } = useSiteData();

  useLayoutEffect(() => {
    if (lang === 'cn') {
      dayjs.locale('zh-cn');
    } else {
      dayjs.locale('en');
    }
  }, []);

  useEffect(() => {
    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      timerRef.current = setTimeout(() => {
        nprogressHiddenStyle.parentNode?.removeChild(nprogressHiddenStyle);
      }, 0);
    }
  }, []);

  // handle hash change or visit page hash from Link component, and jump after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) document.getElementById(decodeURIComponent(id))?.scrollIntoView();
  }, [loading, hash]);

  React.useEffect(() => {
    if (typeof (window as any).ga !== 'undefined') {
      (window as any).ga('send', 'pageview', pathname + search);
    }
    if (typeof (window as any)._hmt !== 'undefined') {
      (window as any)._hmt.push(['_trackPageview', pathname + search]);
    }
  }, [location]);

  const content = useMemo(() => {
    if (
      ['', '/'].some((path) => path === pathname) ||
      ['/index'].some((path) => pathname.startsWith(path))
    ) {
      return (
        <>
          {outlet}
          <Footer />
        </>
      );
    }
    if (pathname.startsWith('/docs/resource')) {
      return <ResourceLayout>{outlet}</ResourceLayout>;
    }
    if (pathname.startsWith('/theme-editor')) {
      return outlet;
    }
    return <SidebarLayout>{outlet}</SidebarLayout>;
  }, [pathname, outlet]);

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html
          lang={lang}
          data-direction={direction}
          className={classNames({ [`rtl`]: direction === 'rtl' })}
        />
        <title>{locale?.title}</title>
        <link
          sizes="144x144"
          href="https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"
        />
        <meta name="description" content={locale.description} />
        <meta property="og:title" content={locale?.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
        />
      </Helmet>
      <ConfigProvider direction={direction} locale={lang === 'cn' ? zhCN : undefined}>
        <GlobalStyles />
        <Header />
        {content}
      </ConfigProvider>
    </>
  );
};

export default DocLayout;
