import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/FloorPlan/FloorPlan1/img_unit_01.jpg";

const FloorPlan1 = () => {
  const menuContents = [
		{ title: "59A㎡", url: "/FloorPlan/59A" },
		{ title: "59B㎡", url: "/FloorPlan/59B" },
		{ title: "84A㎡", url: "/FloorPlan/84A" },
		{ title: "84B㎡", url: "/FloorPlan/84B" },
		{ title: "101㎡", url: "/FloorPlan/114A" },
		// { title: "세대안내영상", url: "/FloorPlan/videos" }, // 세대안내영상 링크	
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

        <title>평택 브레인시티 메디스파크 - 평면안내</title>
        <meta
          name="description"
          content="평택 브레인시티 메디스파크 평면안내 안내 페이지입니다. 59타입 세대의 공간 구성과 평면 설계를 확인하고 라이프스타일에 맞는 주거 공간을 살펴보실 수 있습니다."
        />
        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크 59타입, 평택 브레인시티 메디스파크 평면도, 평택 브레인시티 메디스파크 모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.locamobility.co.kr/FloorPlan/59A"
        />

        <meta property="og:title" content="평택 브레인시티 메디스파크 - 평면안내" />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크 59타입 세대의 공간 구성과 평면 설계를 확인해보세요."
        />
        <meta
          property="og:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.locamobility.co.kr/FloorPlan/59A"
        />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 평면안내"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크 59타입 세대의 공간 구성과 평면 설계를 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.locamobility.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/FloorPlan/59A"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 메디스파크 - 평면안내",
              "description": "평택 브레인시티 메디스파크 59타입 세대의 공간 구성과 평면 설계를 확인할 수 있는 페이지입니다.",
              "url": "https://www.locamobility.co.kr/FloorPlan/59A"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="평면안내" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 평면안내
      </h1>
      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 평면안내 안내 페이지입니다.
        59타입 세대의 공간 구성과 평면 설계를 확인하고
        라이프스타일에 맞는 주거 공간을 살펴보실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>실용적인 공간 설계를 담은</div>
        <div>평택 브레인시티 메디스파크 59타입</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="평택 브레인시티 메디스파크 평면 안내 이미지1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
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

export default FloorPlan1;
