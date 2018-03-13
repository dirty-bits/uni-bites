# Templates
Essentially all `.hbs` files are templates of one type or another, this includes [layouts](), [partials]() and page templates. It is their organisation in a project that makes the job of building the website easier. However when we talk about templates here we are referring to page templates, these are the templates that we should be working with most regularly as development progresses. 

## Template layout
Each template should choose a specific layout on the first line of the `.hbs` file. 
```
{{>! layoutname}}
```
Here the `layoutname` is the name template filename without the `.hbs` part at the end.

## Variables in templates
To use variables in a template you just need to wrap the variable name in `{{ }}` like so.

```
{{variableName}}
```

The variable should be in the app.locals or you have pass it into the template when you call `.render` method.

```
router.get('/', function(req, res, next) {
  res.render('index', { title: 'title', variableName: 'test' });
});

```
<!--
TODO: more on variables, collections etc, link back to a page with examples of handlebars syntax for using variables.
 -->



