# Partial
The use of partials enable the developer to insert a block of common content in a layout or template. This encourages seperation of content and keeps the page templates neater by reducing the bulk of copy and paste code. Partials are stored in the partials subfolder of the views folder.

## Using partials
Partials are stored in the `partials` sub folder in the views folder. Using variables in partials is just like any other layout or template we have access to the variables in the applications state. This means that any global variables or variables passed into the handler method are available inside the partial.

**Add to layout/template**

To include a partial on a layout or a template just specify the partial name like so:
```
{{> partial_name}}
``` 
Where **partial_name** is the file name of the partial without the `.hbs` extension.

<!--
TODO: Examples of good cases for Partials
 -->