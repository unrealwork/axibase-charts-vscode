[![](https://vsmarketplacebadge.apphb.com/version-short/Axibase.axibasecharts-syntax.svg)](https://marketplace.visualstudio.com/items?itemName=Axibase.axibasecharts-syntax)
# Axibase Charts for VSCode

**Axibase Charts** extension for Microsoft [Visual Studio Code](https://code.visualstudio.com/) is a design tool that simplifies portal development and data exploration using the [Axibase Charts](https://github.com/axibase/charts/blob/master/README.md) library of declarative graphics.

The extension implements the following functionality:

* Code highlighting
* Syntax validation
* Auto-completion
* Settings reference
* Live preview

## Installation

* Open VSCode and click **Extensions** tab in the left menu.
* Search for `axibase` in the VSCode Extensions Marketplace.
* Install the extension and reload VSCode.

![](./images/install-ext.png)

## Requirements

* VSCode 1.27.2+

## Support

Include VSCode and the extension version when opening issues on Github.

* The VSCode version is displayed in the main menu, on the **About Visual Studio code** dialog window.

  ![](./images/vscode-version.png)

* The extension version can be accessed on the Extensions tab located in the main menu.

  ![](./images/ext-version.png)

## Introduction

Start building a portal usign [Axibase Charts](https://github.com/axibase/charts/blob/master/README.md).

To display the list of available completions, press `Ctrl+Space` on PC or `⌃Space` on Mac.

  ![Completion list screenshot](./images/completion.png)

## Live Preview

The extension can show a preview of the portal directly in the VSCode interface by requesting data from the target server.

To configure the target server, open **Preferences > Settings** and enter 'axibase' in the search box.

Specify connection properties.

![](./images/vscode-settings.png)

Click **Show Preview** button in the top right corner to view the current portal.

![](./images/preview-button.png)

> The portal is rendered based on the configuration displayed in the editor pane, even if the text is not saved.

Enter the user password, if connecting for the first time.

![](./images/preview-example.png)

### SSL Certificates

VSCode does not allow secure connections to servers with untrusted (self-signed) SSL certificates.

To resolve certificate validation errors:

* Add the self-signed SSL certificate from the target server to root CAs on the operating system where VSCode is installed. Restart VSCode.

* Start VSCode with `code --ignore-certificate-errors` command to [skip certificate validation](https://code.visualstudio.com/docs/setup/network#_ssl-certificates).

  To launch VScode with `code --ignore-certificate-errors`, add code to `PATH` by typing `⇧⌘P`, then `ShelC` on Mac.

  ![](./images/shelc.png)

## Syntax highlighting

Syntax highlighting is based on colors defined in VSCode themes. To choose a different theme, for example `Light+(default light)`, click **File > Color theme**.

![Screenshot of highlighted syntax](./images/syntax.png)

## Code Formatting

![GIF animation showing updating indents](./images/formatting.gif)

## Snippets

* `{widget_name}`: creates a new `[widget]` section with a pre-configured sample widget
* `configuration`: creates a new `[configuration]` section with child `[group]` section and several initial settings
* `for`: creates a new `for` loop with corresponding `endfor`.
* `if`: creates a new `if` statement with corresponding `endif`.
* `series {type}`, where type one of `with tags`, `detail`, `averaged`: creates a new `[series]` section.
* `portal: 3x2`: creates a new portal with 6 widgets: 3 columns, 2 rows.

## Validation

* Unknown `alias`.

  ```txt
  [series]
    alias = s1

  [series]
    value = value('a1')
  ```

* Incomplete `for`, `csv`, `var`, `list`, `script`, `if` blocks.

  ```txt
  list values = value1, value2,
    value3, value4
  # no matching endlist
  ```

* Malformed `csv` definition.

  ```txt
  csv servers =
    name, price
    vps, 5
    vds, 5, 4 /* wrong number of columns */
  endcsv
  ```

* Unmatched tags `endcsv`, `endif`, `endfor`, `endvar`, `endscript`, `endlist`.

  ```txt
  var array = [
    "value1", "value2"
  ]
  endlist
  # endlist can not finish var statement
  ```

* Undefined variable in `for` loop.

  ```txt
  for server in servers
    [series]
      entity = @{srv} /* for variable is server, but srv is used */
  endfor
  ```

* Undefined collection in `for` loop.

  ```txt
  list servers = vps, vds
  for server in serverc /* misspelling */
    [series]
      entity = @{server}
  endfor
  ```

* `else` or `elseif` statement without corresponding `if`.

  ```txt
  for item in collection
    [series]
    # no 'if' keyword
    elseif item == 'vps'
      metric = vps
    else
      metric = vds
    endif
  endfor
  ```

* Duplicate variable definition.

  ```txt
  list collection = value1, value2
  var collection = [ "value1", "value2" ]
  # duplicate variable name
  ```

  ```txt
  for server in servers
    for server in servers
      # duplicate variable name
    endfor
  endfor
  ```

* Duplicate settings.

  ```txt
  [series]
    entity = server
    entity = srv /* duplicate setting */
    metric = cpu_busy
  ```

* Required setting missing.

  ```txt
  [widget]
    # type is required
    [series]
    ...
  ```

  ```txt
  [series]
    entity = server
    # metric is required
  [widget]
  ```

* Misspelled settings.

  ```txt
  [wigdet]
    # "wigdet" instead of "widget"
    type = chart
  ```

  ```txt
  [series]
    startime = now
    # "startime" instead of "starttime"
  ```

* `for` has finished before `if`.

  ```txt
  for server in servers
    [series]
      if server == 'vps'
        entity = 'vds'
      else
        entity = 'vps'
  endfor
  # if must be finished inside the for
  endif
  ```

* Setting is interpreted as tag.

  ```txt
  [tags]
    server_name = 'vds'
  time-span = 1 hour
  # time-span will be interpreted as a tag
  ```

* JavaScript errors if `axibaseCharts.validateFunctions` is `true`:

  ```txt
  script
    widget = hello() // widget is allowed variable, since it comes from Charts
    // hello() is unknown function, the plugin warns about it
  endscript
  ```

  ```txt
  [series]
    value = 5 + ; // forgotten operand
  ```

## User Defined Completions

### Snippets

* To display the list of pre-configured snippets, press `Ctrl+Shift+P` on PC or `⇧⌘P` on Mac, then write `Insert Snippet`.

  ![Snippets list screenshot](./images/snippets.png)

* To add new snippets, follow the official [documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

* To add new snippets to the extension use `snippets/snippets.json` file using pre-configured snippets as examples.
