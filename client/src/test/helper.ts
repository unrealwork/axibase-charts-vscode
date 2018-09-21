/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
"use strict";

import * as path from "path";
import * as vscode from "vscode";
import { Extension, Uri } from "vscode";
import { appId } from "../util";

export let doc: vscode.TextDocument;
export let editor: vscode.TextEditor;
export let documentEol: string;
export let platformEol: string;

/**
 * Activates the vscode.lsp-sample extension
 */
export async function activate(docUri: vscode.Uri) {
    // The extensionId is `publisher.name` from package.json
    console.log(appId);
    const ext: Extension<any> | undefined = vscode.extensions.getExtension(appId);
    if (ext) {
        await ext.activate();
        try {
            doc = await vscode.workspace.openTextDocument(docUri);
            editor = await vscode.window.showTextDocument(doc);
            await sleep(2000); // Wait for server activation
        } catch (e) {
            throw new Error(`Failed to activate extension ${e.message}`);
        }
    }
}

type TimeoutResolver = (...args: any[]) => void;

export async function sleep(ms: number): Promise<TimeoutResolver> {
    return new Promise((resolve: TimeoutResolver) => setTimeout(resolve, ms));
}

export const getDocPath: (p: string) => string = (p: string): string =>
    path.resolve(__dirname, "../../testFixture", p);

export const getDocUri: (p: string) => Uri = (p: string): Uri =>
    vscode.Uri.file(getDocPath(p));
