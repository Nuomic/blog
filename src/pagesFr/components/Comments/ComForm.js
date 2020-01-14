import React from 'react';
import connect from 'react-imvc/hoc/connect';
import { Input, Divider, Form, Button, Col, Row, Card } from 'antd';
const { TextArea } = Input;
const withData = connect(({ state, handlers }) => {
  return {
    hitokoto: state.hitokoto
  };
});
export default withData(
  Form.create()(({ parentId, articleId, form }) => {
    console.log(parentId, articleId);
    const {
      getFieldDecorator,
      resetFields,
      validateFieldsAndScroll,
      getFieldValue
    } = form;

    return (
      <Card size="small" className="comment-form ">
        <Form style={{ opacity: 0.7 }}>
          <div className="comment-form-title" orientation="left">
            评论
          </div>
          <Form.Item>
            <Row gutter={10}>
              <Col span={19}>
                <Row gutter={10}>
                  <Col span={12}>
                    <Form.Item>
                      {getFieldDecorator('nickname')(
                        <Input placeholder="昵称" />
                      )}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      {getFieldDecorator('nickname')(
                        <Input placeholder="邮箱" />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  {getFieldDecorator('nickname')(<TextArea rows={3} />)}
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item>
                  {getFieldDecorator('nickname')(
                    <Input placeholder={'验证码'} />
                  )}
                </Form.Item>
                <Form.Item
                  style={{ position: 'relative', top: -3 }}
                  className="margin-0"
                >
                  <Button ghost style={{ width: '100%' }}>
                    刷新验证
                  </Button>
                  <Button ghost type="primary" style={{ width: '100%' }}>
                    提交评论
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    );
  })
);
