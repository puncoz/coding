const fibonacci = (n) => {
    const f = new Map()

    f.set(0, 0)
    f.set(1, 1)

    for (let i = 2; i <= n; i++) {
        f.set(i, f.get(i - 1) + f.get(i - 2))
    }

    return f.get(n)
}

console.log(fibonacci(9))