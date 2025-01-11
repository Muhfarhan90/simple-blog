import { useRouteError } from "react-router-dom";
import gambarError from "../../public/error.gif";
function ErrorPage() {
  const error = useRouteError;
  return (
    <div>
      <img src={gambarError} alt="Error !!!" className="w-[50%] h-screen" />
    </div>
  );
}

export default ErrorPage;
