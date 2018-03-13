# Content sections
The use of [content sections]() enable the developer to push content from the templates into sections of the layouts other than the `{{{body}}}` section. For example using content sections it is possible to include custom scripts and style sheets on each template, preventing the loading of unused scripts every time a page is loaded. 

## Using content sections
To insert a named content block into a layout we just include the code like this.

**Add to `layoutName.hbs`**
```
    <head>
        <scripts type="" src ="site.js"/>
        {{block "scripts"}}
    </head>
```

**Add to top of `template.hbs`**
```
{{#contentFor "scripts"}}
<script src="template.js"></script>
{{/contentFor}}

```

