import { Hover, Position, Range, TextDocument } from "vscode-languageserver";
import { settingsMap } from "./resources";
import { Setting } from "./setting";

/**
 * Provides hovers for settings
 * @param document the document to provide hover
 * @param place the place from which to start the search
 */
export const provideHover: (document: TextDocument, place: Position) => Hover | undefined =
    (document: TextDocument, place: Position): Hover | undefined => {
        const text: string = document.getText();
        const range: Range | undefined = wordRange(document, place);
        if (!range) {
            return undefined;
        }
        const word: string = text.substr(document.offsetAt(range.start), document.offsetAt(range.end));
        const setting: Setting | undefined = settingsMap.get(Setting.clearSetting(word));

        return setting ? {
            contents: setting.description,
            range,
        } : undefined;
    };

/**
 * Searches the document from the provided place for a non-breakable subset of letters
 * @param document the document to perform search
 * @param place the place from which to start
 */
const wordRange: (document: TextDocument, place: Position) => Range | undefined =
    (document: TextDocument, place: Position): Range | undefined => {
        const text: string = document.getText();
        let startPosition: Position = place;
        let i: number = document.offsetAt(startPosition) - 1;
        while (true) {
            const newPosition: Position = document.positionAt(i);
            if (newPosition.line !== place.line) {
                break;
            }
            if (text.charAt(i) === "=") {
                return undefined;
            }
            startPosition = newPosition;
            i = document.offsetAt(startPosition) - 1;
        }
        let endPosition: Position = place;
        i = document.offsetAt(endPosition) + 1;
        while (true) {
            const newPosition: Position = document.positionAt(i);
            if (newPosition.line !== place.line) {
                break;
            }
            if (text.charAt(i) === "=") {
                break;
            }
            endPosition = newPosition;
            i = document.offsetAt(endPosition) + 1;
        }

        return Range.create(startPosition, endPosition);
    };

/**
 * @param str str to be tested
 * @returns true, if the provided string is a letter
 */
export const isLetter: (str: string) => boolean = (str: string): boolean =>
    str.length === 1 && str.toLowerCase() !== str.toUpperCase();
