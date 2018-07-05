
##CSS Grid Layout including IE10 and IE11
IE10 and IE11 supports, with prefix, the 2011 specification of CSS Grid Layout. This means you can use to creat your grid layout but there are some crucial functionality that is not supported at all so you have to look out and be careful what you need and how you use it.

The main difference from all other major browsers is that you can't use any auto placement functionality. You have to set exactly what column and what row each cell should be placed in. If not all cells will just be stacked on top of each other in IE10 and IE11.

The other quite major thing you will notice is that gutters or gaps does not work.

This example repository contains some examples on how to get CSS Grid layout render your grid in a similar way even in IE10 and IE11. It is using SASS mixins to render the CSS Grid prop as well as the prefixed -ms version.


###How to

####Columns
To set a column span from column 1 to # use the class

```
  spans--col__#
```

If a column should start on something else greater than column 1 a specific override needs to be created. 
```
  @include grid-columns-span(3, 10);
```
####Rows
To specify what row each cell should be placed in just use the class. Note that this is only for IE10 and IE11 since all other browsers will auto place the cells on rows.

```
  row--#
```

###Codepen
https://codepen.io/anon/pen/aKEvMa

###Resources:
1. https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/
2. https://css-tricks.com/browser-compatibility-css-grid-layouts-simple-sass-mixins/
3. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout



###Thx to:
Color scheme https://www.colorcombos.com/color-schemes/3122/ColorCombo3122.html