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

## captionstyle

## case

## centralizecolumns

## centralizeticks

## changefield

## circle

## class

## collapsible

## color

## colorrange

## colors

## contextheight

## contextpath

## counter

## counterposition

## currentperiodstyle

## data

## datatype

## dayformat

## defaultcolor

## defaultsize

## depth

## description

## dialogmaximize

## disablealert

## disconnectcount

## disconnectednodedisplay

## disconnectinterval

## disconnectvalue

## display

## displaydate

## displayinlegend

## displaylabels

## displayother

## displaypanels

## displaytags

## displayticks

## displaytip

## displaytotal

## displayvalues

## downsample

## downsamplealgorithm

## downsampledifference

## downsampleratio

## downsamplegap

## downsampleorder

## duration

## effects

## emptyrefreshinterval

## emptythreshold

## enabled

## endtime

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

