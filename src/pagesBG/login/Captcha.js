import React, { useEffect, useState, useRef } from 'react';
import { useCtrl, useModelState } from 'react-imvc/hook';

export default () => {
  const { handleGetCaptcha } = useCtrl();
  const { captcha } = useModelState();
  const config = {
    fontSizeMin: 24,
    fontSizeMax: 30,
    backgroundColorMin: 180,
    backgroundColorMax: 240,
    colorMin: 50,
    colorMax: 170,
    lineColorMin: 30,
    lineColorMax: 180,
    dotColorMin: 0,
    dotColorMax: 255,
    contentWidth: 140,
    contentHeight: 30,
  };

  const canvasRef = useRef(null);
  useEffect(() => {
    return canvasRef.current && drawPic();
  }, [captcha]);
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const drawText = (ctx, txt, i) => {
    ctx.fillStyle = randomColor(config.colorMin, config.colorMax);
    ctx.font = randomNum(config.fontSizeMin, config.fontSizeMax) + 'px SimHei';
    const x = (i + 1) * (config.contentWidth / captcha.length) - 20;
    const y = randomNum(config.fontSizeMax, config.contentHeight) - 5;
    let deg = randomNum(-45, 45);
    // 修改坐标原点和旋转角度
    ctx.translate(x, y);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(txt, 0, 0);
    // 恢复坐标原点和旋转角度
    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
  };
  const drawLine = (ctx) => {
    // 绘制干扰线
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = randomColor(config.lineColorMin, config.lineColorMax);
      ctx.beginPath();
      ctx.moveTo(
        randomNum(0, config.contentWidth),
        randomNum(0, config.contentHeight)
      );
      ctx.lineTo(
        randomNum(0, config.contentWidth),
        randomNum(0, config.contentHeight)
      );
      ctx.stroke();
    }
  };
  const drawDot = (ctx) => {
    // 绘制干扰点
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(
        randomNum(0, config.contentWidth),
        randomNum(0, config.contentHeight),
        1,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  };
  // 生成一个随机数

  // 生成一个随机的颜色
  const randomColor = (min, max) => {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return `rgb(${r},${g},${b})`;
  };
  const drawPic = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';
    // 绘制背景
    ctx.fillStyle = randomColor(
      config.backgroundColorMin,
      config.backgroundColorMax
    );
    ctx.fillRect(0, 0, config.contentWidth, config.contentHeight);
    // 绘制文字
    for (let i = 0; i < captcha.length; i++) {
      drawText(ctx, captcha[i], i);
    }
    drawLine(ctx);
    drawDot(ctx);
  };
  //刷新验证码
  const handleRefresh = () => {
    (async () => {
      await handleGetCaptcha();
    })();
  };
  return (
    <canvas
      title="看不清，换一张"
      style={{
        cursor: 'pointer',
      }}
      onClick={handleRefresh}
      ref={canvasRef}
      height={config.contentHeight}
      width={config.contentWidth}
    />
  );
};
