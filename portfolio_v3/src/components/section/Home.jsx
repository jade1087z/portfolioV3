import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="wrap">
            <header id="header" role="banner">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src="../../assets/img/logo.png" alt="" />
                        <Link to="#">
                            <h4>DEVELOPER</h4>
                        </Link>
                        <p>
                            korea, seoul <em>00:00</em>
                        </p>
                    </div>
                    <nav
                        className="herader__nav"
                        role="navigation"
                        aria-label=""
                    >
                        <ul className="menu">
                            <li>
                                <Link to="#">About</Link>
                            </li>
                            <li>
                                <Link to="#">Work</Link>
                            </li>
                            <li>
                                <Link to="#">skill</Link>
                            </li>
                            <li>
                                <Link to="#">contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main id="main" role="main">
                <section id="intro">
                    <div className="intro__inner">
                        <div className="intro__wrap">
                            <div className="intro__title">
                                <h3>
                                    FRONTEND DEVELOPER <br />I WANT TO BE
                                </h3>
                            </div>
                            <div className="intro__desc">
                                <span>
                                    도전은 언제나 두렵지만, 가장 큰 위험은
                                    위험없는 삶이다 ! 도전하는 것을 두려워하지
                                    않는 신입 프론트엔드 개발자, 김찬미입니다.
                                    누구의 인생이나 그렇듯 저 또한 지금까지
                                    도전의 연속이었습니다. 제 전공과 직업을
                                    버리고 새로운 길로 들어서기로 마음 먹었을
                                    때, 두렵지 않냐는 질문들이 많았습니다. 적은
                                    나이도 아니었고, 그동안 해왔던 것들이 있었기
                                    때문입니다. 안정적인 상태에서 새로운 도전을
                                    하는 것이 쉬운 결정은 아니었지만, 저의
                                    진정한 적성과 흥미를 찾아 더 나아가기 위해
                                    시작하게 되었습니다. 지금은 부족한 것이 많은
                                    저이지만, 끊임없이 배우고 공부할 것입니다.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
