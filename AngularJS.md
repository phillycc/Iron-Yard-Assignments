### Functions

#### angular.module(name, [requires], [configFn]);
```
##### Arguments
_name_: The name of the module to create or retrieve
_requires (optional)_: If specified then new module is created, else it is retrieved for further configuration
_configFn (optional)_: Configuration function for the module

##### Returns
New module with the angular.Module api
```

#### angular.extend(dst, src);
```
##### Arguments
_dst_: Destination object.
_src_:	Source object(s).

##### Returns
Reference to dst.
```

#### angular.copy(source, [destination]);
```
##### Arguments
_source_: The source that will be used to make a copy. Can be any type, including primitives, null, and undefined.
_desitnation (optional)_: Destination into which the source is copied. If provided, must be of the same type as source.

##### Returns
The copy or updated destination, if destination was specified.
```

#### angular.element
```
Wraps a raw DOM element or HTML string as a jQuery element.

If jQuery is available, angular.element is an alias for the jQuery function. If jQuery is not available, angular.element delegates to Angular's built-in subset of jQuery, called "jQuery lite" or "jqLite."
```

### Directives

#### ngApp
```
The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags.

Only one AngularJS application can be auto-bootstrapped per HTML document. The first ngApp found in the document will be used to define the root element to auto-bootstrap as an application. To run multiple applications in an HTML document you must manually bootstrap them using angular.bootstrap instead. AngularJS applications cannot be nested within each other.

```

#### ngBind
```
The ngBind attribute tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.

Typically, you don't use ngBind directly, but instead you use the double curly markup like {{ expression }} which is similar but less verbose.

It is preferable to use ngBind instead of {{ expression }} if a template is momentarily displayed by the browser in its raw state before Angular compiles it. Since ngBind is an element attribute, it makes the bindings invisible to the user while the page is loading.
```

#### ngClass
```
The ngClass directive allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

The directive operates in three different ways, depending on which of three types the expression evaluates to:

1. If the expression evaluates to a string, the string should be one or more space-delimited class names.

2. If the expression evaluates to an array, each element of the array should be a string that is one or more space-delimited class names.

3. If the expression evaluates to an object, then for each key-value pair of the object with a truthy value the corresponding key is used as a class name.

The directive won't add duplicate classes if a particular class was already set.

When the expression changes, the previously added classes are removed and only then the new classes are added.
```

#### ngClick
```
The ngClick directive allows you to specify custom behavior when an element is clicked.
```

#### ngController
```
The ngController directive attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the Model-View-Controller design pattern.

MVC components in angular:

  Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties are accessed through bindings.
  View — The template (HTML with data bindings) that is rendered into the View.
  Controller — The ngController directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values

Note that you can also attach controllers to the DOM by declaring it in a route definition via the $route service. A common mistake is to declare the controller again using ng-controller in the template itself. This will cause the controller to be attached and executed twice.
```

#### ngDblclick
```
The ngDblclick directive allows you to specify custom behavior on a dblclick event.
```

#### ngForm
```
Nestable alias of form directive. HTML does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a sub-group of controls needs to be determined.

Note: the purpose of ngForm is to group controls, but not to be a replacement for the <form> tag with all of its capabilities (e.g. posting to the server, ...).
```

#### ngKeyup
```
Specify custom behavior on keyup event.
```

#### ngModel
```
The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

ngModel is responsible for:

Binding the view into the model, which other directives such as input, textarea or select require.
Providing validation behavior (i.e. required, number, email, url).
Keeping the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors).
Setting related css classes on the element (ng-valid, ng-invalid, ng-dirty, ng-pristine, ng-touched, ng-untouched) including animations.
Registering the control with its parent form.
Note: ngModel will try to bind to the property given by evaluating the expression on the current scope. If the property doesn't already exist on this scope, it will be created implicitly and added to the scope.
```

#### ngRepeat
```
The ngRepeat directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.
```

#### ngSubmit
```
Enables binding angular expressions to onsubmit events.

Additionally it prevents the default action (which for form means sending the request to the server and reloading the current page), but only if the form does not contain action, data-action, or x-action attributes.
```
