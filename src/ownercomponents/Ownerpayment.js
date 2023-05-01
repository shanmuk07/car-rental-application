import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { icons } from 'react-icons';

const Ownerpayment = () => {

  const columns = [
    {
      name: 'Customer',
      selector: row => row.Name,
      sortable: true
    },
    {
      name: "Model Number",
      selector: row => row.ModelNumber,
      sortable: true
    },
    {
      name: "Amount",
      selector: row => row.Amount,
      sortable: true
    },
    {
      name: "Payment",
      selector: row => row.PaymentStatus,
      sortable: true
    },
    {
      name: "Extra",
      selector: row => row.Extra,
      sortable: true
    }
  ];

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('')
      .then(res => {
        setData(res.data)
        setRecords(res.data)
      }).catch(err => console.log(err))
  }, []);

  const [records, setRecords] = useState([]);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.Name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2 style={{textAlign:"center" , fontWeight:"bold"}}>PaymentStatus</h2>
      </div>
      <div className='row'>
        <div className='col-md-12 form-group'>
          <div class="input-group">
            <div class="input-group-addon" style={{ fontSize: "25px" }}>
              <BiSearchAlt2 />
            </div>
            <input type="text" placeholder="Search" class="form-control" onChange={handleFilter} />
          </div>
        </div>
      </div>

      <div className='row'>
        <DataTable columns={columns}
          data={records}
          fixedHeader
        ></DataTable>
      </div>

    </div>
  )
}

export default Ownerpayment;