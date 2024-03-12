import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Loading from "../utils/Loading";
import TvCard from "../components/TvCard";


export default function Search() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const query = new URLSearchParams(location.search);
  const queryParams = query.get("query");
   const Navigate= useNavigate()
  useEffect(() => {
    document.title = `search result for ${queryParams}`;
    const delayDebounceFn = setTimeout(() => {
      const getSearch = async () => {
        try {
          setIsLoading(true);
          const res = await axios.get(
            ` https://api.tvmaze.com/search/shows?q=${queryParams}`
          );
          setData(res.data);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      getSearch();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [queryParams]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (queryParams) {
      params.append("query", queryParams);
    } else {
      params.delete("query");
    } Navigate({search: params.toString()})
  }, [Navigate, queryParams]);
  console.log("search", data);

  return (
    <Layout>
      {error && <p>{error.message}</p>}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.length > 0 ? (
            <>
              <p className="mt-5">
                {data.length} result found for <b>{queryParams}</b>
              </p>
              <Row>
                {data.map((item) => (
                  <Col key={item.id} xs={12} md={4} xl={3}>
                    <TvCard show={item.show} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <p className="mt-5">No result found for {queryParams}</p>
          )}
        </>
      )}
    </Layout>
  );
}
