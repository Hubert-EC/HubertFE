import React from 'react'
import { Pagination } from 'antd';
import './index.scss'

export class Paginationz extends React.Component {
  render() {
    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      }
    return (
      <div className='ant-pagination'>
        <Pagination
            total={500}
            showSizeChanger
            showQuickJumper
            //showTotal={total => `Total ${total} items`}
            itemRender={itemRender}
        />
      </div>
    );
  }
}
export default Paginationz