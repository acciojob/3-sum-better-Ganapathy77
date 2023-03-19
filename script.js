function threeSum(arr, target) {
// write your code here
  let closetSum = Number.MAX_VALUE;

	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr.length; j++){
			for(let k=0; k<arr.length; k++){
				if(Math.abs(target - closetSum)> Math.abs(target - (arr[i]+arr[j]+arr[k]))){
					closetSum = Math.abs(arr[i]+arr[j]+arr[k])
				}
			}
		}
	}
	return closetSum
}

module.exports = threeSum;
