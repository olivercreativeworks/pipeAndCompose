/**
 * A helper type for zip definition.
 * @template {Array<unknown>} A
 * @typedef {A extends Array<unknown> ? A[number] : A} FlatArray 
 */

/**
 * Combines elements at the same index across arrays into a new array. If the arrays have different lengths, the new array will be the same length as the shortest array.
 * @template {Array<unknown>} A, B, C
 * @param {[A, ...C, B]} arrays
 * @return {Array<A[number] | FlatArray<C[number]> | B[number]>[]}
 */
function zip(...arrays){
  const length = Math.min(...arrays.map(x => x.length))
  return Array.from({length}, (_,i) => arrays.map(x => x.at(i)))
}