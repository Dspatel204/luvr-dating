import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/pixelbinio.png";
import coupleChatingImg from "../Assets/images/homeImg.png";
import playStore from "../Assets/images/google-play.png";
import appStore from "../Assets/images/apple-logo.png";
import boyImg from "../Assets/images/image1.png";
import girlImg from "../Assets/images/image2.png";
import coupleImg from "../Assets/images/image3.png";
import phoneGirl from "../Assets/images/image4.png";
import teamImg from "../Assets/images/image5.png";
import businessImg from "../Assets/images/image6.png";
import testingImg from "../Assets/images/image7.png";
import trendImg from "../Assets/images/chart.png";
import investment from "../Assets/images/applaunch.png";
import pieChartRightImg from "../Assets/images/image9.png";
import pieChart from "../Assets/images/pichart.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <section id="landingSection">
        <div className="logo_tagline">
          <img src={logo} alt="logo" />
          <h1 className="tagline">
            The Next Generation Social Media <br />
            Platform for Dating
          </h1>
        </div>
        <div className="appDownloadSection">
          <div className="coupleChatingImg">
            <img src={coupleChatingImg} alt="coupleChatingImg" />
          </div>
          <div className="rightDownloadSection">
            <h1 className="appName">
              <span className="pinkClr"> Luvr </span> Dating App
            </h1>
            <p>
              Meet your match <br /> with us
            </p>
            <div className="googleAppDownloadBtns">
              <div className="downloadBtn">
                <img src={playStore} alt="playStore" />
                <div className="playStoreText">
                  <Link target="blank" to="https://play.google.com/store/">
                    <p>GET IT ON</p>
                    <p>Google Play</p>
                  </Link>
                </div>
              </div>
              <div className="downloadBtn">
                <img src={appStore} alt="appStore" />
                <div className="playStoreText">
                  <Link target="blank" to="https://www.apple.com/in/app-store/">
                    <p>Download on the</p>
                    <p>App Store</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="datingAppFeaturesSection">
        <div className="datingAppFeaturesSectionContainer">
          <div className="leftSection">
            <img className="boyImg" src={boyImg} alt="boyImg" />
            <img
              className="positionAbsolute girlImg"
              src={girlImg}
              alt="girlImg"
            />
          </div>
          <div className="rightSection">
            <h1 className="pr">
              Dating <span className="pinkClr">App</span>
              <div className="datingAppLine"></div>
            </h1>
            <div className="features">
              <div className="textFeature">
                <div className="hexagon">1</div>
                <div className="arrow">
                  <span></span>{" "}
                </div>
                <span className="absolute">
                  FIRST-EVER LIVE FEED ON A DATING APP
                </span>
              </div>
              <div className="textFeature">
                <div className="hexagon">2</div>
                <div className="arrow">
                  <span></span>
                </div>
                <span className="absolute">SCHEDULED SPEED DATES</span>
              </div>
              <div className="textFeature">
                <div className="hexagon">3</div>
                <div className="arrow">
                  <span></span>
                </div>
                <span className="absolute">DIVERSE LOCATIONS</span>
              </div>
              <div className="textFeature">
                <div className="hexagon">4</div>
                <div className="arrow">
                  <span></span>
                </div>
                <span className="absolute">FOR EVERYONE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="problem_pricing_section">
        <div className="problem_pricing_container">
          <div className="problem_pricing_left">
            <div className="problemTitle">
              <h2>PROBLEM AND SOLUTION</h2>
            </div>
            <p>
              The problem with current dating apps is the lack of interaction.
              Our solution is to introduce a social network live feed on a
              dating app, allowing users to connect and get to know each other
              without swiping.
            </p>
            <p>
              We are the pioneers in this industry and have the expertise to
              deliver this innovative platform. The timing is perfect as there
              is a growing demand for more engaging dating experiences.
            </p>

            <div className="problemTitle mt">
              <h2>PRICING MODEL</h2>
            </div>
            <p>
              Our pricing strategies is unique monetization approaches through
              advertising and only charging a low monthly cost.
            </p>
            <p>
              We believe in times of hardship the first subscriptions that
              people will cancel are all the expensive ones.
            </p>
          </div>

          <div className="problem_pricing_right_Image">
            <img src={coupleImg} alt="coupleImg" />
          </div>
        </div>
      </section>
      <section id="InvestmentOpportunitySection">
        <div className="investmentContainer">
          <div className="investmentLeft">
            <img src={investment} alt="investment" />
          </div>
          <div className="investmentRight">
            <h1 className="pr">
              {" "}
              <span className="pinkClr">Investment</span> Opportunity
              <div className="investmentLine"></div>
            </h1>
            <p>
              Currently, we are in the process of raising a total round of
              £250,000. To ensure that our board remains manageable and
              effective, we are offering board seats to investors who contribute
              a significant amount, typically above £250,000.
            </p>
            <p>
              However, we also welcome potential investors with as little as
              £50,000 to join us on this exciting journey. If you're interested
              in getting involved, you can reach out to us through the contact
              information provided on our website or through any other
              designated communication channels.
            </p>
            <p>
              As discussions progress further, we will determine and communicate
              the closing date for the round. We can't wait to connect with
              potential investors and explore the possibilities together!
            </p>
          </div>
        </div>
      </section>
      <section id="uniqueFeaturesSection">
        <div className="uniqueFeaturesContainer">
          <div className="uniqueFeaturesLeft">
            <h1 className="pr">
              <span className="pinkClr">Unique</span> Features
              <div
                className="uniqueFeatureLine"
                style={{ left: "-141px", top: "86px" }}
              ></div>
            </h1>
            <div className="uniqueFeaturesDiv">
              <h2>LIVE FEED</h2>
              <p>
                The dating platform cultivates an open and transparent community
                where users can freely share thoughts. Interactions through
                commenting and reposting promote meaningful connections.
              </p>
              <div className="dashedCircle">
                <div className="filledCircle"></div>
              </div>
            </div>
            <div className="uniqueFeaturesDiv">
              <h2>DIVERSE</h2>
              <p>
                dontbeshy.io is a diverse platform that connects people from
                around the world, embracing individuals of all races,
                ethnicities, and religions
              </p>
              <div className="dashedCircle">
                <div className="filledCircle"></div>
              </div>
            </div>
            <div className="uniqueFeaturesDiv">
              <h2>SCHEDULED EVENTS</h2>
              <p>
                Seamless matching algorithm as users are paired with potential
                matches and can conveniently schedule speed dates at a specific
                time
              </p>
              <div className="dashedCircle">
                <div className="filledCircle"></div>
              </div>
            </div>
          </div>
          <div className="uniqueFeaturesRightImg">
            <img src={phoneGirl} alt="phoneGirl" />
          </div>
        </div>
      </section>
      <section id="teamSection">
        <div className="teamContainer">
          <div className="teamLeftImg">
            <img src={teamImg} alt="teamImg" />
          </div>
          <div className="teamrightDetails">
            <h1 className="pr">
              The <span className="pinkClr">Team</span>
              <div className="teamLine"></div>
            </h1>

            <div className="directorFounderFlex">
              <div className="designation">
                <h2>DIPESH PATEL </h2>
                <h2 className="pinkClr">DIRECTOR</h2>
                <hr className="teamHr" />
                <p>Young aspiring entrepreneur and Director at Core Tech Ltd</p>
              </div>
              <div className="designation">
                <h2>MANISH PATEL</h2>
                <h2 className="pinkClr">FOUNDER</h2>
                <hr className="teamHr" style={{ width: "70%" }} />
                <p>
                  Manish Patel specialize in strategic planning and business development,
                </p>
              </div>
            </div>
            <div className="designation consultant">
              <h2>CORE TECH LTD</h2>
              <h2 className="pinkClr">IT CONSULTANT</h2>
              <hr className="teamHr" />
              <p>
                Omer as an executive at Afiniti, has extensive experience in
                developing mobile apps and specializes in cloud computing and
                machine learning algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="businessModelSection">
        <div className="businessModelContainer">
          <div className="businessDetails">
            <h1 className="pr">
              {" "}
              <span className="pinkClr">Business</span> Model
              <div className="businessLine"></div>
            </h1>
            <div className="approach">
              <div>
                <div className="whiteCircle">
                  <div className="innerCircle">01</div>
                </div>
              </div>
              <div className="approachDetails">
                <h3>APPROACH 01</h3>
                <p>
                  Subscription: We charge £10 per month for a premium
                  subscription, which offers unlimited matches and added
                  features experience
                </p>
              </div>
            </div>
            <div className="approach ">
              <div>
                <div className="whiteCircle">
                  <div className="innerCircle">02</div>
                </div>
              </div>
              <div className="approachDetails">
                <h3>APPROACH 02</h3>
                <p>
                  Advertising: We monetize our Live Feed page through paid
                  promotions and advertisements from third-party brands. The
                  cost for advertisers will vary depending on the duration,
                  frequency, and prominence of the ads.
                </p>
              </div>
            </div>
            <div className="approach">
              <div>
                <div className="whiteCircle">
                  <div className="innerCircle">03</div>
                </div>
              </div>
              <div className="approachDetails">
                <h3>APPROACH 03</h3>
                <p>
                  Subscription: We charge £10 per month for a premium
                  subscription, which offers unlimited matches and added
                  features experience
                </p>
              </div>
            </div>
          </div>
          <div className="businessImg">
            <div>
              <img src={businessImg} alt="businessImg" />
            </div>
            <div className="businessImgText">
              <p>
                Our pricing strategies is unique monetization approaches through
                advertising and only charging a low monthly cost. We believe in
                times of hardship the first subscriptions that people will
                cancel are all the expensive ones
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="testingMarketingSection">
        <div className="testingMarketingContainer">
          <div className="tesingImg">
            <img src={testingImg} alt="testingImg" />
          </div>
          <div className="testingDetails">
            <h1 className="pr">
              <span className="pinkClr">Testing</span> & <br />
              <span className="pinkClr">Market</span> Analysis
            </h1>
            <div className="testingLineWrapper">
              <div className="testingLine"></div>
            </div>
            <p>
              We have already engaged with hundreds of people through various
              channels, including social media and face-to-face interactions
            </p>
            <p>
              All of them have expressed interest and enthusiasm for our concept
              of combining speed dating with a social network live feed, as it
              allows for more connections beyond swiping. We plan to reach a
              wider audience when we go live by implementing targeted marketing
              strategies. Specific metrics associated with our reach and
              engagement will be measured and analyzed to optimize our approach
              and maximize user acquisition.
            </p>
          </div>
        </div>
      </section>
      <section id="trendSection">
        <div className="trendContainer">
          <div className="trendDetails">
            <h1 className="pr">
              <span className="pinkClr">The</span> Market{" "}
              <span className="pinkClr">Trend</span>
            </h1>
            <div className="testingLineWrapper">
              <div className="trendLine"></div>
            </div>
            <p>
              The online dating app market is projected to witness substantial
              growth in the coming years. According to Statista, the global
              online dating market size was valued at around $3.08 billion in
              2020 and is estimated to reach approximately $3.56 billion by
              2025, with a compound annual growth rate(CAGR) of 3.8%.
            </p>
            <p>
              Additionally, the number of users in the online dating segment is
              expected to exceed 532 million by 2025, indicating a significant
              potential for revenue generation in this industry.
            </p>
          </div>
          <div className="trendImg">
            <img src={trendImg} alt="trendImg" />
          </div>
        </div>
      </section>
      <section id="pieChartSection">
        <div className="pieChartContainer">
          <div className="pieChartLeft">
            <img src={pieChart} alt="pieChart" />
          </div>
          <div className="pieChartRight">
            <div className="pieChartText">
              <p>
                WITH £250,000, WE WILL COVER EXPANDING THE APP, MARKETING,
                ENGINEERING, AND DEVELOPMENT EXPENSES OVER A ONE-YEAR PERIOD
              </p>
            </div>
            <div className="flexEnd">
              <img src={pieChartRightImg} alt="pieChartRightImg" />
            </div>
          </div>
        </div>
      </section>
      <section id="newsletterFooterSection">
        <div className="newsletterFooterContainer">
          <div className="newsletterContainer">
            <h1>Subscribe to get updates</h1>
            <p>
              Our app introduces the thrilling Speed Chat feature, By <br />
              subscribing you will get newsleter, promotions
            </p>
            <div className="input">
              <input type="text" placeholder="ENTER YOUR EMAIL" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="footerWrapper">
            <div className="footerContainer">
              <div className="footerLogoName">
                <img src={logo} alt="logo" />
                <h1>
                  Dating <br /> App
                </h1>
              </div>
              <div>
                <div className="quickLink">
                  <h2>QUICK LINK</h2>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                  </ul>
                </div>
                <div className="about">
                  <h2>ABOUT</h2>
                  <p>COMPANY NAME : CORETECH Ltd</p>
                  <p>HQ LOCATION : USA </p>
                </div>
              </div>
              <div className="contact">
                <h2>GET IN TOUCH</h2>
                <p>
                  {" "}
                  <i className="fa-solid fa-envelope"></i> datingxyzalgo.com
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-phone"></i> +91 7894560123
                </p>
              </div>
              <div>
                <div className="socialIconContainer">
                  <div className="socialIcon">
                    <Link
                      className="socialLogo"
                      target="_blank"
                      to="https://www.facebook.com/"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </div>
                  <div className="socialIcon">
                    <Link
                      className="socialLogo"
                      target="_blank"
                      to="https://www.linkedin.com/"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <div className="socialIcon">
                    <Link
                      className="socialLogo"
                      target="_blank"
                      to="https://twitter.com/"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                  </div>
                  <div className="socialIcon">
                    <Link
                      className="socialLogo"
                      target="_blank"
                      to="https://www.instagram.com/"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
                <p className="downloadText">DOWNLOAD</p>
                <div className="googleAppDownloadBtns">
                  <div className="downloadBtn">
                    <img src={playStore} alt="playStore" />
                    <div className="playStoreText">
                      <Link target="blank" to="https://play.google.com/store/">
                        <p className="fs">GET IT ON</p>
                        <p>Google Play</p>
                      </Link>
                    </div>
                  </div>
                  <div className="downloadBtn">
                    <img src={appStore} alt="appStore" />
                    <div className="playStoreText">
                      <Link
                        target="blank"
                        to="https://www.apple.com/in/app-store/"
                      >
                        <p className="fs">Download on the</p>
                        <p>App Store</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerLineContainer">
              <hr className="footerHr" />
              <p>
                Copyright <i className="fa-regular fa-copyright"></i> 2024.
                Dating solution Limited. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
