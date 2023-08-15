const { sumAsync, subAsync } = require("./math.js")

let result, expected

test('Sub subtract numbers', async() => {
    result = await subAsync(7,3); 
    expected = 4;
    expect(result).toBe(expected);
})

test('Sum adds numbers', async() => {
    result = await sumAsync(7,3); 
    expected = 10;
    expect(result).toBe(expected);
})
