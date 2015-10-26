underline.js
==================

A stretched Underscore.js.

# Ajax

### How to use

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

### Methods

```
__.ajax.get().success().error();
__.ajax.post().success().error();
__.ajax.put().success().error();
__.ajax.delete().success().error();
```

# Memory

Handles localStorage, with fallback using cookies.

### Methods

```
__.memory.set('batman', 'hero', 7);
__.memory.get('batman');    // Returns "hero".
__.memory.delete('batman'); // Goodbye, Bruce.
```

# String

Useful string methods.

### Methods

```
__.string.serialize({ batman: 'hero' }); // 'batman=hero'
__.string.slugfy('It's over now!');      // 'it-s-over-now'
```
