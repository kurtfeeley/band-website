import React from 'react';

import FilterableTable from 'react-filterable-table';

const Table = () => {
  const data = [
    { date: "1/1/2019", location: 'Las Vegas, NA', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "1/15/2019", location: 'San Francisco, CA', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "2/14/2019", location: 'Atlanta, GA', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "3/3/2019", location: 'Tampa, FL', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "4/5/2019", location: 'New York, NY', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "5/5/2018", location: 'St. Louis, MS', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "5/25/2019", location: 'Sacramento, CA', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "6/11/2019", location: 'Cleveland, OH', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "6/20/2019", location: 'Nashville, TN', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "7/5/2019", location: 'Dallas, TX', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "7/15/2018", location: 'Houston, TX', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "8/1/2019", location: 'Denver, CO', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "8/28/2019", location: 'Boulder, CO', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "9/7/2019", location: 'Jacksonville, FL', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> },
    { date: "9/27/2019", location: 'New York, NY', time: "7 PM", price: <a href='http://ticketmaster.com'>$25</a> }
  ];

// Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    { name: 'date', displayName: "Date", inputFilterable: true, sortable: false },
    { name: 'location', displayName: "Location", inputFilterable: true, exactFilterable: true, sortable: true },
    { name: 'time', displayName: "Time", inputFilterable: true, exactFilterable: true, sortable: true },
    { name: 'price', displayName: "Price", inputFilterable: false, exactFilterable: false, sortable: false },
  ];
  return (
    <div className="container mt-4">
      <FilterableTable
        namespace="react-filter-table"
        initialSort="name"
        data={data}
        fields={fields}
        noRecordsMessage="There are no people to display"
        noFilteredRecordsMessage="No people match your filters!"
        pagersVisible={false}
        tableClassName='table table-dark'
      />
    </div>
  );
};

export default Table;