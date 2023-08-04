import { useRouteError } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

interface Error {
  status: number;
  statusText: string;
}

const Error = () => {
  const error = useRouteError() as Error;
  console.log("Error - ", error);
  return (
    <>
      <Heading>Oooopppssssss, error, will get back to you!</Heading>
      <Heading>{error.status}</Heading>
      <Heading>{error.statusText}</Heading>
    </>
  );
};

export default Error;
