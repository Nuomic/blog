import React, { useRef, useEffect } from 'react';
import { useModelState } from 'react-imvc/hook';
export default () => {
  const { g2plot, categoryList = [] } = useModelState();
  const { Ring } = g2plot;

  const container = useRef(null);
  useEffect(() => {
    if (!container.current) {
      return;
    }
    console.log('Donut', Ring);
    const bar = new Ring(container.current, {
      forceFit: true,
      title: {
        visible: true,
        text: '文章栏目统计',
      },
      radius: 0.8,
      // padding: 'auto',
      data: categoryList,
      angleField: 'count',
      colorField: 'name',
    });
    return bar.render();
  }, []);

  return <div ref={container} />;
};
