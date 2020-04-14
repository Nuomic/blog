import React, { useRef, useEffect } from 'react';
import { useModelState } from 'react-imvc/hook';
import { Card } from 'antd';
export default () => {
  const { g2plot, pageList = [], pvTotal } = useModelState();
  const { Line } = g2plot;
  const typeMap = (name) => {
    let res = '';
    switch (name) {
      case 'home':
        res = '首页';
        break;
      case 'about':
        res = '介绍页';
        break;
      case 'article':
        res = '文章页';
        break;
      case 'portfolio':
        res = '资源页';
        break;
      case 'friend':
        res = '有情链接';
        break;
      case 'msgboard':
        res = '留言板';
        break;
      case 'articledetail':
        res = '文章详情页';
        break;
    }
    return res;
  };
  const data = pageList.reverse().map((item, index) => {
    if (!index) item.date = item.date.slice(0, 7);
    item.pv = item.pageInfo.reduce((pre, curr) => (pre += curr.pv), 0);
    return { date: item.date, pv: item.pv, type: '总计' };
  });
  for (let item of pageList) {
    for (let i of item.pageInfo) {
      data.push({ date: item.date, pv: i.pv, type: typeMap(i.pageName) });
    }
  }
  console.log('data', data);
  const container = useRef(null);
  useEffect(() => {
    if (!container.current) {
      return;
    }
    const bar = new Line(container.current, {
      title: {
        visible: true,
        text: '近90天站点PV统计',
      },
      data,
      xField: 'date',
      yField: 'pv',
      padding: 'auto',
      forceFit: true,
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: (v) =>
            `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        },
      },
      // legend: {
      //   position: 'right-top',
      // },
      seriesField: 'type',
      xAxis: {
        tickCount: 6,
      },
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: (v) =>
            `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        },
      },
      meta: {
        type: {
          alias: '访问数',
        },
      },
    });
    return bar.render();
  }, []);

  return (
    <Card className="home-card">
      <div ref={container} />
    </Card>
  );
};
