const finalGrade = (str) => {
    let str1 = ``;
    for(let i = str.length-1;i>=0;i--){
        str1 = str1 + str[i];
    }
    document.write(str1 + '<br />');
    document.write(str1 + '<br />');
    return str1;
}