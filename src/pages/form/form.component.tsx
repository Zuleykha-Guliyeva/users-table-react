import { useCallback, useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { IFormValues } from "./form";
import { useAddUser, useUpdateUser } from "./actions/form.mutation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useUpdate } from "./actions/form.query";

const FormComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user_id = parseInt(searchParams.get("id")) || 0;

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm<IFormValues>();
  const { data, isLoading, isError } = useUpdate(user_id);
  const addUser = useAddUser();
  const updateUser = useUpdateUser(user_id);

  useEffect(() => {
    if (data && user_id) {
      console.log(data);
      console.log(data.name);
      form.setFieldsValue({
        name: data.name,
        email: data.email,
        age: data.age,
      });
    }
  }, [data,user_id]);

  const onSubmit = useCallback(
    (values: IFormValues) => {
      if (user_id) {
        updateUser.mutate({ user_id, ...values });
      } else {
        addUser.mutate(values);
      }
      showSuccessMessage();
      navigate("/users");
    },
    [addUser, updateUser, user_id]
  );
  const showSuccessMessage = () => {
    message.success("Operation successful");
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading user details</p>;
  }
  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormComponent;
