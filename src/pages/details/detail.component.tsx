import { Card, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDetail } from "./actions/detail.query";

const DetailsComponents = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user_id = id ? parseInt(id) : undefined;
  const { data, isLoading, isError } = useDetail(user_id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading user details</p>;
  }
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card
          title="User detail"
          extra={
            <a
              href="#"
              onClick={() => {
                navigate("/users");
              }}
            >
              close
            </a>
          }
          style={{ width: 300 }}
        >
          <p>adi: {data.name}</p>
          <p>email: {data.email}</p>
          <p>yasi: {data.age}</p>
        </Card>
      </Space>
    </>
  );
};

export default DetailsComponents;
