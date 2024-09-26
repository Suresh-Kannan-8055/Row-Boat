import React, { useMemo, useState } from "react";

import Table from "./Table.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
function TablerCaller() {

   const initial_data = [
    {
      id: 1,
      name: "Hand Bag",
      size: 35,
      quantity: 2,
      total: 70,
    },
    {
      id: 2,
      name: "Gaming Chair - Deluxe Edition",
      size: 80,
      quantity: 1,
      total: 150,
    },
    {
      id: 3,
      name: "Smartphone",
      size: 6,
      quantity: 3,
      total: 900,
    },
    {
      id: 4,
      name: "Wireless Headphones",
      size: 15,
      quantity: 5,
      total: 250,
    },
    
  ];
  

  const [data, setData] = useState(initial_data);

  


 

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <div style={{ display: "flex", justifyContent: "start",fontWeight:"0" }}>Product</div>
        ),
        accessor: "name",
       
       
      },
      {
        Header: () => (
          <div style={{ display: "flex", justifyContent: "start",fontWeight:"0" }}>Size</div>
        ),
        accessor: "size",
        Cell: ({ value }) => {
         
          return (
            <div
              style={{ display: "flex", justifyContent: "center",fontWeight:"0" }}
            >
              {value}
              
           
          
            </div>
          );
        },
       
      },
      {
        Header: () => (
          <div style={{ display: "flex", justifyContent: "start",fontWeight:"0" }}>Quantity</div>
        ),
        accessor: "quantity",
        Cell: ({ value }) => {
         
          return (
            <div
              style={{ display: "flex", justifyContent: "center",fontWeight:"0" }}
            >
              {value}
           
          
            </div>
          );
        },
       
      },
      {
        Header: () => (
          <div style={{ display: "flex", justifyContent: "start",fontWeight:"0" }}>Total Price</div>
        ),
        accessor: "total",
        Cell: ({ value }) => {
         
          return (
            <div
              style={{ display: "flex", justifyContent: "center",fontWeight:"0" }}
            >
              {value}
           
          
            </div>
          );
        },
       
      },
      {
        Header:"",
        accessor:"id",
        Cell: ({ row }) => {
         
          return (
            <div
              style={{ color: "rgb(38, 51, 59)", fontSize: "20px", fontWeight: "500", }}
            >
              <DeleteIcon></DeleteIcon>
          
            </div>
          );
        },
      }
    ],
    []
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Table columns={columns} data={data} setData={setData} />
    </div>
  );
}
export default TablerCaller;
