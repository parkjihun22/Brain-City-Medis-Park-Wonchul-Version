import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
  const menuContents = [
    { title: "홍보영상", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        <title>평택 브레인시티 메디스파크 - 홍보영상</title>

        <meta
          name="description"
          content="평택 브레인시티 메디스파크의 홍보영상을 만나보세요. 브레인시티의 미래 비전, 우수한 입지환경, 브랜드 프리미엄과 단지의 가치를 영상으로 확인할 수 있습니다."
        />

        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크, 평택 브레인시티 메디스파크 홍보영상, 평택 브레인시티 메디스파크 모델하우스"
        />

        <link rel="canonical" href="https://www.locamobility.co.kr/Brand/video" />

        <meta property="og:title" content="평택 브레인시티 메디스파크 - 홍보영상" />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크의 홍보영상을 통해 브레인시티의 미래가치와 단지 프리미엄을 확인해보세요."
        />
        <meta
          property="og:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.locamobility.co.kr/Brand/video"
        />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 홍보영상"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크의 홍보영상을 통해 브레인시티의 미래가치와 단지 프리미엄을 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/Brand/video"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 메디스파크 - 홍보영상",
              "description": "평택 브레인시티 메디스파크의 홍보영상을 통해 브레인시티의 미래가치와 단지 프리미엄을 확인할 수 있습니다.",
              "url": "https://www.locamobility.co.kr/Brand/video"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="홍보영상" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 홍보영상
      </h1>

      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크의 홍보영상은 단지의 비전과 입지, 미래가치,
        브랜드 프리미엄을 보다 직관적으로 전달합니다. 브레인시티의 중심에서
        기대되는 새로운 주거가치를 영상으로 확인해보세요.
      </p>

      <div
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      >
        <div>브레인시티의 미래가치를 담은</div>
        <div>평택 브레인시티 메디스파크</div>
      </div>

      <div className={styles.videoContainer}>
        <YouTube
          videoId="jziyaoDz2Ns"
          opts={{
            width: isMobile ? "400" : "1300",
            height: isMobile ? "300" : "500",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0); // 비디오 종료 시 정지
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Brand2;
