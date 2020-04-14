import React, { useState, useEffect } from 'react';
import connect from 'react-imvc/hoc/connect';
import { comFormTheme } from '../../config';
import { Input, Form, Button, Col, Row, Card, Icon, Avatar } from 'antd';
import { useModelState, useCtrl } from 'react-imvc/hook';
const { TextArea } = Input;
export default Form.create()(({ parentId, articleId, form }) => {
  const { handleSaveCommit } = useCtrl();
  const { hitokoto } = useModelState();
  const [userInfo, setUserInfo] = useState({});
  console.log(parentId, articleId);
  let initRandomNum = [
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
  ];
  const [randomNum, setRandomNum] = useState(false);
  useEffect(() => {
    setRandomNum(initRandomNum);
    setUserInfo({
      nickname: window.localStorage.getItem('nickname'),
      email: window.localStorage.getItem('email'),
    });
  }, []);

  //刷新验证
  const handleRefreshRandomNum = () => {
    resetFields();
    setRandomNum([
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ]);
  };
  const { getFieldDecorator, resetFields, validateFields } = form;
  // 保存评论
  const handleSubmit = (e) => {
    validateFields(async (err, fieldsValue) => {
      e.preventDefault();
      if (err) return;
      window.localStorage.setItem('nickname', fieldsValue.nickname);
      window.localStorage.setItem('email', fieldsValue.email);
      console.log('fieldsValue', fieldsValue);
      await handleSaveCommit({ parentId, articleId, ...fieldsValue });
      handleRefreshRandomNum();
    });
  };
  //验证码校验
  const handleverCodeCheck = (rule, value, callback) => {
    if (value != randomNum[0] + randomNum[1]) {
      callback('验证码错误');
    }
    callback();
  };
  return (
    <Row>
      <Col span={1}>
        <Avatar
          style={{ backgroundColor: 'rgb(230, 230, 230)' }}
          shape="square"
          icon="user"
          size={40}
          className="fr"
        />
      </Col>
      <Col span={23}>
        <span style={{ marginLeft: 10 }}>畅所欲言吧</span>
        <Card
          size="small"
          className="comment-form"
          style={{ ...comFormTheme, marginLeft: 10 }}
        >
          <Form>
            <Row gutter={8}>
              <Col span={9}>
                <Form.Item>
                  {getFieldDecorator('nickname', {
                    validateTrigger: 'onBlur',
                    rules: [
                      {
                        required: true,
                        message: '请输入昵称',
                      },
                    ],
                    initialValue: userInfo.nickname,
                  })(<Input placeholder="昵称" />)}
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item>
                  {getFieldDecorator('email', {
                    validateTrigger: 'onBlur',
                    rules: [
                      {
                        required: true,
                        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                        message: '邮箱格式不正确!',
                      },
                    ],
                    initialValue: userInfo.email,
                  })(<Input placeholder="邮箱" />)}
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item>
                  {getFieldDecorator('verCode', {
                    validateTrigger: 'onBlur',
                    rules: [
                      {
                        validator: handleverCodeCheck,
                      },
                    ],
                  })(
                    <Input
                      onFocus={() => resetFields('verCode')}
                      suffix={
                        <Icon
                          type="sync"
                          spin={randomNum[2]}
                          onClick={handleRefreshRandomNum}
                        />
                      }
                      placeholder={
                        (randomNum &&
                          `${randomNum[0]} + ${randomNum[1]} = ?`) ||
                        undefined
                      }
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={19}>
                <Form.Item>
                  {getFieldDecorator('content', {
                    rules: [
                      {
                        required: true,
                        message: '说点啥吧',
                      },
                    ],
                  })(
                    <TextArea
                      autoSize={{ minRows: 2, maxRows: 3 }}
                      placeholder={
                        hitokoto.hitokoto && `一言：${hitokoto.hitokoto}`
                      }
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item className="margin-0">
                  <Button
                    ghost
                    type="primary"
                    style={{ width: '100%', height: 52 }}
                    onClick={handleSubmit}
                  >
                    提交评论
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
});
