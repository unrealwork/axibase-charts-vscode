    type MessageFactoryMethod = (found: string) => string;
/**
 * Creates a error message for unknown setting or value.
 * @param found the variant found in the user's text
 * @returns message with or without a suggestion
 */
    export const unknownToken: MessageFactoryMethod = (found: string): string => `${found} is unknown.`;
    export const deprecatedTagSection: string = `Replace [tag] sections with [tags].
Enclose the tag name in double quotes in case it contains special characters.

[tag]
  name = k
  value = v
[tag]
  name = my column
  value = my value

[tags]
  k = v
  "my column" = my value
`;
    export const settingsWithWhitspaces: MessageFactoryMethod = (found: string): string =>
    `The setting ${found} contains whitespaces. Replace them with the dash
 ${found.replace("\s+", "-")}.`;

    export const tagNameWithWhiteSpace: MessageFactoryMethod = (found: string): string =>
    `The tag name ${found} contains whitespaces. Wrap it in double quotes.`;
