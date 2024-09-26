import React, { useState, useEffect } from "react";
import { useFilters, useTable, usePagination } from "react-table";

import "./Table.css"

export default function   Table({ columns, data, Table_header_name }) {
  const [isTableReady, setIsTableReady] = useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
   
    prepareRow,
   
    pageCount,
  
    page,
    rows
    
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Set initial page index and page size
    },
    useFilters,
    usePagination
  );

  return (
  

      
            <table {...getTableProps()}>
            <thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <tr key={key} {...restHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key, ...restColumn } = column.getHeaderProps();
                return (
                  <th key={key} {...restColumn}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
              
              {pageCount > 0 ? (
               <tbody {...getTableBodyProps}>
               {rows.map((row) => {
                 prepareRow(row);
                 const { key, ...restRowProps } = row.getRowProps();
                 return (
                   <tr key={key} {...restRowProps}>
                     {row.cells.map((cell) => {
                       const { key, ...restCellProps } = cell.getCellProps();
                       return (
                         <td key={key} {...restCellProps}>
                           {cell.render("Cell")}
                         </td>
                       );
                     })}
                   </tr>
                 );
               })}
             </tbody>
              ) : null}
            </table>
            
        
     
  );
}
