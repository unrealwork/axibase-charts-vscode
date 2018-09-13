#!/usr/bin/env bash

cp -R ./client/src/* ~/.vscode/extensions/axibase-charts/client/src/
cd ~/.vscode/extensions/axibase-charts/
npm install && npm run compile
