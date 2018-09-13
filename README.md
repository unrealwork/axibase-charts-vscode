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
* Install the extension and reload VScode.

## Requirements

* VSCode 1.27.2+

## Support

Include VSCode and the extension version when opening issues on Github.

* The VSCode version is displayed in the main menu, on the **About Visual Studio code** dialog window.

* The extension version can be accessed on the Extensions tab located in the main menu.

## Introduction

Start building a portal usign [Axibase Charts](https://github.com/axibase/charts/blob/master/README.md).

To display the list of available completions, press `Ctrl+Space` on PC or `⌃Space` on Mac.

  ![Completion list screenshot](./images/completion.png)

## Live Preview

The extension can show a preview of the portal directly in the VSCode interface by requesting data from the target server. 

To configure the target server, open **Preferences > Settings** and enter 'axibase' in the search box. Specify connection properties.

Click **Show Preview** button in the top right corner to view the current portal, even if changes are not saved.

Enter the user password, if connecting for the first time.

## Syntax highlighting

Theme used to create the screenshot is `Light+(default light)` (Choose theme by **File > Color theme**).

![Screenshot of highlighted syntax](./images/syntax.png)

## Code prettifier

![GIF animation showing updating indents](./images/formatting.gif)

## Snippets

* `{widget_name}`: creates a new `[widget]` section with a pre-configured sample widget from Charts library
* `configuration`: creates a new `[configuration]` section with child `[group]` section and several initial settings
* `for`: creates a new `for` loop with corresponding `endfor`.
* `if`: creates a new `if` statement with corresponding `endif`.
* `series {type}`, where type one of `with tags`, `detail`, `averaged`: creates a new `[series]` section.
* `portal: 3x2`: creates a new portal with 6 widgets: 3 columns, 2 rows.

## Validation

The following errors are validated by the plugin:

* JS errors (syntax, undefined variables, etc.) when `axibaseCharts.validateFunctions` is `true`:

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

* Dereference unknown `alias`:

  ```txt
  [series]
    alias = s1

  [series]
    value = value('s1')
  ```

* Unfinished `for`, `csv`, `var`, `list`, `script`, `if` blocks:

  ```txt
  list values = value1, value2,
    value3, value4
  # no matching endlist
  ```

* Incorrect `csv`:

  ```txt
  csv servers =
    name, price
    vps, 5
    vds, 5, 4 /* wrong number of columns */
  endcsv
  ```

* Unmatched `endcsv`, `endif`, `endfor`, `endvar`, `endscript`, `endlist`:

  ```txt
  var array = [
    "value1", "value2"
  ]
  endlist
  # endlist can not finish var statement
  ```

* Dereference of an undefined variable in `for` block:

  ```txt
  for server in servers
    [series]
      entity = @{srv} /* for variable is server, but srv is used */
  endfor
  ```

* Usage of an undefined collection in `for` block:

  ```txt
  list servers = vps, vds
  for server in serverc /* misspelling */
    [series]
      entity = @{server}
  endfor
  ```

* `else` or `elseif` statement without corresponding `if`:

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

* Repetition of variable:

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

* Repetition of a setting:

  ```txt
  [series]
    entity = server
    entity = srv /* duplicate setting */
    metric = cpu_busy
  ```

* Omitting of a required setting:

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

* Misspelling in a setting name:

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

* `for` has finished before `if`:

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

* Setting is interpreted as a tag:

  ```txt
  [tags]
    server_name = 'vds'
  time-span = 1 hour
  # time-span will be interpreted as a tag
  ```
  
## User Defined Completions

### Snippets

* To display the list of pre-configured snippets, press `Ctrl+Shift+P` on PC or `⇧⌘P` on Mac, then write `Insert Snippet`.

  ![Snippets list screenshot](./images/snippets.png)

* To add new snippets to your VSCode installation follow the official [documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

* To add new snippets to the extension use `snippets/snippets.json` file. Pre-configured snippets can be used as examples.
