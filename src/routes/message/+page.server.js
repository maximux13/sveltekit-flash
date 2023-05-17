/** @type {import('./$types.js').PageServerLoad} */
export async function load(event) {
  const messages = event.locals.messages;

  return { messages };
}
