import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import introCard from "../../assets/img/intro__card.png";
import banner01 from "../../assets/img/banner01.png";
import banner02 from "../../assets/img/banner02.png";
import banner03 from "../../assets/img/banner03.png";
import banner04 from "../../assets/img/banner04.png";
import cordCard from "../../assets/img/code__card.png";
import proj01 from "../../assets/img/proj01.png";
import proj02 from "../../assets/img/proj02.png";
import proj03 from "../../assets/img/proj03.png";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseOut = () => {
        setHoveredIndex(null);
    };
    const menuItems = ["about", "Work", "skill", "contact"];
    // hover + toggle 메뉴 =>

    const [isOpen, setIsOpen] = useState(null);
    const toggle = (index) => {
        setIsOpen(index === isOpen ? null : index);
    };
    //  work list item toggle

    // 스크롤 이벤트
    const [bgColor, setBgColor] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const section = document.querySelectorAll(".work__item");
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <= sectionTop + sectionHeight
            ) {
                if (scrollPosition - sectionTop > 500) {
                    setBgColor("red");
                } else {
                    setBgColor("white");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="wrap">
            <header id="header" role="banner">
                <div className="header__inner">
                    <div className="header__img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header__logo">
                        <Link to={"#"}>
                            <h4>DEVELOPER</h4>
                        </Link>
                        <p>
                            korea, seoul <em>00:00</em>
                        </p>
                    </div>
                    <nav
                        className={`header__nav ${isExpanded ? "show" : ""}`}
                        role="navigation"
                        aria-controls="primary-menu"
                        aria-expanded={isExpanded ? "true" : "false"}
                    >
                        <ul className="menu">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={"#"}
                                        style={{
                                            color:
                                                hoveredIndex === index
                                                    ? "#22242a"
                                                    : hoveredIndex !== null
                                                    ? "#eaeaea"
                                                    : "#22242a",
                                        }}
                                        onMouseOver={() =>
                                            handleMouseOver(index)
                                        }
                                        onMouseOut={handleMouseOut}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div
                        className="header__nav__mobile"
                        id="headerToggle"
                        aria-controls="primary-menu"
                        aria-expanded={isExpanded ? "true" : "false"}
                        role="button"
                        onClick={handleToggle}
                    >
                        <span></span>
                    </div>
                </div>
            </header>

            <main id="main" role="main">
                <section id="intro">
                    <div className="intro__inner">
                        <div className="intro__wrap">
                            <div className="intro__title">
                                <img src={introCard} alt="" />
                                FRONTEND DEVELOPER <br />I WANT TO BE.
                            </div>
                            <div className="intro__desc">
                                도전은 언제나 두렵지만, 가장 큰 위험은 위험없는
                                삶이다 ! 도전하는 것을 두려워하지 않는 신입
                                프론트엔드 개발자, 김찬미입니다. 누구의 인생이나
                                그렇듯 저 또한 지금까지 도전의 연속이었습니다.
                                제 전공과 직업을 버리고 새로운 길로 들어서기로
                                마음 먹었을 때, 두렵지 않냐는 질문들이
                                많았습니다. 적은 나이도 아니었고, 그동안 해왔던
                                것들이 있었기 때문입니다. 안정적인 상태에서
                                새로운 도전을 하는 것이 쉬운 결정은 아니었지만,
                                저의{" "}
                                <em>
                                    진정한 적성과 흥미를 찾아 더 나아가기 위해
                                    시작하게 되었습니다.
                                </em>{" "}
                                지금은 부족한 것이 많은 저이지만, 끊임없이
                                배우고 공부할 것입니다.{" "}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="slide">
                    <div className="slider__wrap">
                        <div className="slider s1">
                            <div className="img">
                                <img src={banner01} alt="" />
                            </div>
                        </div>
                        <div className="slider s2">
                            <div className="img">
                                <img src={banner02} alt="" />
                            </div>
                        </div>
                        <div className="slider s3">
                            <div className="img">
                                <img src={banner03} alt="" />
                            </div>
                        </div>
                        <div className="slider s4">
                            <div className="img">
                                <img src={banner04} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="project">
                    <div className="project__wrap">
                        <div className="wrap">
                            <div className="icon">
                                <div class="arrow">
                                    <FaArrowRight className="arrow__icon" />
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <h2 className="text__main">
                                FROM COMPLEX CHALLENGES TO COLLOABRATIVE
                                PARTNERSHIPS
                            </h2>
                            <div className="project__flexBox">
                                <div className="leftFlex"></div>
                                <div className="righrFlex">
                                    <p className="desc__title">
                                        가장 큰 위험은 위헙없는 삶이다 !
                                    </p>

                                    <p>
                                        {" "}
                                        도전하는 것을 두려워하지 않는 신입
                                        프론트엔드 개발자, 김찬미입니다. 누구의
                                        인생이나 그렇듯 저 또한 지금까지 도전의
                                        연속이었습니다. 제 전공과 직업을 버리고
                                        새로운 길로 들어서기로 마음 먹었을 때,
                                        두렵지 않냐는 질문들이 많았습니다. 적은
                                        나이도 아니었고, 그동안 해왔던 것들이
                                        있었기 때문입니다. 안정적인 상태에서
                                        새로운 도전을 하는 것이 쉬운 결정은
                                        아니었지만, 저의 진정한 적성과 흥미를
                                        찾아 더 나아가기 위해 시작하게
                                        되었습니다. 지금은 부족한 것이 많은
                                        저이지만, 끊임없이 배우고 공부할
                                        것입니다.
                                    </p>
                                    <div className="project__more">
                                        <Link to={"#"}>
                                            <p> Let’s work together </p>{" "}
                                            <FaArrowRight className="arrow__icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* teamProject */}

                <section id="work">
                    <div className="work__inner">
                        <div className="work__wrap">
                            <div className="work__title">
                                <img src={cordCard} alt="" />
                                FRONTEND
                                <br />
                                WORK LIST
                            </div>
                            <div className="work__flexBox">
                                <div className="leftFlex"></div>
                                <div className="rightFlex">
                                    <p className="title underline">
                                        나의 작업리스트!
                                    </p>
                                    <p>
                                        도전하는 것을 두려워하지 않는 신입
                                        프론트엔드 개발자, 김찬미입니다. 누구의
                                        인생이나 그렇듯 저 또한 지금까지 도전의
                                        연속이었습니다. 제 전공과 직업을 버리고
                                        새로운 길로 들어서기로 마음 먹었을 때,
                                        두렵지 않냐는
                                    </p>
                                    <p className="underline">React, Node.</p>
                                </div>
                            </div>
                            <div className="work__list">
                                <div
                                    className="work__item w1"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    <div className="num">1.</div>
                                    <div className="item__wrap">
                                        <div className="item__title">
                                            From complex challenges to
                                            collaborative partnerships
                                        </div>
                                        <div className="item__img">
                                            <img src={proj01} alt="proj01" />
                                        </div>
                                        <div className="item__desc">
                                            {[...Array(2)].map((_, index) => (
                                                <div
                                                    className="desc__wrap"
                                                    onClick={() =>
                                                        toggle(index)
                                                    }
                                                    key={index}
                                                >
                                                    <div className="flex__desc">
                                                        <span>Discovery</span>
                                                        {isOpen === index ? (
                                                            <FaPlus className="icon__plus" />
                                                        ) : (
                                                            <FaPlus className="icon__plus close" />
                                                        )}
                                                    </div>
                                                    <div
                                                        className={`hidden__desc ${
                                                            isOpen === index
                                                                ? "expand"
                                                                : "collapse"
                                                        }`}
                                                    >
                                                        asd
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="work__item w2">
                                    <div className="num">2.</div>
                                    <div className="item__wrap">
                                        <div className="item__title">
                                            From complex challenges to
                                            collaborative partnerships
                                        </div>
                                        <div className="item__img">
                                            <img src={proj02} alt="proj01" />
                                        </div>
                                        <div className="item__desc">
                                            {[...Array(2)].map((_, index) => (
                                                <div
                                                    className="desc__wrap"
                                                    onClick={() =>
                                                        toggle(index)
                                                    }
                                                    key={index}
                                                >
                                                    <div className="flex__desc">
                                                        <span>Discovery</span>
                                                        {isOpen === index ? (
                                                            <FaPlus className="icon__plus" />
                                                        ) : (
                                                            <FaPlus className="icon__plus close" />
                                                        )}
                                                    </div>
                                                    <div
                                                        className={`hidden__desc ${
                                                            isOpen === index
                                                                ? "expand"
                                                                : "collapse"
                                                        }`}
                                                    >
                                                        asd2
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="work__item w3">
                                    <div className="num">3.</div>
                                    <div className="item__wrap">
                                        <div className="item__title">
                                            From complex challenges to
                                            collaborative partnerships
                                        </div>
                                        <div className="item__img">
                                            <img src={proj03} alt="proj01" />
                                        </div>
                                        <div className="item__desc">
                                            {[...Array(2)].map((_, index) => (
                                                <div
                                                    className="desc__wrap"
                                                    onClick={() =>
                                                        toggle(index)
                                                    }
                                                    key={index}
                                                >
                                                    <div className="flex__desc">
                                                        <span>Discovery</span>
                                                        {isOpen === index ? (
                                                            <FaPlus className="icon__plus" />
                                                        ) : (
                                                            <FaPlus className="icon__plus close" />
                                                        )}
                                                    </div>
                                                    <div
                                                        className={`hidden__desc ${
                                                            isOpen === index
                                                                ? "expand"
                                                                : "collapse"
                                                        }`}
                                                    >
                                                        asd3
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* work */}

                <section id="profile">
                    <div className="profile__inner">
                        <div className="left">
                            <div className="profile__img"></div>
                        </div>
                        <div className="right">
                            <div className="contents__wrap">
                                <div className="contents c1">
                                    <p className="num">01.</p>
                                    <div className="contents__text">
                                        <p className="contents__title">
                                            What do you think makes front-end
                                            development attractive?
                                        </p>
                                        <p className="contents__desc">
                                            프론트엔드의 영역은 코드와 디자인이
                                            만나는 독특한 공간이기에, 웹 개발에
                                            있어 프론트엔드가 할 수 있는 일이
                                            정말 많다고 생각합니다. 그만큼
                                            부딪혀야 할 일이 많아 험난할 것이라
                                            예상되지만 개발의 전반적인 부분을
                                            담당할 수 있다는 점 때문에, 한
                                            켠으로는 설레는 일이라 생각됩니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="contents c2">
                                    <p className="num">02.</p>
                                    <div className="contents__text">
                                        <p className="contents__title">
                                            What do you think makes front-end
                                            development attractive?
                                        </p>
                                        <p className="contents__desc">
                                            프론트엔드의 영역은 코드와 디자인이
                                            만나는 독특한 공간이기에, 웹 개발에
                                            있어 프론트엔드가 할 수 있는 일이
                                            정말 많다고 생각합니다. 그만큼
                                            부딪혀야 할 일이 많아 험난할 것이라
                                            예상되지만 개발의 전반적인 부분을
                                            담당할 수 있다는 점 때문에, 한
                                            켠으로는 설레는 일이라 생각됩니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="contents c3">
                                    <p className="num">03.</p>
                                    <div className="contents__text">
                                        <p className="contents__title">
                                            What do you think makes front-end
                                            development attractive?
                                        </p>
                                        <p className="contents__desc">
                                            프론트엔드의 영역은 코드와 디자인이
                                            만나는 독특한 공간이기에, 웹 개발에
                                            있어 프론트엔드가 할 수 있는 일이
                                            정말 많다고 생각합니다. 그만큼
                                            부딪혀야 할 일이 많아 험난할 것이라
                                            예상되지만 개발의 전반적인 부분을
                                            담당할 수 있다는 점 때문에, 한
                                            켠으로는 설레는 일이라 생각됩니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile__more">
                                <Link to={"#"}>
                                    <p>Let’s work together</p>
                                    <FaArrowRight className="arrow__icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
