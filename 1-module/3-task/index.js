function ucFirst(str) {
    if (!str) return str;
    if (str === "") return false;
    if (str.length === 1) return str[0].toUpperCase();
    return str[0].toUpperCase() + str.slice(1);
}