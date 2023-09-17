import { useRouteError } from "react-router-dom";
import error_404 from "../assets/gifs/404.gif"

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <img className="object-fit-cover" src={error_404} alt="error page"/>
    </div>
  )
}
