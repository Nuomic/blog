import React, { useRef, useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';
// import { Line } from '@antv/g2plot';
export default ({ state }) => {
  const { g2plot } = state;
  const { Line } = g2plot;
  const bdList = [
    {
      name: '首页'
    }
  ];
  useEffect(() => {
    if (!container.current) {
      console.log('container.current', container.current);
      return;
    }
    console.log('container.current', container.current);
    const bar = new Line(container.current, {
      data,
      xField: 'year',
      yField: 'value'
    });
    return bar.render();
  }, []);
  const container = useRef(null);
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 }
  ];

  return (
    <BasicLayout breadcrumbList={bdList}>
      {`首页 // 站点监控 站点总览 站点统计`}
      <div ref={container} />
    </BasicLayout>
  );
};
