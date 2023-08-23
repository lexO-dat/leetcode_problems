

//descripcion del problema:
//given an array of integers and a target value, return the indices of the two numbers that add up to the target value.
//you may assume that each input would have exactly one solution, and you may not use the same element twice.
//you can return the answer in any order.

const twoSum = (nums, target) => {
    let final = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                final.push(i);
                final.push(j);
                return final;
            }
        }
    }
}