import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

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

        <title>평택 브레인시티 메디스파크 - 커뮤니티</title>
        <meta
          name="description"
          content="평택 브레인시티 메디스파크 커뮤니티 페이지입니다. 입주민의 편리한 일상과 여유로운 생활을 위한 다양한 커뮤니티 시설과 공간 구성을 확인하실 수 있습니다."
        />
        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크 커뮤니티, 평택 브레인시티 메디스파크 모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.locamobility.co.kr/ComplexGuide/community"
        />

        <meta
          property="og:title"
          content="평택 브레인시티 메디스파크 - 커뮤니티"
        />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크의 다양한 커뮤니티 시설과 생활 편의 공간을 확인해보세요."
        />
        <meta
          property="og:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.locamobility.co.kr/ComplexGuide/community"
        />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 커뮤니티"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크의 다양한 커뮤니티 시설과 생활 편의 공간을 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/ComplexGuide/community"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 메디스파크 - 커뮤니티",
              "description": "평택 브레인시티 메디스파크의 다양한 커뮤니티 시설과 생활 편의 공간을 확인할 수 있는 페이지입니다.",
              "url": "https://www.locamobility.co.kr/ComplexGuide/community"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="커뮤니티" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 커뮤니티
      </h1>
      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 커뮤니티 페이지입니다.
        입주민의 편리한 일상과 여유로운 생활을 위한 다양한 커뮤니티 시설과
        공간 구성을 확인하실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>일상에 여유와 만족을 더하는</div>
        <div>평택 브레인시티 메디스파크 커뮤니티</div>
      </div>

      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="평택 브레인시티 메디스파크 커뮤니티 이미지"
        onLoad={handleImageLoad}
      />

      <Footer />
    </div>
  );
};

export default ComplexGuide3;
