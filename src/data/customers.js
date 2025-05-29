const customers = Array.from({ length: 30 }, (_, i) => ({
    customerId: `CUST${i + 2001}`,
    customerName: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    phone: `+62812${(1000000 + i).toString().padStart(7, '0')}`,
    loyalty: ['Bronze', 'Silver', 'Gold'][i % 3],
  }));
  
  export default customers;
  