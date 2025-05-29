const orders = Array.from({ length: 30 }, (_, i) => ({
    orderId: `ORD${i + 1001}`,
    customerName: `Customer ${i + 1}`,
    status: ['Pending', 'Completed', 'Cancelled'][i % 3],
    totalPrice: `${(Math.random() * 500).toFixed(2)}`,
    orderDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
  }));
  
  export default orders;
  