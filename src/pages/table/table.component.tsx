import React, { useCallback } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { generateGuid } from "../../core/helpers/generate-guid";
import { useUsers, usehandleDelete } from "./actions/table.query";
import { Link } from "react-router-dom";
import useLocalization from "../../assets/lang";

interface DataType {
  key: string;
  name: string;
  age: number;
  email: string;
  id: number;
}

function TableComponent() {
  const { data, isLoading } = useUsers();
  const { mutate } = usehandleDelete();
  const handleDelete = useCallback(
    (user_id: number) => {
      mutate(user_id);
    },
    [usehandleDelete]
  );

  const translate = useLocalization();

  const columns: ColumnsType<DataType> = [
    {
      title: translate("table_name"),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: translate("table_age"),
      dataIndex: "age",
      key: "age",
    },
    {
      title: translate("table_email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/details/${record?.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/form?id=${record?.id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(record?.id)}>Delete</button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      {isLoading ? (
        <h1 style={{ color: "#000" }}>loading...</h1>
      ) : (
        <>
          <Link to={`/form`}>
            <Button type="primary">Add User</Button>
          </Link>
          <Button type="default">Delete</Button>
          <Table
            columns={columns}
            dataSource={Object.values(data || {}).map((item: DataType) => ({
              ...item,
              key: generateGuid(),
            }))}
          />
        </>
      )}
    </div>
  );
}

export default TableComponent;
