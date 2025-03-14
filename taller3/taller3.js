function desglosarString(str, tipo) {
    const vocales = 'aeiouAEIOU'
    let count = 0

    for (let char of str) {
        if (tipo === 'vocales' && vocales.includes(char)) {
            count++
        } else if (
            tipo === 'consonantes' &&
            !vocales.includes(char) &&
            /[a-zA-Z]/.test(char)
        ) {
            count++
        }
    }

    return count
}

console.log(
    `desglosarString('murcielagos', 'vocales') => ${desglosarString(
        'murcielagos',
        'vocales'
    )}`
) // 5
console.log(
    `desglosarString('murcielagos', 'consonantes') => ${desglosarString(
        'murcielagos',
        'consonantes'
    )}`
) // 6

function twoSum(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i)
    }

    return []
}

console.log(`twoSum([2, 7, 11, 15], 9) => ${twoSum([2, 7, 11, 15], 9)}`) // [0, 1]
console.log(`twoSum([3, 2, 4], 6) => ${twoSum([3, 2, 4], 6)}`) // [1, 2]

function conversionRomana(roman) {
    const romanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    for (let i = 0; i < roman.length; i++) {
        const current = romanToInt[roman[i]]
        const next = romanToInt[roman[i + 1]]

        if (next && current < next) {
            total -= current
        } else {
            total += current
        }
    }

    return total
}

console.log(`conversionRomana('III') => ${conversionRomana('III')}`) // 3
console.log(`conversionRomana('XIV') => ${conversionRomana('XIV')}`) // 14
console.log(`conversionRomana('MMXXIV') => ${conversionRomana('MMXXIV')}`) // 2024
console.log(`conversionRomana('MXMVII') => ${conversionRomana('MXMVII')}`) // 1994
