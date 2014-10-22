
#### Block-Level

### < address >

* Meaning - Identifies the contact information for the author or owner of a document or article.  It's placement inside an HTML document determines if the content inside of <address> is for an entire web document (where parent = body-tag) or for an article (where parent = article-tag).

```html
Examples:

1. (http://www.w3schools.com/tags/tag_address.asp)

<address>
   Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
   Visit us at:<br>
   Example.com<br>
   Box 564, Disneyland<br>
   USA
</address>

2. (http://html5doctor.com/the-address-element/)

<address class="author">
   <em class="fn"><a title="Posts by Jack Osborne" href="#">Jack Osborne</a></em>
</address>

3. (http://www.techonthenet.com/html/elements/address_tag.php)

<address>
  You can contact us at:<br />
  TechOnTheNet.com<br />
  123 Somewhere St.<br />
  City, State
</address>

```
### < article >

* Meaning - Specifies independent, self-contained content, meaning it should make sense on it's own, like a blog post, news story, or comment.

```html
Examples:

1. (http://www.w3.org/TR/html5/sections.html#the-article-element)

<article itemscope itemtype="http://schema.org/BlogPosting">
    <header>
        <h1 itemprop="headline">The Very First Rule of Life</h1>
        <p><time itemprop="datePublished" datetime="2009-10-09">3 days ago</time></p>
        <link itemprop="url" href="?comments=0">
    </header>
    <p>...</p>
    <footer>
        <a itemprop="discussionUrl" href="?comments=1">Show comments...</a>
    </footer>
</article>

2. (http://www.html-5-tutorial.com/article-element.htm)

<article>
  <h1>The article title</h1>
  <p>This is the contents of the article element.</p>
</article>

3. (http://www.brucelawson.co.uk/2010/html5-articles-and-sections-whats-the-difference/)

<article>
   <a href=full-story.html>
      <h1>Bruce Lawson is World's Sexiest Man</h1>
      <p>Legions of lovely ladies voted luscious lothario Lawson as the World's Sexiest Man today.</p>
      <p>Read more</p>
   </a>
</article>
```
### < audio >

* Meaning - Defines sound, but more specifically a music file or other audio streams. The 3 supported file formats for the <audio> element are MP3, Wav, and Ogg:

```html
Examples:

1. (https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video)

<audio src="audio.ogg" controls autoplay loop>
   <p>Your browser does not support the audio element </p>
</audio>

2. (http://www.htmlgoodies.com/primers/html/article.php/3920991/HTML5-Primer-How-To-Use-the-Audio-Tag.htm)

<audio src="music.ogg" controls="controls">

3. (http://html5doctor.com/native-audio-in-the-browser/)

<audio controls preload="auto">
  <source src="elvis.mp3" />
  <source src="elvis.ogg" />
  <!-- now include flash fall back -->
</audio>

```
### < blockquote >

* Meaning - Specifies a section that is quoted from another source. It is usally indented on the left and right.

```html
Examples:

1. (http://html5doctor.com/cite-and-blockquote-reloaded/)

<blockquote>
   <p>My favorite book is <cite class="from-quote">At Swim-Two-Birds</cite></p>
   <footer>- <cite>Mike[tm]Smith</cite></footer>
</blockquote>

2. (http://www.quackit.com/html_5/tags/html_blockquote_tag.cfm)

<blockquote>Browsers generally render blockquote text as indented text. If your quoted text needs to display within a non-quoted paragraph, you should use the <a href="/html_5/tags/html_q_tag.cfm" target="_blank">HTML q tag</a>. Most browsers surround q text with quotation marks.</blockquote>

3. (http://beyondhtml5andcss3.com/)

<blockquote>
  <p>
    The blockquote element represents a section that is quoted
    from another source.
  </p>
  <p>
    Content inside a blockquote must be quoted from
    another source, whose address, if it has one,
    may be cited in the cite attribute.
  </p>
  <footer>
    - <cite>
        <a href="http://dev.w3.org/html5/spec-preview/the-blockquote-element.html">W3C HTML5 Blockquote specification</a>
      </cite>

  </footer>
</blockquote>
```
### < canvas >

* Meaning - Used to dynamically draw graphics via scripting (usually JavaScript), although the tag itself is only a container for graphics.

```html
Examples:

1. (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"> </canvas>

2. (http://www.sitepoint.com/html5-canvas-tutorial-introduction/)

<canvas id="exampleCanvas" width="500" height="300">
  <!-- OPTION 1: leave a message here if browser doesn't support canvas -->
    <p>Your browser doesn’t currently support HTML5 Canvas.
    Please check caniuse.com/#feat=canvas for information on
    browser support for canvas.</p>
  <!-- OPTION 2: put fallback content (text, image, Flash, etc.)
                 if the browser doesn't support canvas -->
</canvas>

3. (http://sixrevisions.com/html/canvas-element/)


<canvas id="myCanvas" width="200" height="200"></canvas>
```
### < div >

