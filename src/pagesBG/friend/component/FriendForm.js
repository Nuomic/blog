import React from 'react';
import { Form, Modal, Button, Input, Icon } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
import Upload from './Upload';
const { Item } = Form;

export default Form.create()(
  ({ form, currentValue, modalStatus, changModalStatus }) => {
    console.log('==============', currentValue);
    const { handleSaveFriend } = useCtrl();
    const { getFieldDecorator, validateFields, resetFields } = form;
    const handleSubmit = (e) => {
      validateFields(async (err, fieldsValue) => {
        e.preventDefault();
        if (err) return;
        if (!!currentValue.id) fieldsValue.friendId = currentValue.id;
        await handleSaveFriend({ ...fieldsValue, status: '0' });
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
        <Form>
          <Item /* label="昵称" */>
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请输入昵称' }],
              initialValue: currentValue.nickname,
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="昵称"
              />
            )}
          </Item>
          <Item /* label="邮箱" */>
            {getFieldDecorator('email', {
              initialValue: currentValue.email,
              rules: [{ required: true, message: '请输入邮箱！' }],
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="邮箱地址"
              />
            )}
          </Item>
          <Item /* label="网站名称" */>
            {getFieldDecorator('siteName', {
              rules: [
                {
                  required: true,
                  message: '请输入网站地址',
                },
              ],
              initialValue: currentValue.siteName,
            })(
              <Input
                prefix={
                  <Icon type="star" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="网站名称"
              />
            )}
          </Item>
          <Item /* label="网站地址" */>
            {getFieldDecorator('siteUrl', {
              rules: [{ required: true, message: '请输入网站地址！' }],
              initialValue: currentValue.siteUrl,
            })(
              <Input
                prefix={
                  <Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="网站地址"
              />
            )}
          </Item>
          <Item /* label="描述" */>
            {getFieldDecorator('description', {
              rules: [{ required: true, message: '请输入网站描述！' }],
              initialValue: currentValue.description,
            })(<Input.TextArea rows={4} placeholder="网站描述" />)}
          </Item>{' '}
        </Form>
      </Modal>
    );
  }
);
