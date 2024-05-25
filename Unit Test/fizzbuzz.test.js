import { fizzbuzzProg } from "./fizzbuzz";

test('if number is divisible by 3 & 5 should return fizzbuzz', ()=>{
    expect(fizzbuzzProg(15)).toBe('fizzbuzz')
})
test('if number is divisible by 3  should return fizz', ()=>{
    expect(fizzbuzzProg(6)).toBe('fizz')
})
test('if number is divisible by 5 should return buzz', ()=>{
    expect(fizzbuzzProg(10)).toBe('buzz')
})