import React, { useRef, useEffect } from 'react';
import { useModelState } from 'react-imvc/hook';
export default () => {
  const { g2plot, pageList } = useModelState();
  const { Line } = g2plot;
  const data = pageList.reverse().map((item, index) => {
    if (!index) item.date = item.date.slice(0, 7);
    item.pv = item.pageInfo.reduce((pre, curr) => (pre += curr.pv), 0);
    return item;
  });
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
      xAxis: {
        tickCount: 6,
      },
      meta: {
        date: {
          alias: '日期',
        },
        pv: {
          alias: '访问数',
        },
      },
    });
    return bar.render();
  }, []);

  return <div ref={container} />;
};
