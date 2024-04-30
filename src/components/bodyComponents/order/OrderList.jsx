// import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import React, { Component } from "react";
// import OrderModal from "./OrderModal";
// import orders from "./listOrders";
// export default class OrderList extends Component {
//   handlOrderDetail = (order) => {
//     console.log("the order is : ", order);
//     this.setState({ order: order, open: true });
//   };
//   handleClose = () => {
//     this.setState({ open: false });
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       order: {},
//       open: false,
//     };
//   }
//   render() {
//     const columns = [
//       {
//         field: "id",
//         headerName: "ID",
//         width: 90,
//         description: "id of the product",
//       },
//       {
//         field: "fullname",
//         headerName: "Full Name",
//         width: 400,
//         description: "customer full name",
//         renderCell: (params) => {
//           return (
//             <>
//               <Avatar alt="name" sx={{ width: 30, height: 30 }}>
//                 Z
//               </Avatar>
//               <Typography variant="subtitle2" sx={{ mx: 3 }}>
//                 {`${params.row.customer.firstName || ""} ${
//                   params.row.customer.lastName || ""
//                 } `}
//               </Typography>
//             </>
//           );
//         },
//       },
//       {
//         field: "mobile",
//         headerName: "Mobile",
//         width: 400,
//         description: "customer phone number ",
//         valueGetter: (params) => params.row.customer.mobile,
//       },
//       {
//         field: "total",
//         headerName: "Total Amount",
//         width: 300,
//         description: "total amount of the order",
//         valueGetter: (params) => {
//           const total = 300;
//           return total;
//         },
//       },
//       {
//         field: "details",
//         headerName: "Order Details",
//         width: 300,
//         description: "the details of the order",

//         renderCell: (params) => {
//           const order = params.row;
//           return (
//             <Button
//               variant="contained"
//               sx={{ bgcolor: "#504099" }}
//               onClick={() => this.handlOrderDetail(order)}
//             >
//               Order Details
//             </Button>
//           );
//         },
//       },
//     ];

//     return (
//       <Box
//         sx={{
//           margin: 3,
//           bgcolor: "white",
//           borderRadius: 2,
//           padding: 3,
//           height: "100%",
//         }}
//       >
//         <DataGrid
//           sx={{
//             borderLeft: 0,
//             borderRight: 0,
//             borderRadius: 0,
//           }}
//           rows={orders}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 10 },
//             },
//           }}
//           pageSizeOptions={[15, 20, 30]}
//           rowSelection={false}
//         />
//         <Modal open={this.state.open} onClose={this.handleClose}>
//           {/*  */}
//           <Box>
//             <OrderModal order={this.state.order} />
//           </Box>
//         </Modal>
//       </Box>
//     );
//   }
// }



import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Component } from "react";
import OrderModal from "./OrderModal";
import orders from "./listOrders";

export default class OrderList extends Component {
  handlOrderDetail = (order) => {
    console.log("the order is : ", order);
    this.setState({ order: order, open: true });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

  constructor(props) {
    super(props);
    this.state = {
      order: {},
      open: false,
    };
  }

  // Function to calculate total amount based on customer
  calculateTotal = (customer) => {
    let total = 0;
  
    // Example logic to calculate total amount based on customer properties
    switch(customer.position) {
      case "Product Manager":
        total = 500;
        break;
      case "Marketing Manager":
        total = 700;
        break;
      case "HR Manager":
        total = 600;
        break;
      case "Finance Manager":
        total = 800;
        break;
      case "Data Analyst":
        total = 400;
        break;
      case "Content Writer":
        total = 500;
        break;
      case "Operations Manager":
        total = 600;
        break;
      // Add more cases as needed
      default:
        total = 300;
        break;
    }
  
    // Add more conditions based on other customer properties
    if (customer.age < 30) {
      total += 100;
    } else if (customer.age >= 30 && customer.age < 50) {
      total += 200;
    } else {
      total += 300;
    }
  
    // Add more conditions as needed
  
    return total;
  };
  

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
          const fullName = `${params.row.customer.firstName || ""} ${params.row.customer.lastName || ""}`;
          const firstLetter = fullName.charAt(0).toUpperCase();
          return (
            <>
              <Avatar alt={fullName} sx={{ width: 30, height: 30 }}>
                {firstLetter}
              </Avatar>
              <Typography variant="subtitle2" sx={{ mx: 3 }}>
                {fullName}
              </Typography>
            </>
          );
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 300,
        description: "customer phone number ",
        valueGetter: (params) => params.row.customer.mobile,
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 300,
        description: "total amount of the order",
        valueGetter: (params) => {
          const total = this.calculateTotal(params.row.customer);
          return total;
        },
      },
      {
        field: "details",
        headerName: "Order Details",
        width: 300,
        description: "the details of the order",
        renderCell: (params) => {
          const order = params.row;
          return (
            <Button
              variant="contained"
              sx={{ bgcolor: "#504099" }}
              onClick={() => this.handlOrderDetail(order)}
            >
              Order Details
            </Button>
          );
        },
      },
    ];

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
          rows={orders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
        <Modal open={this.state.open} onClose={this.handleClose}>
          <Box>
            <OrderModal order={this.state.order} />
          </Box>
        </Modal>
      </Box>
    );
  }
}
