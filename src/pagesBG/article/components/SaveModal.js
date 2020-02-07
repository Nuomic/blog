import React from 'react';
import { Form, Modal, Button, Input, Radio, Select } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
const { Item } = Form;
const { Option } = Select;
export default ({ form, modalStatus }) => {
  const {
    handleChangeModalStatus,
    handleSaveArticle,
    handleSaveTag
  } = useCtrl();
  const { article, formData } = useModelState();
  const { categoryList, tagList } = formData;
  const { getFieldDecorator, validateFields, resetFields } = form;
  const handleSubmit = e => {
    validateFields(async (err, fieldsValue) => {
      e.preventDefault();
      if (err) return;
      await handleSaveArticle(fieldsValue);
    });
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };
  const statusList = [
    { key: '1', name: '已发布' },
    { key: '2', name: '私密' }
  ];
  const addTag = value => {
    if (!tagList.some(item => item.name == value)) handleSaveTag(value);
  };
  return (
    <Modal
      title={article.id ? '编辑' : '新增'}
      visible={modalStatus}
      onOk={handleSubmit}
      onCancel={handleChangeModalStatus}
    >
      <Form {...formItemLayout}>
        <Item label="所属栏目">
          {getFieldDecorator('categoryId', {
            initialValue: article.categoryId,
            rules: [{ required: true, message: '所属栏目不能为空' }]
          })(
            <Select>
              {categoryList &&
                categoryList.map(item => (
                  <Option key={item.key}>{item.name}</Option>
                ))}
            </Select>
          )}
        </Item>
        <Item label="标签">
          {getFieldDecorator('tags', {
            initialValue: article.tags
          })(
            <Select mode="tags" tokenSeparators={[',']} onSelect={addTag}>
              {tagList &&
                tagList.map(item => (
                  <Option key={item.key} value={item.name}>
                    {item.name}
                  </Option>
                ))}
            </Select>
          )}
        </Item>

        <Item label="发布形式">
          {getFieldDecorator('status', {
            initialValue: article.status
          })(
            <Radio.Group>
              {statusList.map(item => (
                <Radio key={item.key} value={item.key}>
                  {item.name}
                </Radio>
              ))}
            </Radio.Group>
          )}
        </Item>
        <Item label="摘要">
          {getFieldDecorator('summary', {
            initialValue: article.summary
          })(<Input.TextArea rows={4} />)}
        </Item>
      </Form>
    </Modal>
  );
};
