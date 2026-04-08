import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "계약안내문", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 표시 여부를 변경하는 로직 추가 (예시)
  useEffect(() => {
    const handleImageVisibility = () => {
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려갔을 때
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener("scroll", handleImageVisibility);

    return () => {
      window.removeEventListener("scroll", handleImageVisibility);
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

        <title>평택 브레인시티 메디스파크 - 계약서류안내</title>

        <meta
          name="description"
          content="평택 브레인시티 메디스파크 계약서류 안내 페이지입니다. 당첨자 계약 체결 시 필요한 준비서류와 제출방법을 확인하실 수 있습니다."
        />

        <meta
          name="keywords"
          content="평택 브레인시티 메디스파크, 브레인시티 메디스파크 계약서류, 평택 브레인시티 메디스파크 모델하우스"
        />

        <link rel="canonical" href="https://www.locamobility.co.kr/BusinessGuide/documents" />

        <meta property="og:title" content="평택 브레인시티 메디스파크 - 계약서류안내" />
        <meta
          property="og:description"
          content="평택 브레인시티 메디스파크 계약 체결 시 필요한 준비서류와 제출방법을 확인하세요."
        />
        <meta property="og:image" content="https://www.locamobility.co.kr/Main1.png" />
        <meta property="og:url" content="https://www.locamobility.co.kr/BusinessGuide/documents" />
        <meta property="og:site_name" content="평택 브레인시티 메디스파크" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 메디스파크 - 계약서류안내"
        />
        <meta
          name="twitter:description"
          content="평택 브레인시티 메디스파크 계약 체결 시 필요한 준비서류와 제출방법을 확인하세요."
        />
        <meta name="twitter:image" content="https://www.locamobility.co.kr/Main1.png" />
        <meta
          name="twitter:url"
          content="https://www.locamobility.co.kr/BusinessGuide/documents"
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "평택 브레인시티 메디스파크 - 계약서류안내",
            "description": "평택 브레인시티 메디스파크 계약 체결 시 필요한 준비서류 안내 페이지입니다.",
            "url": "https://www.locamobility.co.kr/BusinessGuide/documents"
          }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="계약서류안내" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 - 계약서류안내
      </h1>

      <p className={styles.screenReaderOnly}>
        평택 브레인시티 메디스파크 계약 체결을 위한 준비서류 안내 페이지입니다.
        당첨자 계약 시 필요한 서류와 제출 방법을 확인하실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>계약을 위한 준비를 한눈에</div>
        <div>평택 브레인시티 메디스파크 계약서류 안내</div>
      </div>

      {/* 이미지에 isImageVisible 상태 적용 */}
      <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="평택 브레인시티 메디스파크 계약서류안내-image1"
      />

      <Footer />
    </div>
  );
};

export default BusinessGuide2;
