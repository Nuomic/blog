import React from 'react';
import { Form, Modal, Button, Input, Icon, Select } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
const { Item } = Form;
const { Option } = Select;
export default Form.create()(
  ({ form, currentValue = {}, modalStatus, changModalStatus }) => {
    const { getFieldDecorator, validateFields, resetFields } = form;
    const { handleSavePortfolio } = useCtrl();
    const { resourceList = [] } = useModelState();

    const filterResource = (key) =>
      resourceList
        .filter((item) => item.type == key && item.ext != '.pdf')
        .map((item) => (
          <Option value={item.path} key={item.id}>
            {item.originalname}
          </Option>
        ));

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };

    const handleSubmit = (e) => {
      validateFields(async (err, fieldsValue) => {
        e.preventDefault();
        if (err) return;
        if (!!currentValue.id) fieldsValue.portfolioId = currentValue.id;
        await handleSavePortfolio(fieldsValue);
        changModalStatus({});
        resetFields();
      });
    };

    return (
      <Modal
        title={currentValue.id ? '编辑' : '新增'}
        visible={modalStatus}
        onOk={handleSubmit}
        onCancel={changModalStatus}
      >
        <Form {...formItemLayout}>
          <Item label="名称">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入作品名称' }],
              initialValue: currentValue.name,
            })(<Input placeholder="请输入作品名称" />)}
          </Item>

          <Item label="项目演示地址">
            {getFieldDecorator('preUrl', {
              rules: [
                {
                  required: true,
                  message: '请输入项目演示地址',
                },
                {
                  pattern: /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/,
                  message: '请输入正确的网站地址',
                },
              ],
              initialValue: currentValue.preUrl,
            })(<Input placeholder="请输入项目演示地址" />)}
          </Item>

          <Item label="作品截图">
            {getFieldDecorator('pictureUrl', {
              rules: [
                {
                  required: true,
                  message: '请选择作品截图',
                },
              ],
              initialValue: currentValue.pictureUrl,
            })(
              <Select
                placeholder="请选择作品截图 可搜索"
                showSearch
                optionFilterProp="children"
              >
                {filterResource('image')}
              </Select>
            )}
          </Item>

          <Item label="作品资源">
            {getFieldDecorator('resoureUrl', {
              rules: [
                {
                  required: true,
                  message: '请选择资源',
                },
              ],
              initialValue: currentValue.resoureUrl,
            })(
              <Select
                placeholder="请选择作品资源"
                showSearch
                optionFilterProp="children"
              >
                {filterResource('compressed')}
              </Select>
            )}
          </Item>

          <Item label="作品描述">
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: '请输入作品描述',
                },
              ],
              initialValue: currentValue.description,
            })(
              <Input.TextArea
                rows={5}
                prefix={
                  <Icon type="star" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="请输入作品描述"
              />
            )}
          </Item>
        </Form>
      </Modal>
    );
  }
);
