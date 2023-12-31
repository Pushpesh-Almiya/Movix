import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./style.scss";
import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import CircleRating from "../circleRating/CircleRating";
import Img from "../../components/lazyLoadImage/Img";
import dayjs from "dayjs";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";

function Carousel({ data, loading,endPoint,title }) {
  // console.log(data)
  const navigate = useNavigate()
  //to get any div in DOM use useRef
  const carouselContainer = useRef();
  // console.log(carouselContainer.current)
  const { url } = useSelector((state) => state.home);
  // console.log(url)

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
        dir === "left"
            ? container.scrollLeft - (container.offsetWidth + 20)
            : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
    });
};
  //For loading Skeleton
  const skItem = () => {
    return (
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );
};
  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
      <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRightNav arrow"
                    onClick={() => navigation("right")}
                />
        {!loading ? (
          <div ref={carouselContainer} className="carouselItems" >
            {data?.map((curElm) => {
            //   console.log(curElm.vote_average);
              const imageUrl = curElm.poster_path
                ? url.poster + curElm.poster_path
                : PosterFallback;
              return (
                <div key={curElm.id} className="carouselItem" onClick={()=> navigate(`/${curElm.media_type || endPoint}/${curElm.id}`)}>
                  <div className="posterBlock">
                    <Img src={imageUrl} />
                    <CircleRating rating = {curElm.vote_average.toFixed(1)}/>
                    <Genres data={curElm.genre_ids.slice(0,2)}/>
                  </div>
                  <div className="textBlock ">
                    <span className="title">{curElm.title || curElm.name}</span>
                    <span className="date">{dayjs(curElm.release_date).format("MMM D, YYYY")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
            <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
        </div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
