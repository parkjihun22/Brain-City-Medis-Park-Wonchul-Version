import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Interior.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

// 이미지 파일을 추가해야 합니다
import page1 from "../../assets/Interior/Interior1/page1.jpg";

const Interior1 = () => {
  const menuContents = [
    { title: "59㎡", url: "/Interior/59A" },
    { title: "84㎡", url: "/Interior/84A" },
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

        <title>평택 브레인시티 메디스파크 - 인테리어</title>
        <meta
          name="description"
          content="평택 브레인시티 메디스파크 인테리어 페이지입니다. 세련된 공간 구성과 실용적인 설계를 바탕으로 한 인테리어 스타일을 확인하실 수 있습니다."
        />
        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크 인테리어, 평택 브레인시티 메디스파크 모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.locamobility.co.kr/Interior/59A"
        />

        <meta
          property="og:title"
          content="평택 브레인시티 메디스파크 - 인테리어"
        />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크 인테리어 스타일과 공간 구성을 확인해보세요."
        />
        <meta
          property="og:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.locamobility.co.kr/Interior/59A"
        />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 인테리어"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크 인테리어 스타일과 공간 구성을 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/Interior/59A"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 메디스파크 - 인테리어",
              "description": "평택 브레인시티 메디스파크 인테리어 스타일과 공간 구성을 확인할 수 있는 페이지입니다.",
              "url": "https://www.locamobility.co.kr/Interior/59A"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="인테리어" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 인테리어
      </h1>
      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 인테리어 페이지입니다.
        세련된 공간 구성과 실용적인 설계를 바탕으로 한 인테리어 스타일을
        확인하실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>세련된 감각과 실용성을 담은</div>
        <div>평택 브레인시티 메디스파크 인테리어</div>
      </div>

      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="평택 브레인시티 메디스파크 인테리어 이미지1"
        onLoad={handleImageLoad}
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 전시품목과 유상옵션이 포함된 견본주택을 촬영한 것으로
          타입별 유상옵션 적용학몽, 특화범위 및 위치는 상이하며 실제 시공시
          차이가 있을 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Interior1;
