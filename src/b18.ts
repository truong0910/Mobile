//18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().

class MathUtil {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// test
console.log(MathUtil.add(5, 3)); 
console.log(MathUtil.subtract(5, 3)); 
console.log(MathUtil.multiply(5, 3)); 
