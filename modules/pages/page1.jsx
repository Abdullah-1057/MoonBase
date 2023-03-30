import React from "react";
import AstronautImage from "../assets/astronaut.png";
import commet from "../assets/Comet.png";
import Image from "next/image";
import style from "./Page1.module.css";
import arrow from "../assets/arrows.png";
import image1 from "../assets/8972.png";
import image2 from "../assets/Frame143.png";
import image3 from "../assets/Frame158.png";
import left from "../assets/LeftArrow.png";
import right from "../assets/RightArrow.png";
import lowerHalf1 from "../assets/lock.png";
import coins from "../assets/coins.png";
import aster from "../assets/aster.png";
// import Eth from "../assets/Frame173.png";

  export const Page1 = () => {
    return (
      <>
        <div className={style.Frame173}>
          <div className={style.segment1Text}>
            Liquidity Locking & Team Vesting for Token Founders and Community
          </div>

          <div className={style.AstronautImage}>
            <Image
              src={AstronautImage}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className="">
            <div className={style.InnerGroup}>
              <div className={style.ArrowImage}>
                <Image src={arrow} alt="Picture of the author" className="" />{" "}
              </div>
              <div className={style.some}>$ 954,346,191.22</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
            <div className={style.InnerGroup2}>
              <div className={style.ArrowImage}>
                <Image src={arrow} alt="Picture of the author" className="" />{" "}
              </div>
              <div className={style.some}>$ 154,346,191.22</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
            <div className={style.InnerGroup3}>
              <div className={style.ArrowImage}>
                <Image src={arrow} alt="Picture of the author" className="" />{" "}
              </div>
              <div className={style.some}>$ 52,640</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
            <div className={style.InnerGroup4}>
              <div className={style.ArrowImage}>
                <Image src={arrow} alt="Picture of the author" className="" />{" "}
              </div>
              <div className={style.some}>$ 954,346,191.22</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
            <div className={style.InnerGroup5}>
              <div className={style.ArrowImage}>
                <Image src={arrow} alt="Picture of the author" className="" />{" "}
              </div>
              <div className={style.some}>$ 954,346,191.22</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
            <div className={style.InnerGroup6}>
              <div className={style.ArrowImage}>
                <Image src={arrow} alt="Picture of the author" className="" />{" "}
              </div>
              <div className={style.some}>$ 954,346,191.22</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
          </div>

        {/* <div className={style.Group233}>
            <div className={style.InnerGroup}>
              <div className={style.some}>$ 154,346,191.22</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
          </div>
          <div className={style.Group234}>
            <div className={style.InnerGroup}>
              <div className={style.some}>$ 52,640</div>
              <div className={style.Trading}>Total Trading Volume</div>
            </div>
          </div> */}
        {/* <div className={style.circleDiv1}>
            <div className={style.circleDiv2}>
              <div className={style.circleDiv3}></div>
            </div>
          </div>
          <div className={style.line}>
           
          </div>
          <div className={style.CommetImage}>
            <Image
              src={commet}
              alt="Picture of the author"
              className=""
            />{" "}
          </div> */}
      </div>

      <div className={style.Frame170}>
        <div className={style.MainHeading}></div>
        <div className={style.TableHeadName}>Name</div>
        <div className={style.TableHead2}>Blockchain</div>
        <div className={style.TableHead3}>Liquidity Locked</div>
        <div className={style.TableHead4}>PROJECT TOKENS LOCKED</div>
        <div className={style.TableHead5}>VALUELOCKED</div>
        <div className={style.TableHead6}>NEXTUNLOCK</div>
        <div className={style.TableHead7}>ACTION</div>

        <div></div>

        <div className={style.Row1}>
          <div className={style.Frame148}>
            <div className={style.ImageMask}>
              <div className={style.NameImg}>
                <div className={style.CircularImage}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={style.CircularImage}
                  />{" "}
                </div>
              </div>
            </div>
            <div className={style.Text1}>
              SNFTS <div className={style.Text2}>Seedify NFT Space</div>
            </div>
          </div>
          <div className={style.EthImage}>
            <Image src={image2} alt="Picture of the author" className="" />{" "}
          </div>
          <div className={style.Percentage}>
            <div className={style.PercentageInner}>0%</div>
            {/* <div className={}></div> */}
          </div>
          <div className={style.ProjectToken}>
            <Image
              src={image3}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className={style.ValueLocked}>
            <div className={style.Value}>$ 691,625,010.06</div>
          </div>
          <div className={style.MonthLock}>
            <div className={style.MonthValue}>7 months</div>
          </div>
          <div className={style.ViewLock}>
            <div className={style.ViewValue}>View</div>
          </div>
        </div>

        <div className={style.Row2}>
          <div className={style.Frame148}>
            <div className={style.ImageMask}>
              <div className={style.NameImg}>
                <div className={style.CircularImage}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={style.CircularImage}
                  />{" "}
                </div>
              </div>
            </div>
            <div className={style.Text1}>
              SNFTS <div className={style.Text2}>Seedify NFT Space</div>
            </div>
          </div>
          <div className={style.EthImage}>
            <Image src={image2} alt="Picture of the author" className="" />{" "}
          </div>
          <div className={style.Percentage}>
            <div className={style.PercentageInner}>0%</div>
            {/* <div className={}></div> */}
          </div>
          <div className={style.ProjectToken}>
            <Image
              src={image3}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className={style.ValueLocked}>
            <div className={style.Value}>$ 691,625,010.06</div>
          </div>
          <div className={style.MonthLock}>
            <div className={style.MonthValue}>7 months</div>
          </div>
          <div className={style.ViewLock}>
            <div className={style.ViewValue}>View</div>
          </div>
        </div>

        <div className={style.Row3}>
          <div className={style.Frame148}>
            <div className={style.ImageMask}>
              <div className={style.NameImg}>
                <div className={style.CircularImage}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={style.CircularImage}
                  />{" "}
                </div>
              </div>
            </div>
            <div className={style.Text1}>
              SNFTS <div className={style.Text2}>Seedify NFT Space</div>
            </div>
          </div>
          <div className={style.EthImage}>
            <Image src={image2} alt="Picture of the author" className="" />{" "}
          </div>
          <div className={style.Percentage}>
            <div className={style.PercentageInner}>0%</div>
            {/* <div className={}></div> */}
          </div>
          <div className={style.ProjectToken}>
            <Image
              src={image3}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className={style.ValueLocked}>
            <div className={style.Value}>$ 691,625,010.06</div>
          </div>
          <div className={style.MonthLock}>
            <div className={style.MonthValue}>7 months</div>
          </div>
          <div className={style.ViewLock}>
            <div className={style.ViewValue}>View</div>
          </div>
        </div>

        <div className={style.Row4}>
          <div className={style.Frame148}>
            <div className={style.ImageMask}>
              <div className={style.NameImg}>
                <div className={style.CircularImage}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={style.CircularImage}
                  />{" "}
                </div>
              </div>
            </div>
            <div className={style.Text1}>
              SNFTS <div className={style.Text2}>Seedify NFT Space</div>
            </div>
          </div>
          <div className={style.EthImage}>
            <Image src={image2} alt="Picture of the author" className="" />{" "}
          </div>
          <div className={style.Percentage}>
            <div className={style.PercentageInner}>0%</div>
            {/* <div className={}></div> */}
          </div>
          <div className={style.ProjectToken}>
            <Image
              src={image3}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className={style.ValueLocked}>
            <div className={style.Value}>$ 691,625,010.06</div>
          </div>
          <div className={style.MonthLock}>
            <div className={style.MonthValue}>7 months</div>
          </div>
          <div className={style.ViewLock}>
            <div className={style.ViewValue}>View</div>
          </div>
        </div>

        <div className={style.Row5}>
          <div className={style.Frame148}>
            <div className={style.ImageMask}>
              <div className={style.NameImg}>
                <div className={style.CircularImage}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={style.CircularImage}
                  />{" "}
                </div>
              </div>
            </div>
            <div className={style.Text1}>
              SNFTS <div className={style.Text2}>Seedify NFT Space</div>
            </div>
          </div>
          <div className={style.EthImage}>
            <Image src={image2} alt="Picture of the author" className="" />{" "}
          </div>
          <div className={style.Percentage}>
            <div className={style.PercentageInner}>0%</div>
            {/* <div className={}></div> */}
          </div>
          <div className={style.ProjectToken}>
            <Image
              src={image3}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className={style.ValueLocked}>
            <div className={style.Value}>$ 691,625,010.06</div>
          </div>
          <div className={style.MonthLock}>
            <div className={style.MonthValue}>7 months</div>
          </div>
          <div className={style.ViewLock}>
            <div className={style.ViewValue}>View</div>
          </div>
        </div>

        <div className={style.Row6}>
          <div className={style.Frame148}>
            <div className={style.ImageMask}>
              <div className={style.NameImg}>
                <div className={style.CircularImage}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={style.CircularImage}
                  />{" "}
                </div>
              </div>
            </div>
            <div className={style.Text1}>
              SNFTS <div className={style.Text2}>Seedify NFT Space</div>
            </div>
          </div>
          <div className={style.EthImage}>
            <Image src={image2} alt="Picture of the author" className="" />{" "}
          </div>
          <div className={style.Percentage}>
            <div className={style.PercentageInner}>0%</div>
            {/* <div className={}></div> */}
          </div>
          <div className={style.ProjectToken}>
            <Image
              src={image3}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className={style.ValueLocked}>
            <div className={style.Value}>$ 691,625,010.06</div>
          </div>
          <div className={style.MonthLock}>
            <div className={style.MonthValue}>7 months</div>
          </div>
          <div className={style.ViewLock}>
            <div className={style.ViewValue}>View</div>
          </div>
        </div>

        <div className={style.Row7}>
          <div className={style.Frame148}>
            <div className={style.ImageMask}>
              <div className={style.NameImg}>
                <div className={style.CircularImage}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={style.CircularImage}
                  />{" "}
                </div>
              </div>
            </div>
            <div className={style.Text1}>
              SNFTS <div className={style.Text2}>Seedify NFT Space</div>
            </div>
          </div>
          <div className={style.EthImage}>
            <Image src={image2} alt="Picture of the author" className="" />{" "}
          </div>
          <div className={style.Percentage}>
            <div className={style.PercentageInner}>0%</div>
            {/* <div className={}></div> */}
          </div>
          <div className={style.ProjectToken}>
            <Image
              src={image3}
              alt="Picture of the author"
              // className={}
            />{" "}
          </div>
          <div className={style.ValueLocked}>
            <div className={style.Value}>$ 691,625,010.06</div>
          </div>
          <div className={style.MonthLock}>
            <div className={style.MonthValue}>7 months</div>
          </div>
          <div className={style.ViewLock}>
            <div className={style.ViewValue}>View</div>
          </div>
        </div>

        <div className={style.Pagination}>
          <a href="#" className={style.Slider1}>
            <Image
              src={left}
              alt="Picture of the author"
              // className={}
            />{" "}
          </a>

          <a href="#" className={style.Number1}>
            <div className={style.myActive}>1</div>
          </a>

          <a href="#" className={style.Number2}>
            2
          </a>
          <a href="#" className={style.Number3}>
            3
          </a>
          <a href="#" className={style.Number4}>
            4
          </a>
          <a href="#" className={style.Number5}>
            5
          </a>
          <a href="#" className={style.Slider2}>
            <Image
              src={right}
              alt="Picture of the author"
              // className={}
            />{" "}
          </a>
        </div>
      </div>
      <div className={style.textBottom}>
        Easy Liquidity Locking & Token Vesting{" "}
      </div>
      {/* < */}

      <div className={style.lowerHalf}>
        <div className={style.ImageLowerHalf1}>
          <Image
            src={lowerHalf1}
            alt="Picture of the author"
            // className={}
          />{" "}
        </div>
        <div className={style.CardDiv}>
          <div className={style.Card1}>
            {/* <div className={}></div> */}
            <div className={style.LiquidityLock}>Lock Liquidity</div>
            <div className={style.LiquidityLockDetails}>
              Input your liquidity tokens into a time-released vault that
              returns the tokens at a specified date.
            </div>
          </div>
        </div>

        <div className={style.ImageLowerHalf2}>
          <Image
            src={coins}
            alt="Picture of the author"
            // className={}
          />{" "}
        </div>
        <div className={style.CardDiv2}>
          <div className={style.Card1}>
            {/* <div className={}></div> */}
            <div className={style.LiquidityLock}>Lock Liquidity</div>
            <div className={style.LiquidityLockDetails}>
              Input your liquidity tokens into a time-released vault that
              returns the tokens at a specified date.
            </div>
          </div>
        </div>

        <div className={style.ImageLowerHalf3}>
          <Image
            src={aster}
            alt="Picture of the author"
            // className={}
          />{" "}
        </div>
        <div className={style.CardDiv3}>
          <div className={style.Card1}>
            {/* <div className={}></div> */}
            <div className={style.LiquidityLock}>Lock Liquidity</div>
            <div className={style.LiquidityLockDetails}>
              Input your liquidity tokens into a time-released vault that
              returns the tokens at a specified date.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
