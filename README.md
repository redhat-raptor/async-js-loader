# async-js-loader
A simple grouped, ordered asynchronous JavaScript Loader

```javascript
iAJSLoader.init([
  [
    "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"
  ],
  [
    'js1-group1.js',
    'js2-group1.js'
  ],
  [
    'js1-group2.js',
    'js2-group2.js'
  ]
]);
```

Result:
![alt tag](https://github.com/redhat-raptor/async-js-loader/blob/master/demo/console.png)
![alt tag](https://github.com/redhat-raptor/async-js-loader/blob/master/demo/load_dependencies.png)
