import Event from '../src/event.js';
import { assert } from 'chai';

class Listener {
    constructor() {
        this.eventReceived = false;
        this.eventParams = null;
    }

    onEvent(params) {
        this.eventReceived = true;
        this.eventParams = params
    }
}

describe('Event', () => {
    const event = new Event();
    describe('#addEventListener()', () => {
        const listener = new Listener();
        event.addEventListener('MY_EVENT', listener, listener.onEvent);
        it('call the listener callback and retreive params', () => {
            const eventParam = 'EVENT_PARAM';
            event.fireEvent('MY_EVENT', eventParam);
            assert.equal(listener.eventReceived, true, 'Event was received by listener');
            assert.equal(listener.eventParams, eventParam, 'Event param was received by listener');
        });
    });
    describe('#removeEventListener()', () => {
        const listener = new Listener();
        event.addEventListener('MY_EVENT', listener, listener.onEvent);
        event.removeEventListener('MY_EVENT', listener, listener.onEvent);
        it('dont call the listener callback', () => {
            event.fireEvent('MY_EVENT');
            assert.equal(listener.eventReceived, false, 'Event was not received by listener');
        });
    });
});