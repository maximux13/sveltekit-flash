/**
 * @readonly
 * @enum {import('./types.js').Level}
 */
export const Level = Object.freeze({
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  DEBUG: 'debug'
});

/**
 * Create a handler to add flash messages to the event.
 *
 * @type {import('./types.js').createHandler}
 *
 * @example createHandler();
 * @example createHandler({ name: '__flash' });
 * @example createHandler({ levels: [Level.SUCCESS, Level.ERROR] });
 * @example createHandler({ name: '__flash', levels: [Level.SUCCESS, Level.ERROR] });
 */
export default function createHandler(options = {}) {
  const name = options.name ?? '__flash';

  /** @type {import('./types.js').Level | string[]} */
  const levels = options.levels ?? Object.values(Level);

  return async function handler({ event, resolve }) {
    /**
     * @type {import('./types.js').Messages)}
     */
    const messages = [];

    /**
     * @param {import('./types.js').Level} type
     * @param {import('./types.js').Message} message
     * @param {import('./types.js').Tags} tags
     * @returns {void}
     */
    function addMessage(type, message, tags) {
      messages.push({ type, message, tags });

      event.cookies.set(name, JSON.stringify(messages), {
        path: '/',
        httpOnly: true
      });
    }

    event.locals.flash = addMessage;

    levels.forEach((level) => {
      event.locals.flash[level] = addMessage.bind(null, level);
    });

    event.locals.messages = [];

    const cookie = event.cookies.get(name);

    if (cookie) {
      event.locals.messages = JSON.parse(cookie);
      event.cookies.delete(name);
    }

    return resolve(event);
  };
}
