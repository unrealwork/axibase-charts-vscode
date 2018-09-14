import { Script } from "./script";

export class Setting {
    /**
     * Lower-cases, trims the string and deletes all non-alphabetic characters
     * @param str string to be cleared
     * @returns cleared string
     */
    public static clearSetting: (str: string) => string = (str: string): string => str.trim()
        .toLowerCase()
        .replace(/[^a-z]/g, "")

    public readonly defaultValue?: string | number | boolean;
    public readonly description: string = "";
    public readonly displayName: string = "";
    public readonly enum: string[] = [];
    public readonly example: string | number | boolean = "";
    public readonly excludes: string[] = [];
    public readonly maxValue: number = Infinity;
    public readonly minValue: number = -Infinity;
    public readonly multiLine: boolean = false;
    public readonly name: string = "";
    public readonly script?: Script;
    public readonly section?: string;
    public readonly type: string = "";

    public constructor(setting?: Setting, description?: string) {
        Object.assign(this, setting);
        if (description) {
            this.description = description;
        }
        this.enum = this.enum.map((v: string): string => v.toLowerCase());
        this.name = Setting.clearSetting(this.displayName);
    }
}
