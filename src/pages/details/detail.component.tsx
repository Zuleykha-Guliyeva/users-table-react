import React from "react";
import { Card, Space } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDetail } from "./actions/detail.query";
import useLocalization from "../../assets/lang";

const DetailsComponents = () => {
  const translate = useLocalization();
  const { id } = useParams();
  const safeId: string = id?.toString() || "";
  const user_id: number = id !== null ? parseInt(safeId) : 0;
  const { data, isLoading, isError } = useDetail(user_id);

  if (isLoading) {
    return <p>{translate("loading")}...</p>;
  }

  if (isError) {
    return <p>{translate("error")}</p>;
  }
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card
          title="User detail"
          extra={<Link to={"/table"}>{translate("close")}</Link>}
          style={{ width: 300 }}
        >
          <p>
            {translate("name")}: {data?.name}
          </p>
          <p>
            {translate("email")}: {data?.email}
          </p>
          <p>
            {translate("age")}: {data?.age}
          </p>
        </Card>
      </Space>
    </>
  );
};

export default DetailsComponents;
