import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import TvCard from "../components/TvCard";

export default function RealityTv({ tvsShowsByReality, scroll, scrollRef }) {
  return (
    <div className="position-relative w-100">
      <div
        className="d-flex gap-4 overflow-x-scroll overflow-y-hidden scrollBody"
        ref={scrollRef}
      >
        {tvsShowsByReality.map((show) => (
          <TvCard key={show.id} show={show} />
        ))}
      </div>
      <div className="d-none d-lg-flex justify-content-between align-items-center position-absolute top-50 z-2 w-100 px-2 ">
        <FaArrowAltCircleLeft
          size="30px"
          className="text-white cursor"
          onClick={() => scroll("left")}
        />
        <FaArrowAltCircleRight
          size="30px"
          className="text-white cursor"
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
}
