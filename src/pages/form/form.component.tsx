import React from "react";
import { useCallback, useEffect, useMemo } from "react";
import { Button, Form, Input, message } from "antd";
import { IFormValues } from "./form";
import { useAddUser, useUpdateUser } from "./actions/form.mutation";
import { useLocation, useNavigate } from "react-router-dom";
import { useDetail } from "../details/actions/detail.query";
import useLocalization from "../../assets/lang";

const FormComponent = () => {
  const navigate = useNavigate();
  const translate = useLocalization();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchParamsId = searchParams.get("id");
  const user_id = searchParamsId !== null ? parseInt(searchParamsId) : 0;
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm<IFormValues>();
  const { data, isLoading, isError } = useDetail(user_id);
  const addUser = useAddUser();
  const updateUser = useUpdateUser();

  const rules = useMemo(
    () => ({
      name: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
      email: [
        {
          required: true,
          message: translate("email_invalid"),
        },
      ],
      age: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
    }),
    [translate]
  );

  useEffect(() => {
    if (data && user_id) {
      form.setFieldsValue({
        name: data.name,
        email: data.email,
        age: data.age,
      });
    }
  }, [data, user_id]);

  const onSubmit = useCallback(
    (values: IFormValues) => {
      if (user_id) {
        updateUser.mutate({ ...values, id: user_id });
      } else {
        addUser.mutate(values);
      }
      showSuccessMessage();
      navigate("/table");
    },
    [addUser, updateUser, user_id]
  );
  const showSuccessMessage = () => {
    message.success("Operation successful");
  };
  if (isLoading) {
    return <p>{translate("loading")}...</p>;
  }

  if (isError) {
    return <p>{translate("error")}</p>;
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
      <Form.Item label="Name" name="name" rules={rules.name}>
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={rules.email}>
        <Input type="email" />
      </Form.Item>

      <Form.Item label="Age" name="age" rules={rules.age}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {translate("save")}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormComponent;
