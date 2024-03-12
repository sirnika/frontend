import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
export default function TvCard({ show }) {
  const { id, image, name, genres } = show;
  return (
    <Link to={`/tvshow/${id}`}>
      <div className="tvCard">
        <Image src={image?.original} className="w-100 h-100" alt={name} />
        <div className="text-uppercase mt-1">
          <p className=" text-black fw-bold mb-1">{name}</p>
          <p className=" text-black">{genres.join("-")}</p>
        </div>
      </div>
    </Link>
  );
}
