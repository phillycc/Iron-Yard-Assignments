```html
float

float: left
float: right
float: none

#sidebar {
  float: right;
}
```
Specifies whether or not an element should be placed along the left or right side of its container, where text and inline elements will wrap around it. One caveat is that absolutely positioned elements ignore the float property.

```html
clear

clear: none
clear: left
clear: right
clear: both

<div style="clear:both">
```
Makes the element drop below any floated elements that precede it in the document. Can also use clear:left or clear:right to make it drop below only those elements that have been floated left or right.


```html
position

position: static
position: relative
position: absolute
position: fixed
position: sticky
```


```html
rgb()

rgb(255,0,51)
rgb(100%,0%,20%)
```


```html
line-height

```

```html
display


```


```html
color
```
Sets the foreground color of an element's text content, and its decorations.

```html
border-color
```
Shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color

```html
border-left-color
```
Sets the color of the left border of an element.

```html
border-right-color
```
Sets the color of the right border of an element.

```html
border-top-color
```
Sets the color of the top border of an element.

```html
border-bottom-color
```
Sets the color of the bottom border of an element.

```html
outline-color
```
Sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.

```html
text-decoration-color
```
Sets the color used when drawing underlines, overlines, or strike-throughs.

```html
background-color
```
Sets the background color of an element, either through a color value or the keyword transparent.

```html
column-rule-color
```
Set the color of the rule drawn between columns in multi-column layouts.

```html
text-align

1. (http://www.w3schools.com/cssref/pr_text_text-align.asp)

h1 { text-align: center; }

h2 { text-align: left; }

h3 { text-align: right; }

2. (https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

div { text-align: center; border:solid; }

3. (http://css-tricks.com/almanac/properties/t/text-align/)

p { text-align: center; }
```
Specifies the horizontal alignment of text in an element.

```html
text-decoration

1. (http://meyerweb.com/eric/articles/webrev/199806.html)

H4 {text-decoration: underline overlie;}

2. (http://htmldog.com/reference/cssproperties/text-decoration/)

a:hover { text-decoration: none; }

3. (http://www.tagindex.net/css/text/text_decoration.html)

#example1 { text-decoration: underline; }
#example2 { text-decoration: overline; }
#example3 { text-decoration: line-through; }
#example4 { text-decoration: blink; }
#example5 { text-decoration: underline overline; }
#example6 { text-decoration: none; }

```
Specifies the formatting added to text.

```html
text-indent

1. (https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)

p {
  text-indent: 5em;
  background: powderblue;
}

2. (http://www.thesitewizard.com/css/hanging-indents.shtml)

.hangingindent {
    padding-left: 22px ;
    text-indent: -22px ;
}

3. (http://www.goer.org/HTML/intermediate/align_and_indent/)

p { text-indent: 2.0em; }
```
Specifies the indentation of the first line in a text-block.

```html
text-rendering

1. (http://css-tricks.com/almanac/properties/t/text-rendering/)

p.legibility { text-rendering: optimizeLegibility; }

2. (http://htmlcss.wikia.com/wiki/Text-rendering)

.foo { text-rendering:optimizeSpeed; }

3. (http://foundation.zurb.com/docs/components/typography.html)

$header-text-rendering: optimizeLegibility;

```
Provides information to the rendering engine about what to optimize for when the browser renders text, based on speed, legibility, and geometric precision among other considerations.

```html
text-shadow

1. (http://www.w3schools.com/cssref/css3_pr_text-shadow.asp)

h1 { text-shadow: 2px 2px #ff0000; }

2. (http://css-tricks.com/snippets/css/css-text-shadow/)

p { text-shadow: 1px 1px 1px #000, 3px 3px 5px blue; }

3. (http://learning-html5.info/blog/css-3-selectors/text-shadows/)

.textShadow {
   text-shadow:5px 4px 10px #000;
}
```
Applies shadow to text.

```html
text-transform

1. (https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

p { text-transform: capitalize; }

2. (http://htmldog.com/reference/cssproperties/text-transform/)

h1 { text-transform: uppercase; }

3. (https://www.hscripts.com/tutorials/css/text-transform.php)

<font style="text-transform: lowercase;">TesTing TEXT TRANSform </font>
```
Controls the capitalization of text.

```html
font-family

1. (http://www.w3schools.com/css/css_font.asp)

p { font-family: "Times New Roman", Times, serif; }

2. (http://www.quackit.com/css/properties/css_font-family.cfm)

<style type="text/css">
    p {font-family: fantasy, cursive, Serif;}
</style>
<p>CSS font-family</p>

3. (http://stackoverflow.com/questions/3995022/pre-tag-and-css-font-family)

pre {font-family: Consolas,monospace;}
```
Specifies font for an element. Holds several font names (delimited by commas) that render in order of priority from left to right, based on what a given browser supports.

```html
font-kerning

1. (https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning)

p { font-kerning: none; }

2. (http://blog.typekit.com/2014/02/05/kerning-on-the-web/)

p {
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
}

3. (https://andywalpole.me/#!/blog/139938/css-reset-starter-kit)

body {
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-kerning: auto;
  -moz-font-kerning: auto;
  font-kerning: auto;
}

```
Increases or decreases the space between characters in a text.

```html
font-size

1. (http://stackoverflow.com/questions/18007440/how-to-change-font-size-in-html5)

<p style="font-size:18px">Paragraph 1</p>

2. (http://eraeurope.com/assets/css/general.css)

body{
	background: #fff;
	font-family: verdana;
	font-size: 11px;
	color: #000;
	overflow-x:hidden;
}

3. (http://erasuisse.ch/assets/css/bootstrap.css)

small{ font-size:80%; }
```
Specifies the the desired height of glyphs from the selected font.

```html
font-variant

1. (http://webdesign.about.com/od/fonts/a/aa112204.htm)

p {
  background-color: #ccc;
  font-weight: bold;
  font-style: italic;
  font-variant: small-caps;
}

2. (https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)

p {
  font-variant: small-caps;
}

3. (http://www.impressivewebs.com/a-primer-on-the-css-font-shorthand-property/)

body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;
	font-weight: normal;
	font-variant: small-caps;
	font-style: italic;
	line-height: 150%;
}
```
Specifies whether or not a text should be displayed in a small-caps font.
