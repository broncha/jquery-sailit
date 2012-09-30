jquery-sailit
=============

yet another jQuery slider with a twist. You make the images sail :)

This is an on progress jQuery slider, many features are yet to come.

Sample Implementation
---------------------

Include the library

```html
    <link href="../lib/jquery.sailit.css" type="text/css" rel="stylesheet" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript"></script>
    <script src="../lib/jquery.sailit.js" type="text/javascript"></script>
```

```html
    <div id="slider">
        <img src="images/1.jpg" class="active" />
        <img src="images/2.jpg" />
        <img src="images/3.jpg" />
        <img src="images/4.jpg" />
        <img src="images/5.jpg" />
    </div>
```

```javascript
    $(function(){
        $('#slider').flowSlide({
            width:800,
            height:450
        });
    });

```

More options and hook support on its way!