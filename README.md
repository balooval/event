# event
Simple es6 event

## Usage

Setup

```js
import Event from 'event.js';

const myEvent = new Event();
```

Subscribe to an event :

```js
myEvent.addEventListener('WANTED_EVENT_NAME', myListener, myListener.onEventMethod);
```


Fire an event :

```js
const optionalParam = 'someValue;
myEvent.fireEvent('WANTED_EVENT_NAME', optionalParam);
```

Unsubscribe to an event :

```js
myEvent.removeEventListener('WANTED_EVENT_NAME', myListener, myListener.onEventMethod);
```

`myListener` can be any type of object who has some method to pass to the event.