* Meaning - Defines a division or a section in an HTML document by grouping block-level elements for the purpose of formating them with CSS.

```html
Examples:

1. (http://theironyard.com/locations/orlando/)

<div class="container-fluid green-bg">

2. (http://www.erasuisse.ch/index.cfm?fuseaction=cbroker.officeDetails&agencyCode=AAW01)

<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">

3. (http://srainternational.org/)

<div class="block block-search block-form block-search-form even block-without-title" id="block-search-form">

```

### < figure >

* Meaning - Specifies self-contained content, such as illustrations, diagrams, photos, code listings.

```html
Examples:

1. (http://stackoverflow.com/questions/12453586/what-is-the-usage-of-html5-figure-with-img)

<figure role="group">
    <img src="castle-etching.jpg" alt="The castle has one tower, and a tall wall around it.">
    <figcaption>Charcoal on wood. Anonymous, circa 1423.</figcaption>
</figure>

2. (http://www.techrepublic.com/blog/web-designer/html5-figure-and-figure-caption-elements/)

<figure>
    <img src="i/Picture1.png" width="400" alt="Picture 1" title="Picture 1">
      <figcaption>Two stick figures shaking hands.</figcaption>
</figure>

3. (http://mrbool.com/html-5-figure-tag-and-figcaption-element-creating-more-interactive-web-pages-and-good-user-experiences/25582)

<figure id="red-figure"> <img class='imagem_artigo' src="Red.png" alt="Figure 1: A red color image"> </figure>
```
### < header >

* Meaning - Identifies a header block for a document or section, used commonly as a container for introductory content or set of navigational links.

```html
Examples:

1. (http://html5doctor.com/the-header-element/)
<header>
   <h1>The most important heading on this page</h1>
   <p>With some supplementary information</p>
</header>

2. (http://blog.teamtreehouse.com/use-html5-sectioning-elements)

<header>
    <div id="logo">Rocking Stone</div>
    <nav>...</nav>
</header>

3. (http://diveintohtml5.info/semantics.html)

<div id="header">
   <h1>My Weblog</h1>
   <p class="tagline">A lot of effort went into making this effortless.</p>
</div>
```
### < footer >

* Meaning - Identifies a footer block for a document or section, used commonly to contain contact information, copyright information, etc.

```html
Examples:

1. (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>

2. (http://www.techrepublic.com/blog/web-designer/html5-using-structural-elements-for-header-footer-and-navigation/)

<footer>
   <p>Published: <time datetime="2011-07-22T13:59:47-04:00" pubdate>July 22, 2011 1:59 pm EDT</time></p>
</footer>

3. (http://www.sitepoint.com/html5-main-element/)

<footer>Copyright 2013</footer>
```
### < nav >

* Meaning - Specifies a set of navigation links that usually persist on every page of a website.

```html
Examples:

1. (http://www.hongkiat.com/blog/html5-basic-elements/)

<nav>
<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#history">History</a></li>
<li><a href="#development">Development</a></li>
<ul>
</nav>

2. (http://mrbool.com/how-to-structure-your-web-page-with-html5-nav-tag/25594)

<nav> <a href="http://gmail.com">Gmail</a> | <a href="http://Hotmail.com">Hotmail</a> | <a href="http://mail.yahoo.com">Yahoo Mail</a> | <a href="http://rediffmail.com">Rediffmail</a> </nav>

3. (http://tutorials.jenkov.com/html5/nav.html)
<nav>
    <a href="page1.html">Page 1</a>
    <a href="page2.html">Page 2</a>
    <a href="page3.html">Page 3</a>
</nav>
```

#### Inline Elements

### < code >

* Meaning -

```html
Examples:

1.()

2.()

3.()
```

### < strong >

* Meaning -

```html
Examples:

1.()

2.()

3.()
```
### < img >

* Meaning -

```html
Examples:

1. ()

2. ()

3.()
```
### < map >

* Meaning -

```html
Examples:

1. ()

2. ()

3.()
```
### < kbd >

* Meaning -

```html
Examples:

1. ()

2. ()

3.()
```
### < object >

* Meaning -

```html
Examples:

1. ()

2. ()

3.()

```

### < button >

* Meaning -

```html
Examples:

1. ()

2. ()

3. ()
```
### < select >

* Meaning -

```html
Examples:

1. ()

2. ()

3.()
```
### < textarea >

* Meaning -

```html
Examples:

1. ()

2. ()

3.()
```
### < input >

* Meaning -

```html
Examples:

1. ()

2. ()

3.()
```
