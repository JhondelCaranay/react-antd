import { useEffect, useState } from "react";
import styles from "./App.module.css";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  message,
  Select,
  Typography,
  theme,
} from "antd";
const { Column } = Table;

const departments = [
  {
    ID: 1,
    Name: "MIS",
  },
  {
    ID: 2,
    Name: "HR",
  },
  {
    ID: 3,
    Name: "Marketing",
  },
];

const App = () => {
  const { token } = theme.useToken();

  const [messageApi, contextHolder] = message.useMessage();

  const [dataSource, setDataSource] = useState(
    JSON.parse(localStorage.getItem("dataSource")) || []
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    localStorage.setItem("dataSource", JSON.stringify(dataSource));
  }, [dataSource]);

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);

    messageApi.open({
      type: "info",
      content: "You are now editing the user",
    });

    setIsModalVisible(true);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure you want to delete this record?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        setDataSource(dataSource.filter((item) => item.key !== record.key));

        messageApi.open({
          type: "success",
          content: "User deleted successfully",
        });
      },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log("🚀 ~ file: App.jsx:81 ~ onFinish ~ values:", values);
    if (editingRecord) {
      const newData = dataSource.map((item) =>
        item.key === editingRecord.key ? { ...item, ...values } : item
      );
      setDataSource(newData);

      messageApi.open({
        type: "success",
        content: "User updated successfully",
      });
    } else {
      const newRecord = { key: dataSource.length + 1, ...values };
      setDataSource([...dataSource, newRecord]);

      messageApi.open({
        type: "success",
        content: "User added successfully",
        className: styles.message,
      });
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space>
  //         <Button onClick={() => handleEdit(record)}>Edit</Button>
  //         <Button onClick={() => handleDelete(record)}>Delete</Button>
  //       </Space>
  //     ),
  //   },
  // ];

  const watch = Form.useWatch((values) => values, form);

  return (
    <div className={styles.app}>
      {contextHolder}

      <Button
        type="primary"
        className={styles.create_button}
        onClick={() => {
          setEditingRecord(null);
          setIsModalVisible(true);
        }}
      >
        Add User
      </Button>
      <Table
        dataSource={dataSource}
        className={styles.table}
        bordered
        pagination={{
          defaultPageSize: 5,
          // showSizeChanger: true,
          // pageSizeOptions: ["5", "10", "20", "50"],
        }}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Department" dataIndex="department" key="department" />
        <Column
          title="Address"
          dataIndex="address"
          key="address"
          responsive={["md"]}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space>
              <Button
                onClick={() => handleEdit(record)}
                type="default"
                // style={{
                //   backgroundColor: token.colorPrimary,
                //   color: token.colorBgContainer,
                // }}
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(record)}
                type="primary"
                danger
              >
                Delete
              </Button>
            </Space>
          )}
        />
      </Table>
      <Modal
        title={editingRecord ? "Edit User" : "Add User"}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Typography
          style={{
            // vs code night owl theme
            backgroundColor: "#011627",
            color: "#d6deeb",
            borderRadius: "5px",
          }}
        >
          <pre>{JSON.stringify(watch, null, 2)}</pre>
        </Typography>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="department"
            label="Department"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={(value) => {
                console.log("🚀 ~ file: App.jsx:178 ~ App ~ e:", value);
                form.setFieldsValue({ department: value });
              }}
              allowClear
            >
              {departments.map((department) => (
                <Option key={department.ID} value={department.Name}>
                  {department.Name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {editingRecord ? "Update" : "Add"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
