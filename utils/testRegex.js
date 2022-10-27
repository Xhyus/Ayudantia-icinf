function testRegex(input) {
    let regex = /\..*:.*#.*'/i;
    return regex.test(input);
}

export default testRegex