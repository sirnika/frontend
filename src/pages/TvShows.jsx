//import useFetchData from "../hooks/fetchData";
//import { Link } from "react-router-dom"
//import {useState, useEffect}from 'react'

//export default function TvShows({api})  {
//   const {
//       data: shows,

//    } = useFetchData(" https://api.tvmaze.com/shows");

//   const [data, setShows] = useState([]);

//{tvsShowsByReality.map((show) => (
//  <TvShows key={show.id} show={show}

// return (<Link to={`/tvshow/${id}`}>
// <div className="pageLayout d-flex justify-content-between align-items-center">

//   <div className="text-decoration-none fs-2  me-3 me-md-0 text-black fw-bold"> Tv Shows</div>
//   </div>
//   <div> TvShows</div>
//  </Link>
// ));
//}

import Layout from "../components/Layout";
import Headers from "../components/Headers";
import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Loading from "../utils/Loading";
import useFetchData from "../hooks/fetchData";
import TvCard from "../components/TvCard";

export default function TvShows() {
  const [page, setPage]= useState(1);
  const {
    data: shows,
    error,
    isLoading,
  } = useFetchData(`https://api.tvmaze.com/shows?page=${page}`);


  useEffect(() => {
    window.scrollTo({ top:"0", scrollBehavior:"smooth"});
  [page]});

  const showPrev = () => {setPage((prev) =>  (prev === 1 ? prev ===1 : prev -1));};
    const showNext = () => {setPage((prev) =>  prev + 1);
  };
  return (
    <Layout>
      <Headers title="Tvshows" extra="mt-5" />
      {error && <>{error.message}</>}
      {isLoading ? (
        <Loading />
      ) : (
        <Row>
          {shows.map((show) => (
            <Col xs={12} md={4} lg={3} key={show.id}>
              <TvCard show={show}/>
            </Col>
          ))}
        </Row>
      )}
      <div className="d-flex justify-content-between">
<Button onClick={showPrev}>Prev</Button>
<Button onClick={ showNext}>Next</Button>
      </div>
    </Layout>
  );
  }
