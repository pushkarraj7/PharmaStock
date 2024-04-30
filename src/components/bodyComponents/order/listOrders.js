import productList from "../inventory/productList";

const customer = {
    firstName: "Aakarsh",
    lastName: "Devansh",
    position: "Software Engineer",
    mobile: "+91 8579684527",
  };

  // const orders = [
  //   {
  //     id: 1,
  //     products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 2,
    
  //     products: [{quantity:5,product:productList[1]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 3,
     
  //     products: [{quantity:5,product:productList[2]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 4,
    
  //     products: [{quantity:5,product:productList[3]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 5,
    
  //     products: [{quantity:5,product:productList[4]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 6,
   
  //     products: [{quantity:5,product:productList[5]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 7,
  
  //     products: [{quantity:5,product:productList[6]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 8,
     
  //     products: [{quantity:5,product:productList[7]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 9,
    
  //     products: [{quantity:5,product:productList[8]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 10,
    
  //     products: [{quantity:5,product:productList[9]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 11,
     
  //     products: [{quantity:5,product:productList[10]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 12,
    
  //     products: [{quantity:5,product:productList[11]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 13,
   
  //     products: [{quantity:5,product:productList[12]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 14,
    
  //     products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 15,
     
  //     products: [{quantity:5,product:productList[12]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 16,
     
  //     products: [{quantity:5,product:productList[3]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 17,
     
  //     products: [{quantity:5,product:productList[5]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 18,
    
  //     products: [{quantity:5,product:productList[6]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  //   {
  //     id: 19,
     
  //     products: [{quantity:5,product:productList[8]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
  //     customer: customer,
  //   },
  // ];

  const orders = [
    {
      id: 1,
      products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Ashin", lastName: "Varghese", position: "Product Manager", mobile: "9820110409" },
    },
    {
      id: 2,
      products: [{quantity:5,product:productList[1]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "AVINASH", lastName: "BARUAH", position: "Marketing Manager", mobile: "9044818730" },
    },
    {
      id: 3,
      products: [{quantity:5,product:productList[2]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Bibhuti", lastName: "Kashyap", position: "Sales Executive", mobile: "9807345614" },
    },
    {
      id: 4,
      products: [{quantity:5,product:productList[3]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Chetan", lastName: "Rathoure", position: "HR Manager", mobile: "9821991836" },
    },
    {
      id: 5,
      products: [{quantity:5,product:productList[4]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Priya", lastName: "K G", position: "Accountant", mobile: "9565581757" },
    },
    {
      id: 6,
      products: [{quantity:5,product:productList[5]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "DIKSHA", lastName: "CHOUDHARY", position: "Software Engineer", mobile: "9579284374" },
    },
    {
      id: 7,
      products: [{quantity:5,product:productList[6]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Fahad", lastName: "Ul Amin", position: "Data Analyst", mobile: "9716682075" },
    },
    {
      id: 8,
      products: [{quantity:5,product:productList[7]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Gaurav", lastName: "Anand", position: "Quality Assurance Manager", mobile: "9639200552" },
    },
    {
      id: 9,
      products: [{quantity:5,product:productList[8]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Hanan", lastName: "Imtiyaz", position: "Operations Manager", mobile: "9532014014" },
    },
    {
      id: 10,
      products: [{quantity:5,product:productList[9]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Harshitha", lastName: "S", position: "Graphic Designer", mobile: "9794049201" },
    },
    {
      id: 11,
      products: [{quantity:5,product:productList[10]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Janardhan", lastName: "raj", position: "Content Writer", mobile: "9026360205" },
    },
    {
      id: 12,
      products: [{quantity:5,product:productList[11]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "K", lastName: "S Sharanya", position: "Customer Service Representative", mobile: "9970000003" },
    },
    {
      id: 13,
      products: [{quantity:5,product:productList[12]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Kasetty", lastName: "Sanketh", position: "Research Analyst", mobile: "9450896264" },
    },
    {
      id: 14,
      products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Kritika", lastName: "", position: "Digital Marketing Specialist", mobile: "9044652640" },
    },
    {
      id: 15,
      products: [{quantity:5,product:productList[12]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: { firstName: "Lahari", lastName: "Patharla Palli", position: "Business Analyst", mobile: "9821438339" },
    },
    // Add more orders with unique mobile numbers as needed
  ];

  export default orders;