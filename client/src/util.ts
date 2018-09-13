// @ts-ignore
import pjson from "/package.json";

export class Utils {
    static userAgent(): string {
        return `axibase-charts-extension/${pjson.version}`;
    }
}
