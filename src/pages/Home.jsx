import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import Layout from "../components/Layout";
import Loading from "../utils/Loading";
import useFetchData from "../hooks/fetchData";
import Headers from "../components/Headers";
import RealityTv from "../components/RealityTv";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef();

 const {
    data: shows,
    error,
    isLoading,
  } = useFetchData(" https://api.tvmaze.com/shows"); 

  const scroll = (direction) => {
    const { current } = scrollRef;
    direction === "left"
      ? (current.scrollLeft -= 500)
      : (current.scrollLeft += 500);
  };

  useEffect(() => {
    document.title = "Home page";
  }, []);

  const filterRating = shows.filter((show) => show.rating.average >= 8.9);

  const tvsShowsByReality = shows.filter((show) => show.type === "Reality");

  return (
    <Layout>
      {error && <p className="mt-5">{error.message}</p>}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="d-lg-flex">
            <div className="boxSize">
              {filterRating.slice(0, 4).map((show, index) => (
                <div
                  key={show.id}
                  className={
                    index === current
                      ? "bgColB text-white border-bottom p-2"
                      : "border-bottom py-2"
                  }
                >
                  <div onClick={() => setCurrent(index)} className="cursor">
                    <h1 className="text-uppercase">{show.name}</h1>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="p-4 bgColB text-white boxSize">
              {filterRating.slice(0, 4).map((show, index) => (
                <div key={show.id}>
                  {index === current && (
                    <>
                      <h1 className="fs-5 fw-bold text-uppercase mb-4">
                        {show.name}
                      </h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: show.summary.slice(0, 200) + "...",
                        }}
                      />
                      <Link
                        to={`/tvshow/${show.id}`}
                        className="text-decoration-none text-white fs-5"
                      >
                        See More &#8594;
                      </Link>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="boxSizeB">
              {filterRating.slice(0, 4).map((show, index) => (
                <div key={show.id}>
                  {index === current && (
                    <div className="imgHeight">
                      <Image
                        src={show.image.original}
                        className="w-100 h-100"
                        alt={show.name}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <Headers title="Reality Tv Shows" />
            <RealityTv
              tvsShowsByReality={tvsShowsByReality}
              scroll={scroll}
              scrollRef={scrollRef}
            />
          </div>
        </>
      )}
    </Layout>
  );
};

export default Home;
