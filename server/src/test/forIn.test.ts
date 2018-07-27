import * as assert from "assert";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver/lib/main";
import * as Shared from "../sharedFunctions";
import Validator from "../Validator";

suite("for in ... tests", () => {

    test("Correct one-line list, correct for", () => {
        const text =
            "list servers = 'srv1', 'srv2'\n" +
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct one-line list, incorrect for", () => {
        const text =
            "list servers = 'srv1', 'srv2'\n" +
            "for srv in server\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 17, line: 1 },
                    start: { character: 11, line: 1 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("server", "servers"),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct one-line var(array), incorrect for", () => {
        const text =
            "var servers = ['srv1', 'srv2']\n" +
            "for srv in server\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 17, line: 1 },
                    start: { character: 11, line: 1 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("server", "servers"),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct one-line var(array), correct for", () => {
        const text =
            "var servers = ['srv1', 'srv2']\n" +
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct one-line var(props), incorrect for", () => {
        const text =
            "var servers = {'srv1': 'srv2'}\n" +
            "for srv in server\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 17, line: 1 },
                    start: { character: 11, line: 1 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("server", "servers"),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct one-line var(props), correct for", () => {
        const text =
            "var servers = {'srv1': 'srv2'}\n" +
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct multi-line list, correct for", () => {
        const text =
            "list servers = 'srv1', \n" +
            "   'srv2'\n" +
            "endlist\n" +
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct multi-line list, incorrect for", () => {
        const text =
            "list servers = 'srv1', \n" +
            "   'srv2'\n" +
            "endlist\n" +
            "for srv in server\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 17, line: 3 },
                    start: { character: 11, line: 3 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("server", "servers"),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct multi-line var(array), incorrect for", () => {
        const text =
            "var servers = ['srv1', \n" +
            "   'srv2'\n" +
            "]\n" +
            "endvar\n" +
            "for srv in server\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 17, line: 4 },
                    start: { character: 11, line: 4 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("server", "servers"),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct multi-line var(array), correct for", () => {
        const text =
            "var servers = ['srv1', \n" +
            "   'srv2'\n" +
            "]\n" +
            "endvar\n" +
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct multi-line var(props), incorrect for", () => {
        const text =
            "var servers = {\n" +
            "   'srv1': 'srv2'\n" +
            "}\n" +
            "endvar\n" +
            "for srv in server\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 17, line: 4 },
                    start: { character: 11, line: 4 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("server", "servers"),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct multi-line var(props), correct for", () => {
        const text =
            "var servers = {\n" +
            "   'srv1': 'srv2'\n" +
            "}\n" +
            "endvar\n" +
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Correct multi-line var(props), correct for before var", () => {
        const text =
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n" +
            "var servers = {\n" +
            "   'srv1': 'srv2'\n" +
            "}\n" +
            "endvar\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 18, line: 0 },
                    start: { character: 11, line: 0 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("servers", null),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Undeclared var, correct for before var", () => {
        const text =
            "for srv in servers\n" +
            "   #do something\n" +
            "endfor\n" +
            "var servers = {\n" +
            "   'srv1': 'srv2'\n" +
            "}\n" +
            "endvar\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 18, line: 0 },
                    start: { character: 11, line: 0 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, Shared.errorMessage("servers", null),
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

    test("Undeclared var, incorrect for with empty in", () => {
        const text =
            "for srv in \n" +
            "   #do something\n" +
            "endfor\n";
        const document = Shared.createDoc(text);
        const validator = new Validator(document);
        const expected: Diagnostic[] = [Shared.createDiagnostic(
            {
                range: {
                    end: { character: 12, line: 0 },
                    start: { character: 11, line: 0 },
                }, uri: document.uri,
            },
            DiagnosticSeverity.Error, "Empty 'in' statement",
        )];
        const result = validator.lineByLine();
        assert.deepEqual(result, expected);
    });

});
