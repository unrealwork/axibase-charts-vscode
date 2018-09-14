## addmeta

## aheadtimespan

Show an amount of time ahead of the last series value.<br>Define in percent.

## alertexpression

Apply separate alert rules to several series with one `alert-style` in `[widget]` settings.

## alertrowstyle

## alertstyle

Vertex style upon breach of `alert-expression` condition.

## alias

Create a unique series designation to pass data to other series.

## align

Determine a uniform start time for all periods.<br>Possible values: `START_TIME`, `END_TIME`, `CALENDAR`(default), `FIRST_VALUE_TIME`.

## arcs

## arrowlength

Length of the gauge arrow, measured as `%` of radius.

## arrows

Arrows on the directed edges.

## attribute

Use as an alternative to `metric` setting.<br>If both `table` and `attribute` are defined, `metric = table,attribute`.

## audioalert

Play an audio file when `alert-expression` evaluates to `true`.<br>Store audio files in the `opt/atsd/atsd/conf/portal` directory of your ATSD installation.<br>Set the following path in the `audio-alert` setting: `/portal/resource/alarm.oog`.<br>Files in this directory must always be references with the `/resource/` before the file name.<br>Audio is only played on `true` to `false` changes or vise versa.<br>Audio is played once, on initial alert occurrence.<br>Supported audio alert formats: `.mp3`, `.oog`, `.wav`.

## audioonload

Play audio alert on initial widget load if `audio-alert` setting contains path to audio file and `audio-onload = true`.

## author

## autoheight

Calculate row height automatically based on vertical space allocated to the widget and the number of rows.

## autopadding

Add padding if labels overflow container.

## autoperiod

Automatically define the aggregation period for the series based on the chosen time interval.

## autoscale

Automatically scale the visible portion of the graph.

## axis

Assign series axis.

## axistitle

Label axes.

## axistitleleft

Label left axis.

## axistitleright

Label right axis.

## barcount

Number of bars or distributions.<br>Alternatively control bar count from mouseover menu in the upper right corner of the widget.

## batchsize

Maximum number of series in one batch request to the server.<br>If `0` is specified, the limit is not set.<br>Applies when `batch-update = true`.

## batchupdate

Sending data queries to the server in batches with size specified in `batch-size` setting.<br>If enabled, series for which the request has failed are requested separately from successfully updated series.

## borderwidth

Offset between gauge ring and parent container,measured as `%` of radius.

## bottomaxis

Values displayed on the bottom axis.

## bundle

