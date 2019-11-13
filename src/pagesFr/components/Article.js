import React,{useState, useEffect} from 'react'
import { List, Avatar, Icon } from 'antd';
import { themeColor } from '../config'
export default () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'http://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }
const [likeCount,setLikeCount] = useState(0)
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8, }} />
      <span style={{color:!(type=="clock-circle")&&'#3399ea'}}>{text}</span>
    </span>
  );
  const handleToDetail = (e)=>{
    console.log('e', e)
  }
  const handleAddLikeCount=(e)=>{
    console(e)
    setLikeCount(likeCount++)
  }
  return (<div style={{ width: 900, backgroundColor: themeColor.articleBgColor, padding: 20, margin: "20px 0" }}>
    <List
    //  loading
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 6,
      }}
      dataSource={listData}
      footer={
        <div>
          <b>ant design</b> footer part
      </div>
      }
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="clock-circle" text={new Date().toLocaleString()} key="list-vertical-star-o" />,
            <IconText type="eye" text="2" key="list-vertical-eye" style></IconText>,
            <IconText type="like-o" text={likeCount} onClick={handleAddLikeCount} key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />,

          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={<div onClick={handleToDetail}>item.description</div>}
          />
          {item.content}
        </List.Item>
      )}
    />
  </div>

  )
}


