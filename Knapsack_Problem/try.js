// 物品的重量和价值
const names = ['黃金', '銀', '銅', '鐵'];
const weights = [2, 2, 3, 4];
const values = [5, 3, 4, 5];

// 背包容量
const capacity = 5;

// 动态规划表
const dp = Array.from({ length: weights.length + 1 }, () => Array(capacity + 1).fill(0));

console.log(dp);
// 用于记录选取的物品名称组合的表格
const selectedItems = Array.from({ length: weights.length + 1 }, () => Array(capacity + 1).fill([]));
// console.log(selectedItems);

// 填充动态规划表
for (let i = 1; i <= weights.length; i++) {
  for (let j = 1; j <= capacity; j++) {
    // 如果当前物品的重量小于等于背包容量
    if (weights[i - 1] <= j) {
      // 计算选择当前物品和不选择当前物品的两种情况，取较大值
      const takeItemValue = dp[i - 1][j - weights[i - 1]] + values[i - 1];
      dp[i][j] = Math.max(dp[i - 1][j], takeItemValue);

      // 如果选择当前物品会得到更大价值，则更新选取的物品名称组合
      if (takeItemValue > dp[i - 1][j]) {
        selectedItems[i][j] = [...selectedItems[i - 1][j - weights[i - 1]], names[i - 1]];
      } else {
        // 否则，保持与上一行相同的选取物品名称组合
        selectedItems[i][j] = selectedItems[i - 1][j];
      }
    } else {
      // 如果当前物品的重量大于背包容量，则保持与上一行相同的值和选取物品名称组合
      dp[i][j] = dp[i - 1][j];
      selectedItems[i][j] = selectedItems[i - 1][j];
    }
  }
}

// 最终结果为 dp[weights.length][capacity]
const maxValue = dp[weights.length][capacity];
const selectedNames = selectedItems[weights.length][capacity];

console.log(`在背包容量为 ${capacity} 的情况下，最大的总价值为 ${maxValue}。`);
console.log(`选取的物品有: ${selectedNames.join(' + ')}`);
