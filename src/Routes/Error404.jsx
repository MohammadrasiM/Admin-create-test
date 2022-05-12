import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={() => navigate("/dashboard")} type="primary">
          Back Home
        </Button>
      }
    />
  );
};
export default Error404;
