import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "계약안내문", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

      // 이미지가 화면에 보이는지 체크 (예시)
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려가면 이미지 보이기
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
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

        <title>평택 브레인시티 메디스파크 - 분양일정</title>

        <meta
          name="description"
          content="평택 브레인시티 메디스파크의 분양일정을 안내합니다. 입주자모집공고, 특별공급, 1순위·2순위 청약, 당첨자 발표, 서류접수 및 계약일정 등 주요 분양 일정을 확인해보세요."
        />

        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크, 평택 브레인시티 메디스파크 분양일정, 평택 브레인시티 메디스파크 청약일정"
        />

        <link rel="canonical" href="https://www.locamobility.co.kr/BusinessGuide/plan" />

        <meta property="og:title" content="평택 브레인시티 메디스파크 - 분양일정" />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크의 특별공급, 청약접수, 당첨자 발표, 계약일정 등 주요 분양일정을 확인해보세요."
        />
        <meta
          property="og:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.locamobility.co.kr/BusinessGuide/plan"
        />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 분양일정"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크의 특별공급, 청약접수, 당첨자 발표, 계약일정 등 주요 분양일정을 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/BusinessGuide/plan"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 메디스파크 - 분양일정",
              "description": "평택 브레인시티 메디스파크의 입주자모집공고, 청약접수, 당첨자 발표, 서류접수 및 계약일정 등 주요 분양일정을 확인할 수 있습니다.",
              "url": "https://www.locamobility.co.kr/BusinessGuide/plan"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="분양일정" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 분양일정
      </h1>

      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크의 분양일정을 안내합니다.
        입주자모집공고일부터 특별공급, 1순위 및 2순위 청약,
        당첨자 발표, 서류접수, 정당계약까지 주요 일정을
        한눈에 확인하실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>청약의 중요한 순간을 한눈에</div>
        <div>평택 브레인시티 메디스파크 분양일정</div>
      </div>

      <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="평택 브레인시티 메디스파크 분양일정 이미지"
      />

      <Footer />
    </div>
  );
};

export default BusinessGuide2;
