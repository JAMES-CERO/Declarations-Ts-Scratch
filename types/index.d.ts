declare module 'lodash' {
    function multiply(a: number, b:number): number

    // the below is an example of function overloading
    function reverse(arr: string[]):string[]
    function reverse(arr: number[]):number[]
    // using the generic below replaces the need for function overloading.

    //union type can be used for an array with multiple types
    function dropRight(arr: (string|number)[], dropped: number):(string|number)[]
}