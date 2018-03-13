# Layout
A layout contains the structure for the site pages, this includes the standard page html, scripts and style sheets. By using layouts we avoid duplicating this [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) content across all the .hbs templates. Each layout is generally used for a specific purpose or within a specific area of a website. Individual layouts generally contain quite a lot of repeated html and stylesheet code, all modified from the master/default layout for its specific purpose. This level of code duplication or [copy and paste programming](http://wiki.c2.com/?CopyAndPasteProgramming) is generally an acceptable level of repitition until the size of the website grows where maintaining changes across theses templates becomes unmanagable. Layouts are stored in the project in the layouts subfolder of the views folder.

## Content sections
The use of [content sections]() enable the developer to push content from the templates into sections of the layouts other than the `{{{body}}}` section. For example using content sections it is possible to include custom scripts and style sheets on each template, preventing the loading of unused scripts every time a page is loaded. 

## Global variables
Application level variables are used in layouts in the same way that we use variables passed into the routing handler (the `.render()` method) in templates. It is also possible to use variables passed into the routing handler in the layout but then we would have to pass that variable into every handler that calls that template, at that stage its easier to make it a global or application level variable.

## Site layouts
This project currently uses two layouts, a master/default layout called `layout.hbs` that includes the header bar and all the navigation and is intended to wrap the majority of the content pages in the website. The other template is a stripped down version `no-header.hbs` that includes all the required scripts and style sheets but does not contain a navigation header, this is intended to be used on the register and login pages where the the header bar would be an unneeded distraction.

###**[layout.hbs]()**

Contains all the navigation elements and should be used as the basis for any additional templates used in the site. If any site structural or html changes need to be made to the site they should be made in this layout first and then propigated to the rest of the templates. 

###**[no-header.hbs]()**

A copy of the master layout with the navigation bar removed. 

## Specifying a layout in a template
To specify what layout to use we simply include the following code as the first line in any .hbs template
```
{{>! layoutname}}
```
Where **layoutname** is the file name of the layout without the `.hbs` extension. If we do not include this line then the expressjs server will user the default template, the `layout.hbs` in this application.
