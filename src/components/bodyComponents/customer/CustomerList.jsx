import { Component } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import customers from "./Customers";
export default class CustomerList extends Component {
  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        description: "id of the product",
      },
      {
        field: "fullname",
        headerName: "Full Name",
        width: 300,
        description: "customer full name",
        renderCell: (params) => {
          const firstName = params.row.firstName || "";
          const lastName = params.row.lastName || "";
          const initials = firstName.charAt(0).toUpperCase();
          return (
            <>
              <Avatar
                alt={firstName}
                variant="square"
                sx={{ borderRadius: 1, width: 30, height: 30 }}
              >
                {initials}
              </Avatar>
              <Typography variant="subtitle2" sx={{ mx: 3 }}>
                {`${firstName} ${lastName}`}
              </Typography>
            </>
          );
        },
      },
      {
        field: "orderNumber",
        headerName: "Number Of Order",
        width: 200,
        description: "number of order that the customer made",
        valueGetter: (params) => {
          const total = 3;
          return total;
        },
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 200,
        description: "total amount of the order",
        valueGetter: (params) => {
          const total = 1300;
          return total;
        },
      },
      {
        field: "orderHistory",
        headerName: "Order Details",
        width: 200,
        description: "the details of the order",
        valueGetter: (params) => {
          const randomMonth = Math.floor(Math.random() * 12) + 1;
          const randomDay = Math.floor(Math.random() * 28) + 1;
          const year = 2023;
          const month = randomMonth < 10 ? `0${randomMonth}` : `${randomMonth}`;
          const day = randomDay < 10 ? `0${randomDay}` : `${randomDay}`;
          return `${month}/${day}/${year}`;
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 200,
        description: "total amount of the order",
      },
    ];
    const rows = customers;
    return (
      <Box
        sx={{
          margin: 3,
          bgcolor: "white",
          borderRadius: 2,
          padding: 3,
          height: "100%",
        }}
      >
        <DataGrid
          sx={{
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
        <Box></Box>
      </Box>
    );
  }
}
