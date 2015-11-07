Longdash
========

A stretched [Lodash](https://lodash.com/). Lodash uses a single `_`. We use two. :sunglasses:

*Longdash* add several modules to expand Lodash, keeping a single namespace in your project. The purpose here is to keep you [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), avoiding writing repetitive code. 

#### Dependencies

- [Lodash](https://lodash.com/)
- [Moment.js](http://momentjs.com/)

These files are not bundled with *Longdash*.

### Install with Bower

You can install and manage *Longdash* versions using [Bower](http://bower.io).

```
$ bower install longdash
```

# Modules

## Ajax

#### How to use

Without options:

```
__.ajax.get('/endpoint')
```

With options:

```
__.ajax.get({
    url: '/endpoint',
    params: {
        'page': 1
    },
    headers: {
        'Content-Type': 'application/json'
    }
    data: {
        // ...
    }
}).success(function (data, xhr) {
    // ...
}).error(function (data, xhr) {
    // ...
});
```

#### Methods

```
__.ajax.get().success().error();
__.ajax.post().success().error();
__.ajax.put().success().error();
__.ajax.delete().success().error();
```

## Memory

Handles localStorage, with fallback using cookies.

#### Methods

```
__.memory.set('batman', 'hero', 7, 'days');
__.memory.get('batman');    // Returns "hero".
__.memory.delete('batman'); // Goodbye, Bruce.
```

## String

Useful string methods.

#### Methods

```
__.string.serialize({ batman: 'hero' }); // 'batman=hero'
__.string.slugfy('It's over now!');      // 'it-s-over-now'
```
