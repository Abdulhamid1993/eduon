export const priceFormat = (x?: any, isNum?: any) => {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    if(isNum){
        return parts.join(".");
    }
    return parts.join(".")+" So'm";
}