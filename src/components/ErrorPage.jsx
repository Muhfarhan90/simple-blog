import { useRouteError } from "react-router-dom";
import gambarError from "../../public/error.gif";
function ErrorPage() {
  const error = useRouteError;
  return (
    <div className="flex items-center text-center justify-center mt-40">
      <img src={gambarError} alt="Error !!!" className="w-[50%] " />
    </div>
  );
}

export default ErrorPage;
