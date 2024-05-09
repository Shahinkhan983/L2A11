function logString(param: unknown): void {
    if (typeof param === 'string') {
        console.log(param);
    } else {
        console.log('input is not a string.');
    }
}

logString("Hello, TypeScript!");
logString(43);