module.exports = function towelSort(matrix) {
  const ans = [];
  if (arguments.length === 0) {
    return ans;
  }
  matrix.forEach((item, index) => {
    if (index % 2 === 0) {
      ans.push(...item);
    } else {
      ans.push(...item.reverse());
    }
  });
  return ans;
};
