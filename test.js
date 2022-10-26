// # def canSum(target, numbers, memo={}):
// #   if target in memo:
// #       return memo[target]

// #   if target < 0 : return None
// #   if target == 0 : return []

// #   least_sums = None
// #   for i in numbers:

// #     remainder = target - i
// #     result = canSum(remainder, numbers)

// #     if result != None:
// #        memo[target] = result + [i]

// #        if least_sums == None:
// #            least_sums = memo[target]
// #        else:
// #            if len(least_sums) > len(memo[target]):
// #                least_sums = memo[target]

// #   return least_sums

// # print(canSum(100,[1,2,5,25]))

// def bestSum(target, numbers, memo = {}):
//     if target in memo:
//         return memo[target]
//     if target < 0 :
//        return None
//     if target == 0:
//         return 0

//     least_count = float('inf')
//     for i in numbers:
//         result = bestSum(target - i, numbers, memo)

//         if result != None:
//             memo[target] = result + 1

//             if least_count > memo[target]:
//                 least_count = memo[target]

//     return least_count

// print(bestSum(27,[2,5,10,1]))

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination == null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
console.log(bestSum(27, [2, 5, 10, 1]));
