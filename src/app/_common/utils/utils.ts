export class Utils {
    constructor() { }

    mapList(map: object) {
        return Object.keys(map).map((key) => ({ value: key, text: map[key] }));
    }
}