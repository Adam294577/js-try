const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' },
    { name: '白米', category: '五穀類' },
    { name: '麵包', category: '五穀類' }
  ];
  const groupByCategory = products.groupBy(item => {
    return item.category;
  });
  const groupByCategory2 = products.groupBy(item=>{
    return item.name
  })
  console.log(groupByCategory)
  console.log(groupByCategory2)

