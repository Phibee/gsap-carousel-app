import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { gsap } from "gsap";

// import required modules

import { ReactComponent as SVGSlide1 } from "../../assets/svgpath_shape2.svg";
import { ReactComponent as SVGSlide2 } from "../../assets/isometric_fastrax.svg";
import { ReactComponent as SVGSlide3 } from "../../assets/infographics_reports_and_charts.svg";

export default function Carousel() {
      React.useEffect(() => {
            LoadSlide1();
      }, []);

      const LoadSlide1 = React.useCallback(() => {
            gsap.fromTo(
                  ".slide1_path1",
                  {
                        x: 320,
                        y: 420,
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        x: 280,
                        y: 350,
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide1_path2",
                  {
                        x: 700,
                        y: 620,
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        x: 785,
                        y: 685,
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide1_path3",
                  {
                        x: 520,
                        y: 470,
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        x: 520,
                        y: 370,
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide1_path4",
                  {
                        x: 675,
                        y: 510,
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        x: 755,
                        y: 430,
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide1_path5",
                  {
                        x: 685,
                        y: 530,
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        x: 795,
                        y: 530,
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide1_path6",
                  {
                        x: 220,
                        y: 570,
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        x: 120,
                        y: 655,
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide1_info1",
                  {
                        translateY: "-5px",
                        ease: "power2.inOut",
                        repeat: -1,
                        duration: 0.8,
                        yoyo: true,
                  },
                  {
                        translateY: "-25px",
                        ease: "power2.inOut",
                        repeat: -1,
                        duration: 1,
                        yoyo: true,
                        rotate: -2,
                  }
            );

            gsap.fromTo(
                  ".slide1_info2",
                  {
                        translateY: "-5px",
                        ease: "power2.inOut",
                        repeat: -1,
                        duration: 0.8,
                        yoyo: true,
                  },
                  {
                        translateY: "-20px",
                        ease: "power2.inOut",
                        repeat: -1,
                        duration: 1,
                        yoyo: true,
                  }
            );
      }, []);

      const LoadSlide2 = React.useCallback(() => {
            gsap.fromTo(
                  ".slide2_paths",
                  {
                        opacity: 0,
                        transformOrigin: "center",
                        translateY: "115px",
                  },
                  {
                        opacity: 1,
                        translateY: "150px",
                        delay: 0.5,
                        ease: "power2.inOut",
                  }
            );

            gsap.fromTo(
                  ".slide2_lines",
                  {
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        opacity: 1,
                        delay: 1,
                  }
            );

            gsap.fromTo(
                  ".slide2_path1",
                  {
                        translateY: "85px",
                        ease: "power2.inOut",
                        repeat: -1,
                        duration: 0.8,
                        yoyo: true,
                  },
                  {
                        translateY: "65px",
                        ease: "power2.inOut",
                        repeat: -1,
                        duration: 1,
                        yoyo: true,
                  }
            );

            gsap.fromTo(
                  ".slide2_path2",
                  {
                        opacity: 0,
                        transformOrigin: "center",
                        translateY: "-15px",
                  },
                  {
                        opacity: 1,
                        delay: 1.2,
                        translateY: "15px",
                  }
            );
      }, []);

      const LoadSlide3 = React.useCallback(() => {
            gsap.fromTo(
                  ".slide3_path1",
                  {
                        x: -60,
                        y: -190,
                        opacity: 0,
                        rotate: 40,
                        transformOrigin: "center",
                  },
                  {
                        x: -100,
                        y: -225,
                        opacity: 1,
                        rotate: 0,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_path2",
                  {
                        x: 150,
                        y: -205,
                        opacity: 0,
                        transformOrigin: "center",
                        rotate: -80,
                  },
                  {
                        x: 190,
                        y: -255,
                        opacity: 1,
                        rotate: 0,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_path3",
                  {
                        x: -25,
                        y: 20,
                        opacity: 0,
                        transformOrigin: "center",
                        rotate: 80,
                  },
                  {
                        x: -115,
                        y: 45,
                        opacity: 1,
                        rotate: 0,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_info1",
                  {
                        translateY: "345px",
                        translateX: "555px",
                        ease: "power2.inOut",
                        opacity: 0,
                  },
                  {
                        translateY: "345px",
                        translateX: "575px",
                        ease: "power2.inOut",
                        delay: 0.8,
                        opacity: 1,
                        duration: 1,
                  }
            );

            gsap.fromTo(
                  ".slide3_info2",
                  {
                        translateY: "0px",
                        translateX: "-80px",
                        ease: "power2.inOut",
                        opacity: 0,
                  },
                  {
                        translateY: "0px",
                        translateX: "-90px",
                        ease: "power2.inOut",
                        opacity: 1,
                        delay: 0.8,
                        duration: 1,
                  }
            );

            gsap.fromTo(
                  ".slide3_info3",
                  {
                        ease: "power2.inOut",
                        opacity: 0,
                        scale: 0.9,
                        transformOrigin: "center",
                  },
                  {
                        ease: "power2.inOut",
                        opacity: 1,

                        scale: 1,
                        transformOrigin: "center",
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_mini1",
                  {
                        translateY: "360px",
                        translateX: "580px",
                        ease: "power2.inOut",
                        opacity: 0,
                        transformOrigin: "center",
                  },
                  {
                        translateY: "320px",
                        translateX: "680px",
                        ease: "power2.inOut",
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_mini2",
                  {
                        translateY: "300px",
                        translateX: "490px",
                        ease: "power2.inOut",
                        opacity: 0,
                        rotate: -100,
                        transformOrigin: "center",
                  },
                  {
                        translateY: "260px",
                        translateX: "510px",
                        ease: "power2.inOut",
                        opacity: 1,
                        transformOrigin: "center",
                        rotate: 0,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_mini3",
                  {
                        translateY: "380px",
                        translateX: "290px",
                        ease: "power2.inOut",
                        opacity: 0,
                        transformOrigin: "center",
                        rotate: 90,
                  },
                  {
                        translateY: "340px",
                        translateX: "250px",
                        ease: "power2.inOut",
                        transformOrigin: "center",
                        rotate: 0,
                        opacity: 1,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_mini4",
                  {
                        translateY: "335px",
                        ease: "power2.inOut",
                        opacity: 0,
                        transformOrigin: "center",
                        rotate: 0,
                  },
                  {
                        translateY: "285px",
                        ease: "power2.inOut",
                        opacity: 1,
                        transformOrigin: "center",
                        rotate: 0,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_mini5",
                  {
                        translateY: "550px",
                        translateX: "600px",
                        ease: "power2.inOut",
                        opacity: 0,
                        transformOrigin: "center",
                        rotate: 90,
                  },
                  {
                        translateY: "580px",
                        translateX: "650px",
                        ease: "power2.inOut",
                        opacity: 1,
                        transformOrigin: "center",
                        rotate: 0,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );

            gsap.fromTo(
                  ".slide3_mini6",
                  {
                        ease: "power2.inOut",
                        opacity: 0,
                        transformOrigin: "center",
                        rotate: 30,
                  },
                  {
                        ease: "power2.inOut",
                        opacity: 0.2,
                        rotate: 0,
                        delay: 0.5,
                        duration: 0.5,
                  }
            );
      }, []);

      return (
            <>
                  <Swiper
                        pagination={{
                              dynamicBullets: true,
                        }}
                        speed={800}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        onActiveIndexChange={(e) => {
                              if (e.activeIndex === 0) {
                                    LoadSlide1();
                              } else if (e.activeIndex === 1) {
                                    LoadSlide2();
                              } else if (e.activeIndex === 2) {
                                    LoadSlide3();
                              }
                        }}
                        autoplay={{
                              delay: 4500,
                              disableOnInteraction: false,
                        }}
                  >
                        <SwiperSlide>
                              <SVGSlide1
                                    style={{ transform: "translateY(-50px)" }}
                              />

                              <div
                                    style={{
                                          position: "absolute",
                                          bottom: 250,
                                          color: "white",
                                          fontFamily: "Roboto",
                                          fontSize: "1.5em",
                                    }}
                              >
                                    Inventory and Asset Management
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <SVGSlide2 />
                              <div
                                    style={{
                                          position: "absolute",
                                          bottom: 250,
                                          color: "white",
                                          fontFamily: "Roboto",
                                          fontSize: "1.5em",
                                    }}
                              >
                                    Data Management and Statistical Analysis
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <SVGSlide3
                                    style={{ transform: "translateY(-50px)" }}
                              />
                              <div
                                    style={{
                                          position: "absolute",
                                          bottom: 250,
                                          color: "white",
                                          fontFamily: "Roboto",
                                          fontSize: "1.5em",
                                    }}
                              >
                                    Data Reports and Downloadable Charts
                              </div>
                        </SwiperSlide>
                  </Swiper>
            </>
      );
}
