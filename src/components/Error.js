import { useRouteError } from "react-router-dom";
const Error = () => {
  const er = useRouteError();
//   console.log(er);
  return (
    <>
      <h1>OOPS!!</h1>
      <h2>Something went worng</h2>
      <h2>{er.status + " : " + er.statusText}</h2>
    </>
  );
};
export default Error;
