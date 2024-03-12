import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Row, Col, Image, Carousel } from "react-bootstrap";
import Layout from "../components/Layout";
import Headers from "../components/Headers";
import Loading from "../utils/Loading";
import { FaBookOpen } from "react-icons/fa6";
import useFetchData from "../hooks/fetchData";

export default function TvDetails() {
  const { id } = useParams();
  const {
    data: shows,
    error,
    isLoading,
  } = useFetchData(
    `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
  );
  const { data } = useFetchData("https://api.tvmaze.com/shows");
  const runningShows = data.filter((shows) => shows.status === "Running");
  const filterRunningShows = runningShows.filter((show) => show.id != id);
  console.log(filterRunningShows);

  useEffect(() => {
    document.title = shows.name;
  }, [shows.name]);

  return (
    <Layout>
      {error && <p className="mt-5">{error.message}</p>}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {shows ? (
            <>
              <div className="d-lg-flex">
                <div className="boxSizeC">
                  <div className="bgColB p-3 d-flex justify-content-between align-items-center">
                    <span className="text-white fs-2 fw-bold">
                      {shows.name}{" "}
                    </span>
                    <div className="text-white fs-4">
                      <span>Rating: &nbsp;{shows?.rating?.average}</span>
                    </div>
                  </div>
                  <Image
                    src={shows.image?.original}
                    alt={shows.name}
                    style={{ height: "550px", width: "100%" }}
                  />
                  <div className="mx-3">
                    <div className="d-flex allign-items-center p-3">
                      <div className="d-flex gap-3 align-items-center flex-grow-1">
                        <FaBookOpen size="50px" color="purple" />
                        <span className="fw-bold fs-4">Storyline</span>
                      </div>
                      <span className="fs-5 fw-medium">{shows.premiered}</span>
                    </div>
                    <hr />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: shows.summary,
                      }}
                    />
                    <div className="mt-4 d-flex justify-content-between align-items-center p-3 bgColB">
                      <div className="text-white">
                        <span className="fw-bold me-2">Genres:</span>
                        {shows.genres?.map((item, index) => (
                          <span key={index} className="me-2">
                            {item}
                          </span>
                        ))}
                      </div>
                      <span className="fw-bold text-white ">
                        Status: {shows.status}
                      </span>
                    </div>
                    <div className="mt-5">
                      <Headers title="Seasons" />
                      <Row className="gy-4">
                        {shows._embedded?.seasons.map((season) => (
                          <Col key={season.id} xs={6} md={3} className="mb-2">
                            <div style={{ height: "300px" }}>
                              <Image
                                src={season?.image?.original}
                                className="img-fluid"
                              />
                              <p>Season {season.number}</p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    <div className="mt-5">
                      <Headers title="Casts" />
                      <div className="d-flex gap-3 flex-wrap">
                        {shows._embedded?.cast?.map((item, index) => (
                          <div key={index} className="text-center">
                            <Image
                              src={item.character?.image?.original}
                              alt={item.character?.name}
                              style={{ width: "80px", height: "80px" }}
                              className="rounded-circle object-fit-cover"
                            />
                            <p className="small text-center">
                              {item.character?.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boxSize bgColB">
                  <h1 className="text-white fs-2 fw-bold text-center">
                    Running shows
                  </h1>
                  <Carousel fade>
                    {filterRunningShows.map((show)=>(<Carousel.Item key={show.id}>
                        <Link to={`/tvshows/${show.id}`}>
                            <Image src={show?.image?.original}
                            style={{width:"100%", height:"550px"}}
                            alt={show.name}/>
                        </Link>
                    </Carousel.Item>))}
                  </Carousel>
                </div>
              </div>
            </>
          ) : (
            <p className="fs-4">
              The show you are looking for is unavailable at the moment
            </p>
          )}
        </>
      )}
    </Layout>
  );
}
