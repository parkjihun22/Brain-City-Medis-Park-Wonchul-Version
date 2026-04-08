import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "프리미엄", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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

        <title>평택 브레인시티 메디스파크 - 프리미엄</title>
        <meta
          name="description"
          content="평택 브레인시티 메디스파크 프리미엄 페이지입니다. 브레인시티의 미래가치와 입지 프리미엄, 설계 특화, 생활 편의성을 통해 차별화된 주거가치를 확인하실 수 있습니다."
        />
        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크 프리미엄, 평택 브레인시티 메디스파크 모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.locamobility.co.kr/LocationEnvironment/primium"
        />

        <meta
          property="og:title"
          content="평택 브레인시티 메디스파크 - 프리미엄"
        />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크의 입지 프리미엄과 설계 특화, 차별화된 주거가치를 확인해보세요."
        />
        <meta
          property="og:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.locamobility.co.kr/LocationEnvironment/primium"
        />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 프리미엄"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크의 입지 프리미엄과 설계 특화, 차별화된 주거가치를 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/LocationEnvironment/primium"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 메디스파크 - 프리미엄",
              "description": "평택 브레인시티 메디스파크의 입지 프리미엄과 설계 특화, 차별화된 주거가치를 확인할 수 있는 페이지입니다.",
              "url": "https://www.locamobility.co.kr/LocationEnvironment/primium"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 프리미엄
      </h1>
      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 프리미엄 페이지입니다.
        브레인시티의 미래가치와 입지 프리미엄, 설계 특화, 생활 편의성을 통해
        차별화된 주거가치를 확인하실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>차별화된 가치가 모인 자리</div>
        <div>평택 브레인시티 메디스파크 프리미엄</div>
      </div>

      <img
        src={page1}
        className={styles.image3}
        alt="평택 브레인시티 메디스파크 프리미엄 이미지"
      />
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
