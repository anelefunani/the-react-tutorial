/*
    Code from Mozilla Developer Network
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */
export const GroupByKey = (objectArray: any[], property: any) => {
    return objectArray.reduce((acc: any, obj: any) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}