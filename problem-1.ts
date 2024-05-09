function repeatString(str: string, num: number): string {
    let result: string = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

console.log(repeatString('hello!', 3)); 