import { strictEqual } from "assert";
import { commands, Diagnostic, languages, TextDocument, Uri, window, workspace } from "vscode";
import { getDocUri, sleep } from "./helper";

suite("Should diagnostics", () => {
    test("display actual count of diagnostic messages when open", async () => {
        const docUri: Uri = getDocUri("simple.config");
        const document: TextDocument = await workspace.openTextDocument(docUri);
        await window.showTextDocument(document);
        await sleep(4000);
        const actualDiagnostic: Diagnostic[] = languages.getDiagnostics(docUri);
        strictEqual(actualDiagnostic.length, 1, "Incorrect number of messages for file");
        await commands.executeCommand("workbench.action.closeActiveEditor");
    });

    test("clear messages after close", async () => {
        const docUri: Uri = getDocUri("simple.config");
        const document: TextDocument = await workspace.openTextDocument(docUri);
        await window.showTextDocument(document);
        await commands.executeCommand("workbench.action.closeActiveEditor");
        await sleep(2000);
        const actualDiagnostic: Diagnostic[] = languages.getDiagnostics(docUri);
        strictEqual(actualDiagnostic.length, 0);
    });

});
