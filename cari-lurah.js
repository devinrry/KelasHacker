function cariLurahBaru(calons) {
    if (calons.length !== 0) {
        let data = {};

        for (const x of calons) {
            if (data[x] === undefined) {
                data[x] = 1;
            } else {
                data[x]++;
            }
        }

        let max = Math.max.apply(null, Object.keys(data).map(function (x) {
            return data[x];
        }));

        val = Object.values(data);
        let cek = function (arr) {
            return arr.length === new Set(arr).size;
        };

        if (cek(val) === false) {
            return "pemilihan ulang";
        } else {
            return Object.keys(data).filter(function (x) {
                return data[x] == max;
            })[0];
        }
    } else {
        return -1;
    }
}

console.log(cariLurahBaru([1, 2, 3, 2, 1, 3, 2, 3])); // pemilihan ulang
console.log(cariLurahBaru([1, 2, 3, 2, 1, 3, 3])); // 3
console.log(cariLurahBaru([1])); // 1
console.log(cariLurahBaru([])); // -1