/**
 * See (compose)[https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch5.html#functional-husbandry]
 * @template A, B
 * @template {unknown} C, D, 
 * @template {(x:unknown) => unknown} E
 * @template {...E} G
 * @param {[(x:D) => B, ...G, (x:A) => C, A]} myArgs
 * @return {B}
 */
function compose(...myArgs){
  return myArgs.slice(0,-1).reduceRight((prevResult, currFn) => currFn(prevResult), myArgs.at(-1))
}

/**
 * A (curried)[https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch4.html] version of compose.
 * @template A, B, C, D
 * @template {(x:unknown) => unknown} E
 * @template {...E} G
 * @param {[(x:C) => D, ...G, (x:A) => B]} myArgs
 */
function composeCurry(...myArgs){
  /**
   * @param {A} firstArg
   * @return {D}
   */
  return firstArg => myArgs.reduceRight((prevResult, currFn) => currFn(prevResult), firstArg)
}

/**
 * (Compose)[https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch5.html#functional-husbandry] in the opposite direction. Seems to work better than compose with jsdocs type hints.
 * @template A, B, C, D
 * @template {(x:unknown) => unknown} E
 * @template {...E} G
 * @param {[A, (x:A) => B, ...G, (x:C) => D]} myArgs
 * @return {D}
 */
function pipe(...myArgs){
  return myArgs.slice(1).reduce((prevResult, currFn) => currFn(prevResult), myArgs.at(0))
}

/**
 * A (curried)[https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch4.html] version of pipe.
 * @template A, B, C, D
 * @template {(x:unknown) => unknown} E
 * @template {...E} G
 * @param {[(x:A) => B, ...G, (x:C) => D]} myArgs
 */
function pipeCurry(...myArgs){
  /** 
   * @param {A} firstArg
   * @return {D}
   */
  return firstArg => {
    return myArgs.reduce((prevResult, currFn) => currFn(prevResult), firstArg)
  }
}