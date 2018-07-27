import * as assert from "assert";
import { Diagnostic, DiagnosticSeverity, TextDocument } from "vscode-languageserver/lib/main";
import * as Shared from "../sharedFunctions";
import Validator from "../Validator";

suite("Warn about setting interpreted as a tag", () => {

    test("Is not double-quoted", () => {
        const text =
            "[tags]\n" +
            "	starttime = 20 second\n" +
            "	startime = 30 minute\n";
        const document: TextDocument = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: "	".length + "starttime".length, line: 1 },
                    start: { character: "	".length, line: 1 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Information, "starttime is interpreted as a tag",
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Is double-quoted", () => {
        const text =
            "[tags]\n" +
            '	"starttime" = 20 second\n' +
            "	startime = 30 minute\n";
        const document: TextDocument = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Is upper-case with dash", () => {
        const text =
            "[tags]\n" +
            "	stArt-time = 20 second\n" +
            "	startime = 30 minute\n";
        const document: TextDocument = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: "	".length + "stArt-time".length, line: 1 },
                    start: { character: "	".length, line: 1 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Information, "starttime is interpreted as a tag",
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

});
