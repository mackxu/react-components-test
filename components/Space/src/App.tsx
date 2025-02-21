import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Popconfirm, Upload } from 'antd';

import { Space } from './Space';

function App() {
  return (
    <>
      <Space
        split={<Divider type="vertical" />}
        direction="vertical"
        align="end"
        size={['large', 'small']}
      >
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary">Confirm</Button>
        </Popconfirm>
      </Space>
      <Space split={<Divider type="vertical" />} wrap align="end">
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary">Confirm</Button>
        </Popconfirm>
      </Space>
    </>
  );
}

export default App;
