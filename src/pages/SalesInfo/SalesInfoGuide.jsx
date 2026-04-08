import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/guide/img_notice_01.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급정보", url: "/SalesInfo/guide" },
    // { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    // { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="청약안내" />

    <MenuBar contents={menuContents} />

    <h1 className={styles.screenReaderOnly}>
      평택 브레인시티 메디스파크 - 공급정보
    </h1>
    <p className={styles.screenReaderOnly}>
      평택 브레인시티 메디스파크 공급정보 안내 페이지입니다.
      청약 신청 절차와 유의사항, 신청 방법을 확인하실 수 있습니다.
    </p>

    <div className={styles.textBox}>
      <div>공급정보 방법을 한눈에</div>
      <div>평택 브레인시티 메디스파크 청약안내</div>
    </div>

    <img
      className={`${styles.image2} ${
        isImage2Loaded ? styles.showImage2 : ""
      }`}
      src={page1}
      alt="평택 브레인시티 메디스파크 청약안내 이미지"
      onLoad={handleImageLoad}
    />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
