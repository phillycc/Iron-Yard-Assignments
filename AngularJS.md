### Functions

#### angular.module(name, [requires], [configFn]);

##### Arguments
_name_: The name of the module to create or retrieve
_requires (optional)_: If specified then new module is created, else it is retrieved for further configuration
_configFn (optional)_: Configuration function for the module

##### Returns
New module with the angular.Module api

##### Usage
```javascript
(function(){
    var app = angular.module('store', [ ]);
})()
```

#### angular.extend(dst, src);

##### Arguments
_dst_: Destination object.
_src_:	Source object(s).

##### Returns
Reference to dst.

##### Usage
```javascript
angular.extend(CategoriesService.prototype, baseOData);
```

#### angular.copy(source, [destination]);

##### Arguments
_source_: The source that will be used to make a copy. Can be any type, including primitives, null, and undefined.
_desitnation (optional)_: Destination into which the source is copied. If provided, must be of the same type as source.

##### Returns
The copy or updated destination, if destination was specified.

##### Usage
```javascript
angular.copy($scope.initial, $scope.datas);
```

#### angular.element

Wraps a raw DOM element or HTML string as a jQuery element.

If jQuery is available, angular.element is an alias for the jQuery function. If jQuery is not available, angular.element delegates to Angular's built-in subset of jQuery, called "jQuery lite" or "jqLite."
```javascript
angular.copy($scope.initial, $scope.datas);
```

### Directives

#### ngApp (ng-app)
```
Designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags. Only one AngularJS application can be designated per HTML document and cannot be nested within each other.

<body ng-app=“store”>
  ...
</body>
```

#### ngBind (ng-bind)
```
Replaces the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes. It is preferable to use instead of double curly markup like {{ expression }}. Since ngBind is an element attribute, it makes the bindings invisible to the user while the page is loading.

<div>
  Hello, <span ng-bind="user.name"></span>
</div>
```

#### ngClass (ng-class)
```
Dynamically sets CSS classes on an HTML element by databinding on three types of expressions: string, array, and object. It also will not add duplicate classes if a particular class was already set.  Lastly, when the expression changes, the previously added classes are removed and only then the new classes are added.

 <ul class="nav nav-pills">
    <li ng-class="{active: tab.isSet(1) }"> ...
</ul>
```

#### ngClick (ng-click)
```
Specifies custom behavior when an element is clicked.

<li>
  <a href ng-click="tab.setTab(1)">Description</a>
</li>
```

#### ngController (ng-controller)
```
Attaches a controller class to the view and is one of the Model-View-Controller components in angular. The class contains business logic behind the application to decorate the scope with functions and values.

<section class="tab" ng-controller="TabController as tab">
 ...
 </section>
```

#### ngDblclick (ng-dblclick)
```
The ngDblclick directive allows you to specify custom behavior on a dblclick event.

<li ng-dblclick="startEditing(item);"> ... </li>
```

#### ngForm (ng-form)
```
Groups form controls, but is not meant to serve as a replacement for the <form> tag with all of its capabilities. This directive can be nested, unlike <form>.

As element:
<ng-form [name="someForm"]> ... </ng-form>

As attribute:
<ANY [ng-form="someForm"]> ... </ANY>

As CSS class:
<ANY class="[ng-form: someForm;]"> ... </ANY>
```

#### ngKeyup (ng-keyup)
```
Specifies custom behavior on keyup event.

<div class="container" ng-keyup="keyPress(e)"></div>
```

#### ngModel (ng-model)
```
Binds an input, select, textarea (or custom form control) to a property on the scope. Also used to
provide validation behavior, keep the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors), set related css classes on the element (ng-valid, ng-invalid, ng-dirty, ng-pristine, ng-touched, ng-untouched), and register the control with its parent form.

<input ng-model=“review.author”>
```

#### ngRepeat (ng-repeat)
```
Instantiates a template once per item from a collection, looping through the collection and filling out the template for the current collection item.

<li ng-repeat="product in store.products"> {{ product.name }} </li>
```

#### ngSubmit (ng-submit)
```
Enables binding angular expressions to form onsubmit events. Also, prevents the default action if the form does not contain a defined action attribute.

<form ng-submit="submit()" ng-controller="ExampleController"> ... </form>
```

#### form
```
An HTML element that when used together with ngController functions in accordance with the business logic defined in the model component that the controller references.

<form name="myForm" ng-controller="FormController" class="my-form"> .. </form>
```

#### input
```
HTML input element control when assigned to ngModel provides data-binding, input state control, and validation.

<input
  ng-model=""
  [name=""]
  [required=""]
  [ng-required=""]
  [ng-minlength=""]
  [ng-maxlength=""]
  [ng-pattern=""]
  [ng-change=""]
  [ng-trim=""]>
  ...
</input>
```

#### select
```
HTML input element control when assigned to ngModel provides data-binding. Other optional arguments, such as required and ngRequired, allow for form validation, while ngOptions can be used in place of <option> especially when bound to a non-string value.

<select
  ng-model=""
  [name=""]
  [required=""]
  [ng-required=""]
  [ng-options=""]>
  ...
</select>
```

#### textarea
```
HTML input element control when assigned to ngModel provides data-binding, state control, and validation.

<textarea
  ng-model=""
  [name=""]
  [required=""]
  [ng-required=""]
  [ng-minlength=""]
  [ng-maxlength=""]
  [ng-pattern=""]
  [ng-change=""]
  [ng-trim=""]>
  ...
</textarea>
```

#### ngBlur
```
Specifies custom behavior on blur event, which fires when an element has lost focus.

<window, input, select, textarea, a ng-blur="">
  ...
</window, input, select, textarea, a >
```

#### ngChange
```
Evaluates the given expression only when a change in the input value causes a new value to be committed to the model.

<input ng-change="">
  ...
</input>
```

#### ngChecked
```
Binds a boolean state of checked on input type checkbox that is otherwise lost by the browser when it removes the attribute.

<input ng-checked="">
...
</input>
```

#### ngFocus
```
Specifies custom behavior on focus event, which fires when an element gets focus.

<window, input, select, textarea, a ng-focus="">
  ...
</window, input, select, textarea, a >
```

### Services

#### $controller
```
Responsible for instantiating controllers and is just a simple call to $injector, but extracted into a service.

$controller(constructor, locals);
```

#### $http
```
Facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSON.
The $http API is based on the deferred/promise APIs exposed by the $q service.

$http.get('/someUrl').
  success(function(data, status, headers, config) {
    ...
  }).
});
```

#### $interpolate
```
Compiles a string with markup into an interpolation function. This service is used by the HTML $compile service for data binding.

var exp = $interpolate('{{greeting}} {{name}}!');
expect(exp(context)).toEqual('Hello !');
```