Hierarchical contraction of edges ([Danny Holten](https://www.researchgate.net/publication/6715561_Hierarchical_Edge_Bundles_Visualization_of_Adjacency_Relations_in_Hierarchical_Data) algorithm).

## bundled

Hierarchical contraction of edges ([Danny Holten](https://www.researchgate.net/publication/6715561_Hierarchical_Edge_Bundles_Visualization_of_Adjacency_Relations_in_Hierarchical_Data) algorithm).

## buttons

## cache

Retrieve the most recent value from the HBase **Last Insert** table.<br>This setting is useful for widget which only display one value: Gauge, Bar, Text, Treemap, etc.

## capitalize

 Capitalize column names. Default: `true`.

## caption

Text displayed on top of the gauge.<br> Caption can be split into multiple lines.<br>HTML markup is supported.

## captionstyle

CSS style applied to caption.

## case

Define case for column headers.

## centralizecolumns

Position columns between ticks instead of directly above ticks.

## centralizeticks

Position time and date markers between instead of under ticks.

## changefield

Widget setting changed upon drop-down list selection. To update the widget subsection setting, use `{section-name}.{setting-name}` syntax. For example, `series.entity` or `keys.mq_manager_name`.

## circle

Displays background circle.

## class

Apply Unix style with black background.

## collapsible

## color

Assign a color to the series.

## colorrange

Color palette automatically assigned to threshold ranges.

## colors

Redefine default palette.<br>Table, Console, Property, Text, and Page widgets do not support this setting.<br>Default palette is defined by the array `window.defaultColors`.

## contextheight

Define the height of the context graph. Used to adjust the displayed timespan.<br>`0` by default for the widget in the main window.<br>`70` by default for the widget in the dialog window.

## contextpath

## counter

## counterposition

Counter position.

## currentperiodstyle

Apply CSS styles to values of the current period, such as the most recent hour, day, or week, in `column` and `column-stack` mode.

## data

Information about the last time series value next to the image of the corresponding vertex.

## datatype

Define current series data type.

## dayformat

Format `x` axis timestamps using Format Syntax.

## defaultcolor

## defaultsize

## depth

Depth of the displayed vertex hierarchy from `1` to the maximum depth of the vertex hierarchy plus `1`<br>Final level corresponds to edges<br>Maximum depth of the hierarchy is default.

## description

## dialogmaximize

## disablealert

Cancel alerts raised by the loaded page.

## disconnectcount

Define average distance between time values in the series<br>If the gap between data is greater than the defined value,a break is displayed.<br>If `disconnect-count = 1`, the disconnect interval is equal to the mean interval.<br>See Disconnect Count Behavior for more information.

## disconnectednodedisplay

Show vertices without edge.

## disconnectinterval

Defines maximum time gap between data during which points of the series line are connected.<br>If the gap between data is greater than the specified interval, a break is displayed.

## disconnectvalue

Apply disconnect value in tandem with disconnect interval or count.<br> Define the value to be applied to disconnected areas.<br>Use this setting when ATSD is not collecting `null` values or those below a minimum threshold.<br>Additionally, toggle display of disconnect value with **Connect Values** on left axis mouseover menu.

## display

Define a rule to display series.<br> Filter series based on metric values for widgets containing many series.

## displaydate

Display the time period captured by the Time Chart.

## displayinlegend

## displaylabels

## displayother

## displaypanels

Display control panels in the top left or right corners in Time and Bar charts.

## displaytags

Display a separate column for each tag in the underlying series.

## displayticks

Display ticks on the axis.

## displaytip

Display last value marker.

## displaytotal

Displays the sum of rectangle sizes such as `size` setting for series.

## displayvalues

Show or hide bar total values.

## downsample

Enable [downsampling](https://axibase.com/docs/atsd/api/data/series/downsample.html#downsampling) for the current chart configuration.

## downsamplealgorithm

Define [downsample algorithm](https://axibase.com/docs/atsd/api/data/series/downsample.html#algorithm) used for calculation.

## downsampledifference

Define deviation between consecutive values which the database considers equivalent.<br>Use this setting to include minor deviations in downsampling.

## downsampleratio

Define downsample [ratio](https://axibase.com/docs/atsd/api/data/series/downsample.html#ratio-check).

## downsamplegap

Control the occurrence of repeated values by defining the gap using time interval.<br>A larger gap value decreases the occurrence of repeated values.

## downsampleorder

## duration

The duration of a transaction when changing the geometry of the graph in milliseconds.

## effects

Animation when changing the geometry of the graph.

## emptyrefreshinterval

## emptythreshold

## enabled

Hide series in the widget legend based on expression or boolean statement.

## endtime

Specifies the date and time in local or [ISO format](https://axibase.com/docs/atsd/shared/date-format.html) until which the values for the series are loaded.<br>The setting can be overridden by each widget separately.<br>Note that `start-time` is **inclusive** and `end-time` is **exclusive**.<br>This means that `start-time = 2017-09-14 10:00:00` includes data points that occurred exactly at `10:00:00` and later whereas `end-time = 2017-09-14 11:00:00` includes data points that occurred up to `10:59:59`, excluding points that occurred at `11:00:00`.<br>The setting supports [calendar](https://axibase.com/docs/atsd/shared/calendar.html) keywords.

## endworkingminutes

## entities

## entity

## entityexpression

## entitygroup

## entitylabel

## errorrefreshinterval

## exactmatch

## expand

## expandpanels

## expandtags

## expiretimespan

## fillvalue

## filterrange

## fitsvg

## fontscale

## fontsize

## forecastname

## forecaststyle

## format

## formataxis

## formatcounter

## formatheaders

## formatnumbers

## formatsize

## formattip

## frequency

## gradientcount

## gradientintensity

## groupfirst

## groupinterpolate

## groupinterpolateextend

## groupkeys

## grouplabel

## groupperiod

## groupstatistic

## headerstyle

## heightunits

## hidden

## hidecolumn

## hideemptycolumns

## hideemptyseries

## hideifempty

## horizontal

## horizontalgrid

## hourformat

## icon

## iconalertexpression

## iconalertstyle

## iconcolor

## iconposition

## iconsize

## id

## interpolate

## interpolateboundary

## interpolateextend

## interpolatefill

## interpolatefunction

## interpolateperiod

## intervalformat

## join

## key

## keytagexpression

## label

## labelformat

## last

## lastmarker

## lastvaluelabel

## layout

## leftaxis

## leftunits

## legendlastvalue

## legendposition

## legendticks

## legendvalue

## limit

## linearzoom

## linkalertexpression

## linkalertstyle

## linkanimate

## linkcolorrange

## linkcolors

## linkdata

## linklabels

## linklabelzoomthreshold

## links

## linkthresholds

## linkvalue

## linkwidthorder

## linkwidths

## loadfuturedata

## markerformat

## markers

## maxfontsize

## maximum

## maxrange

## maxrangeforce

## maxrangeright

## maxrangerightforce

## maxringwidth

## maxthreshold

## menu

## mergecolumns

## mergefields

## methodpath

## metric

## metriclabel

## mincaptionsize

## minfontsize

## minimum

## minorticks

## minrange

## minrangeforce

## minrangeright

## minrangerightforce

## minringwidth

## minseverity

## minthreshold

## mode

## movingaverage

## multiplecolumn

## multipleseries

## negativestyle

## nodealertexpression

## nodealertstyle

## nodecollapse

## nodecolors

## nodeconnect

## nodedata

## nodelabels

## nodelabelzoomthreshold

## noderadius

## nodes

## nodethresholds

## nodevalue

## offset

## offsetbottom

## offsetleft

## offsetright

## offsettop

## onchange

## onclick

## onseriesclick

## onseriesdoubleclick

## options

## padding

## paletteticks

## parent

## path

## percentilemarkers

## percentiles

## period

## periods

## pinradius

## pointerposition

## position

## primarykey

## principal

## rangemerge

## rangeoffset

## rangeselectend

## rangeselectstart

## rate

## ratecounter

## ratio

## refreshinterval

## replaceunderscore

## replacevalue

## responsive

## retaintimespan

## retryrefreshinterval

## rightaxis

## ringwidth

## rotatelegendticks

## rotatepaletteticks

## rotateticks

## rowalertstyle

## rowstyle

## rule

## scale

## scalex

## scaley

## script

## selectormode

## serieslabels

## serieslimit

## seriestype

## seriesvalue

## serveraggregate

## severity

## severitystyle

## showtagnames

## size

## sizename

## smooth

## smoothcount

## smoothfactor

## smoothincompletevalue

## smoothinterval

## smoothminimumcount

## smoothrange

## sort

## source

## stack

## starttime

## startworkingminutes

## statistic

## statistics

## stepline

## style

## summarizeperiod

## summarizestatistic

## table

## tableheaderstyle

## tagexpression

## tagoffset

## tagsdropdowns

## tagsdropdownsstyle

## tension

## thresholds

## ticks

## ticksright

## tickstime

## timeoffset

## timespan

## timezone

## title

## tooltip

## topaxis

## topunits

## totalsize

## totalvalue

## transpose

## type

## unscale

## updateinterval

## url

## urlparameters

## value

## verticalgrid

## widgetsperrow

## width

## widthunits

## zoomsvg

