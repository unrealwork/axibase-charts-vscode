import { Diagnostic, DiagnosticSeverity, Range } from "vscode-languageserver";
import { settingsMap } from "./resources";
import { Setting } from "./setting";

const DIAGNOSTIC_SOURCE: string = "Axibase Charts";

/**
 * @param value the value to find
 * @param map the map to search
 * @returns true if at least one value in map is/contains the wanted value
 */
export function isInMap<T>(value: T, map: Map<string, T[]> | Map<string, T[][]>): boolean {
    if (value === undefined) {
        return false;
    }
    for (const array of map.values()) {
        for (const item of array) {
            if ((Array.isArray(item) && item.includes(value)) || (item === value)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * @param target array of aliases
 * @param array array to perform the search
 * @returns true, if array contains a value from target
 */
export function isAnyInArray<T>(target: T[], array: T[]): boolean {
    for (const item of target) {
        if (array.includes(item)) {
            return true;
        }
    }

    return false;
}
/**
 * @param name name of the wanted setting
 * @returns the wanted setting or undefined if not found
 */
export const getSetting: (name: string) => Setting | undefined = (name: string): Setting | undefined => {
    const clearedName: string = Setting.clearSetting(name);

    return settingsMap.get(clearedName);
};

/**
 * @param line a CSV-formatted line
 * @returns number of CSV columns in the line
 */
export function countCsvColumns(line: string): number {
    if (line.length === 0) {
        return 0;
    }
    const regex: RegExp = /(['"]).+\1|[^, \t]+/g;
    let counter: number = 0;
    while (regex.exec(line) !== null) {
        counter++;
    }

    return counter;
}

/**
 * Short-hand to create a diagnostic with undefined code and a standardized source
 * @param range Where is the mistake?
 * @param severity How severe is that problem?
 * @param message What message should be passed to the user?
 */
export const createDiagnostic: (range: Range, severity: DiagnosticSeverity, message: string) => Diagnostic =
    (range: Range, severity: DiagnosticSeverity, message: string): Diagnostic =>
        Diagnostic.create(range, message, severity, undefined, DIAGNOSTIC_SOURCE);

/**
 * Replaces all comments with spaces
 * @param text the text to replace comments
 * @returns the modified text
 */
export const deleteComments: (text: string) => string = (text: string): string => {
    let content: string = text;
    const multiLine: RegExp = /\/\*[\s\S]*?\*\//g;
    const oneLine: RegExp = /^[ \t]*#.*/mg;
    let match: RegExpExecArray | null = multiLine.exec(content);
    if (match === null) {
        match = oneLine.exec(content);
    }

    while (match !== null) {
        const newLines: number = match[0].split("\n").length - 1;
        const spaces: string = Array(match[0].length)
            .fill(" ")
            .concat(Array(newLines).fill("\n"))
            .join("");
        content = `${content.substr(0, match.index)}${spaces}${content.substr(match.index + match[0].length)}`;
        match = multiLine.exec(content);
        if (match === null) {
            match = oneLine.exec(content);
        }
    }

    return content;
};

/**
 * Replaces scripts body with newline character
 * @param text the text to perform modifications
 * @returns the modified text
 */
export const deleteScripts: (text: string) => string = (text: string): string =>
    text.replace(/\bscript\b([\s\S]+?)\bendscript\b/g, "script\nendscript");
/**
 * @returns true if the current line contains white spaces or nothing, false otherwise
 */
export const isEmpty: (str: string) => boolean = (str: string): boolean => /^\s*$/.test(str);

/**
 * Creates a diagnostic for a repeated setting. Warning if this setting was
 * multi-line previously, but now it is deprecated, error otherwise.
 * @param range The range where the diagnostic will be displayed
 * @param variable The setting, which has been repeated
 * @param name The name of the setting which is used by the user
 */
export const repetitionDiagnostic: (range: Range, variable: Setting, name: string) => Diagnostic =
    (range: Range, variable: Setting, name: string): Diagnostic => {
        const diagnosticSeverity: DiagnosticSeverity =
            (["script", "thresholds", "colors"].includes(variable.name)) ?
                DiagnosticSeverity.Warning : DiagnosticSeverity.Error;
        let message: string;
        switch (variable.name) {
            case "script": {
                message =
                    "Multi-line scripts are deprecated.\nGroup multiple scripts into blocks:\nscript\nendscript";
                break;
            }
            case "thresholds": {
                message = `Replace multiple \`thresholds\` settings with one, for example:
thresholds = 0
thresholds = 60
thresholds = 80

thresholds = 0, 60, 80`;
                break;
            }
            case "colors": {
                message = `Replace multiple \`colors\` settings with one, for example:
colors = red
colors = yellow
colors = green

colors = red, yellow, green`;
                break;
            }
            default:
                message = `${name} is already defined`;
        }

        return createDiagnostic(range, diagnosticSeverity, message);
    };
