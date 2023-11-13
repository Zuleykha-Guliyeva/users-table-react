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
  address: string;
  tags: string[];
}

function TableComponent() {
  const { data, isLoading } = useUsers();
  const { mutate } = usehandleDelete();
  const handleDelete = (userId: number) => {
    mutate(userId);
  };

  const addUser = () => {};
  const translate = useLocalization();

  const columns: ColumnsType<DataType> = [
    {
      title: translate('table_name'),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: translate('table_age'),
      dataIndex: "age",
      key: "age",
    },
    {
      title: translate('table_email'),
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/details?name=${record.name}&age=${record.age}&email=${record.email}`}
          >
            <button>Details</button>
          </Link>
          <Link
            to={`/form?id=${record.id}&name=${record.name}&age=${record.age}&email=${record.email}`}
          >
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(record.id)}>Delete</button>
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
          <Link to="/form">
            <Button onClick={addUser} type="primary">
              Add User
            </Button>
          </Link>
          <Table
            columns={columns}
            dataSource={data?.map((item) => ({ ...item, key: generateGuid() }))}
          />
        </>
      )}
    </div>
  );
}

export default TableComponent;
