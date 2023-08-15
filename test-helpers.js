function expect(actual) {
    return {
        toBe(expected) {
            if(actual !== expected) {
                throw new Error(`Expect ${actual} to be ${expected}`)
            }
        }
    }
}

async function test(title, callback) {
    try {
        await callback()
        console.log(`✅ ${title}`)
    } catch(error) {
        console.error(`❌ ${title}`)
        console.error(error)
    }
}

// global.test = test;
// global.expect = expect;

module.exports = {test, expect}