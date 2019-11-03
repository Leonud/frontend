const finalGrade = (let) => {
    for (let i = 2; i <= let - 1; i++) {
        if (let % i == 0) {
            document.write("false");
            return false;
        }
    }
    document.write("true");
    return true;
}
