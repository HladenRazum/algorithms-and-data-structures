// function areThereDuplicates(...args) {
//   if (args.length === 0) {
//     return false
//   }

//   const sortedArgs = args.sort()

//   for (let i = 0; i < sortedArgs.length - 1; i++) {
//     if (sortedArgs[i] === sortedArgs[i + 1]) {
//       return true
//     }
//   }

//   return false
// }

function areThereDuplicates(...args) {
  return new Set(args).size !== args.length
}

// function areThereDuplicates(...args) {
//   if (args.length === 0) {
//     return false
//   }

//   let counter = {}

//   for (const arg of args) {
//     counter[arg] = ++counter[arg] || 1
//   }

//   for (const key in counter) {
//     if (counter[key] > 1) {
//       return true
//     }
//   }

//   return false
// }

module.exports = areThereDuplicates
