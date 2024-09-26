import React, { useState } from 'react'
import Buttons from '../../components/button/button'
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './customer.css'
import {Table} from 'antd';
import { Typography } from '@mui/material';

const Customers = () => {
    const [selectedOption,setSelectedOption] = useState(1);
    const data = [
        {
          key: '1',
          name: 'John Brown',
          email: "JohnBrown@gmail.com",
          address: 'New York No. 1 Lake Park',
          orders:6,
          spent:5000,
          image:"https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611756.jpg",
          status:2
        },
        {
          key: '2',
          name: 'Jim Green',
          email: 'jimGreen@gmail.com',
          address: 'London No. 1 Lake Park',
          orders:7,
          spent:6300,
          image:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
          status:3
        },
        {
          name: 'Joe Black',
          email: 'joeBlack@gmail.com',
          address: 'Bangalore IT Park',
          orders:12,
          spent:8900,
          image:"https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid",
          status:1
        },
        {
            name: 'JohnWick',
            email: 'johnwick@gmail.com',
            address: 'Chennai near IIt',
            orders:12,
            spent:8900,
            image:"https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg",
            status:1
        },
        {
            name: 'Sergio Ramos',
            email: "sergioramos@gmail.com",
            address: 'Germany tech city',
            orders:6,
            spent:5000,
            image:"https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611756.jpg",
            status:1
          },
          {
            name: 'Tharun',
            email: 'tharun@gmail.com',
            address: 'Bangalore Desingn Institute',
            orders:7,
            spent:6300,
            image:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
            status:1
          },
          {
            name: 'Gautham',
            email: 'Gautham@gmail.com',
            address: 'Chennai IT Park',
            orders:2,
            spent:8900,
            image:"https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid",
            status:1
          },
          {
              name: 'Suresh',
              email: 'suresh@gmail.com',
              address: 'Chennai near IIt',
              orders:9,
              spent:8900,
              image:"https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg",
              status:1
          },
      ];

  const columns = [
      {
        title: 'Customer',
        dataIndex: 'name',
        key: 'name',
        width:200,
        height:50,
        render: (text,record) =>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <div><img src={record.image} alt="" height={"30"} width={"30"} style={{borderRadius:"50%"}}/></div>
            <div> <Typography variant='subtitle2'>{record.name}</Typography> </div>
        </div>
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render:(text,record)=>
        <div>
        <Typography variant='subtitle2'>{record.email}</Typography>
        </div>
      },
      {
        title: 'Location',
        dataIndex: 'address',
        key: 'address',
        render:(text,record)=>
            <div>
            <Typography variant='subtitle2'>{record.address}</Typography>
            </div>
      },
      {
        title: 'Orders',
        dataIndex: 'orders',
        key: 'orders',
        render:(text,record)=>
            <div>
            <Typography variant='subtitle2'>{record.orders + " orders"}</Typography>
            </div>
      },
      {
        title: 'Spent',
        dataIndex: 'spent',
        key: 'spent',
        render:(text,record)=>
            <div style={{display:"flex"}}>
            <CurrencyRupeeIcon/>
            <Typography variant='subtitle2'>{record.spent}</Typography>
            </div>
      },
      {
        title: 'Status',
        dataIndex:'status',
        render:(text,record)=>
        <div>
            <Buttons
            text={record.status===1?"Active":record.status===2?"Not Frequent":"Not Active"}
            background={record.status===1?"#DBFFE1":record.status===2?"#FFED9E":"#E5E6E8"}
            color={record.status===1?"#11A71F":record.status===2?"#E1851C":"#737D8A"}
            borderColor={record.status===1?"#11A71F":record.status===2?"#E1851C":"#737D8A"}
            width={"130px"}
            />
        </div>
      },
  ]

  const options = [
    {
        id:1,
        text:"All Customers"
    },
    {
        id:2,
        text:"Favourites"
    },
    {
        id:3,
        text:"From Chennai"
    },
    {
        id:4,
        text:"From Bangalore"
    },
    {
        id:5,
        text:"Others"
    },
  ]
  const handleoptionChange = (id)=>{
    setSelectedOption(id)
  }
  return (
    <div className='customerDiv'>
      <div className='headerdiv'>
        <div className='buttonDiv'>
            {options.map((button)=>
            <Buttons
            color={selectedOption===button.id?"white":"grey"}
            text={button.text}
            borderRadius={"5px"}
            borderColor={"#f6f6f6"}
            background={selectedOption===button.id?"#1263DF":"#f6f6f6"}
            onClick={()=>handleoptionChange(button.id)}
            />
            )}
        </div>
        <div className='exportAddDiv'>
            <Buttons 
            color={"black"} 
            icon={<DownloadIcon/>} 
            text={"Export"}
            border={"2px solid #f6f6f6"}
            />
            <Buttons 
            color={"white"} 
            icon={<AddIcon/>} 
            text={"Add Customers"}
            border={"2px solid #1263DF"}
            background={"#1263DF"}
            />
        </div>
      </div>
      <div className='tableDiv'>
      <div className='searchDiv'>
      <TextField 
      size='small' 
      placeholder='Search' 
      variant="outlined" 
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        },
      }}
      sx={{
        width:"20vw"
      }}
      />
      </div>
      <Table 
      columns={columns} 
      dataSource={data} 
      className="custom-table"
      pagination={{
        pageSize: 4, // Number of records per page
      }} 
      />
      </div>
    </div>
  )
}

export default Customers
