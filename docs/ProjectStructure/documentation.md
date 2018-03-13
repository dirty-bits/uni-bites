# Documentation
Project documentation for this application holds information on the structure, layout content and processes of the current site. This documentation is designed to be easy and quick to update and should be current with the active development. Gitbook is used as the basis for the documentation, there are two plugins at the moment, one to collapse the chapter headers in the left menu and another to generate SVG drawings from [puml](http://plantuml.com/).

## Editing the documentation
Editing the documentation requires some very basic knowledge of the [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax and possibly some reading up on the [puml](http://plantuml.com/) syntax if you neeed to add any software diagrams.

## Gitbook
Gitbook [documentation](https://toolchain.gitbook.com/) is a good place to start as it includes a lot of documentaion on the basic markdown syntax and all the information on how the documentation files should be structured. Gitbook [plugins](https://plugins.gitbook.com/) are used to add additional functionality. The existing documentation includes plugins for collapsing the menu and another plugin for rendering [uml](https://en.wikipedia.org/wiki/Unified_Modeling_Language). These are configured in the `book.json` file.

```
book.json
{
    "root": "./",
    "plugins": ["collapsible-menu", "plantuml-svg"]
}
```

## Notes 
| Error                                                     | Resolution                                                                                                                | 
| --------------------------------------------------------- |---------------------------------------------------------------------------------------------------------------------------| 
| PUML wont live reload                                     | Save any .md file to get a refresh.                                                                                       | 
| PUML wont use relative path with npm plus docs sub folder | Think it wants to be called from within the docs folder. Use the absolute path for the .puml file from the project folder |

<!-- TODO: Tidy this up
    # Markdown
    \[text\]\(http://www.url.com/\)

    Put this in a table
    link to 
    \# for heading1     : for a link

    \#\# for heading2 


    ```
    # heading1 
    ```
    # heading1
    ```
    > notes
    ```
    > notes


    * http://plantuml.com/

    # Software Diagrams

    ### URLS

    https://github.com/wewei/gitbook-plugin-plantuml-svg
    https://gist.github.com/QuantumGhost/0955a45383a0b6c0bc24f9654b3cb561

    READ
    http://forum.plantuml.net/?qa=331/database-modeling
    https://github.com/plantuml/plantuml/pull/31
    http://ogom.github.io/draw_uml/plantuml/
    http://plantuml.com/

    https://basarat.gitbooks.io/typescript/docs/javascript/number.html
    https://www.frontendhandbook.com/
-->