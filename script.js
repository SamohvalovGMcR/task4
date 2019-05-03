Array.prototype.inArray = function(value) {

    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};

const obj = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8
};

const arr = ["", "a", "b", "c", "d", "e", "f", "g", "h"];

let arr1 = [];


const fnPUsh = (str, num) => {

    if (str <= 8 && str > 0 && num > 0 && num <= 8) {
        arr1.push(arr[str] + num);
    }
};

const turn = (str0, num0) => {

    let str1 = obj[str0];
    arr1 = [];

    fnPUsh(+str1 - 1, num0 - 2);
    fnPUsh(+str1 - 2, num0 - 1);
    fnPUsh(+str1 - 2, num0 + 1);
    fnPUsh(+str1 + 1, num0 - 2);
    fnPUsh(+str1 - 1, num0 + 2);
    fnPUsh(+str1 + 2, num0 - 1);
    fnPUsh(+str1 + 1, num0 + 2);
    fnPUsh(+str1 + 2, num0 + 1);
};