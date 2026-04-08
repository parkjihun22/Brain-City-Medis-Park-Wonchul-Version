import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
  const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
      // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
      if (window.scrollY > 200) {
        setIsImageVisible(true); // 이미지가 보이도록
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
    }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

    return () => clearTimeout(timer);
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

        <title>평택 브레인시티 메디스파크 - 브랜드소개</title>

        <meta
          name="description"
          content="평택 브레인시티 메디스파크의 브랜드와 가치를 소개합니다. 브레인시티 일반산업단지 공동 6BL에 들어서는 총 1,215세대 대단지로, 아주대병원(예정), 카이스트 평택캠퍼스(예정), 평택지제역 광역교통망 등 미래 비전을 가까이 누릴 수 있는 주거 프리미엄을 제공합니다."
        />

        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크, 평택 브레인시티 메디스파크 모델하우스, 브레인시티 메디스파크 분양, 평택 브레인시티 아파트"
        />

        <link rel="canonical" href="https://www.locamobility.co.kr/Brand/intro" />

        <meta
          property="og:title"
          content="평택 브레인시티 메디스파크 - 브랜드소개"
        />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크의 브랜드와 가치를 소개합니다. 브레인시티 공동 6BL, 총 1,215세대 규모의 미래 주거 프리미엄을 만나보세요."
        />
        <meta
          property="og:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.locamobility.co.kr/Brand/intro"
        />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 브랜드소개"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크의 브랜드와 가치를 소개합니다. 브레인시티 공동 6BL, 총 1,215세대 규모의 미래 주거 프리미엄을 만나보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/Brand/intro"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 메디스파크 - 브랜드소개",
              "description": "평택 브레인시티 메디스파크의 브랜드와 가치를 소개합니다. 브레인시티 일반산업단지 공동 6BL에 들어서는 총 1,215세대 대단지로 미래가치를 품은 주거 프리미엄을 제공합니다.",
              "url": "https://www.locamobility.co.kr/Brand/intro"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="브랜드소개" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 브랜드소개
      </h1>

      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크는 브레인시티의 미래가치를 품은 프리미엄 주거단지입니다.
        아주대병원(예정), 첨단산업 인프라, 광역교통망을 가까이 누릴 수 있는 입지 위에
        총 1,215세대 규모의 브랜드 아파트로 조성되어 새로운 라이프스타일을 제안합니다.
      </p>

      <div
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      >
        <div>브레인시티의 미래가치를 가까이</div>
        <div>평택 브레인시티 메디스파크</div>
      </div>

      <img
        className={`${styles.image} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="평택 브레인시티 메디스파크 브랜드소개 이미지"
      />

      <Footer />
    </div>
  );
};

export default Brand1;
