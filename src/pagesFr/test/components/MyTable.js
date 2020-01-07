import React from 'react'
import { Style } from 'react-imvc/component'
export default ({data,row,columns,colSpan,colName}) => {
  return (<>
    <Style name="antd" />
    <Style name="antdPro" />
    <Style name="customize" />
    <table style={{ width: "100%" }}>
      <thead className='ant-table-thead'>
        <tr>{columns.map(item => <th>{item.title}</th>)}</tr>
      </thead>
      <tbody className="ant-table-tbody">
        {data.map(parent => <>
          <tr className="ant-table-row ant-table-row-level-0" style={{ background: " #fdfdfd" }}>
            <td colSpan={colSpan}>
              {row.map(item => <span key={item.title}>{parent[item.title]}</span>)}
            </td>
            <td colSpan={row.length - colSpan}>
            {row[row.length-1].render.call(this,parent)||row[row.length-1].title}
            </td>
          </tr>
          {parent[colName].map(children => <tr className="ant-table-row ant-table-row-level-0">
            {columns.map(item => <td key={item.title}>{item.render&&item.render.call(this,children)|| children[item.dataIndex]}</td>)}
          </tr>)}
        </>)}
      </tbody>
    </table>
  </>)
}
