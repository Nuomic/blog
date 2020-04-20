import React from 'react';
import { Card, Col, Row, Icon, Modal } from 'antd';
import { useModelState, useCtrl } from 'react-imvc/hook';
const { confirm } = Modal;
const { Meta } = Card;
export default ({ changModalStatus }) => {
  const { portfolioList = [] } = useModelState();
  const { handleDeletePortfolio } = useCtrl();
  console.log('portfolioList', portfolioList);
  function showConfirm(item) {
    confirm({
      title: '是否确认删除？',
      content: `${item.name}`,
      onOk: async () => {
        await handleDeletePortfolio(item.id);
      },
      onCancel() {},
    });
  }
  return (
    <Row gutter={10}>
      {portfolioList.map((item) => (
        <Col xxl={4} xs={12} lg={6} md={8}>
          <Card
            key={item.id}
            cover={
              <div className="out-rectangle ">
                <img
                  className="inner-rectangle"
                  alt="example"
                  src={item.pictureUrl}
                />
              </div>
            }
            actions={[
              <Icon
                type="edit"
                key="edit"
                onClick={() => changModalStatus(item)}
              />,
              <Icon
                type="delete"
                key="delete"
                onClick={() => showConfirm(item)}
                style={{ color: 'red' }}
              />,
            ]}
          >
            <Meta
              title={item.name}
              description={
                <div title={item.description} style={{ height: 50 }}>
                  {item.description}
                </div>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
