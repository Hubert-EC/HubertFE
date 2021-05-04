import React from 'react'
import { Rate } from 'antd';
import './index.scss'

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

export class Star extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className='ant-star'>
        <span>
          <Rate tooltips={desc} onChange={this.handleChange} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
      </div>
    );
  }
}

export default Star
