import React, { Component } from 'react';

import Table from '../../components/Table/Table'

class Tours extends Component {
  render () {
    return (
      <div className='container card mt-3'>
        <h2 className="text-center mt-3 mb-0">Upcoming shows</h2>
        <Table />
      </div>
    );
  }
}

export default Tours;