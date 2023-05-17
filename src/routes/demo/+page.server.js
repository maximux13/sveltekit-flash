import { redirect } from '@sveltejs/kit';

/**
 * @typedef {{
 *  message: string;
 *  type: import('@maximux13/sveltekit-flash').Level;
 * }} Body
 */

/** @type {import('./$types.js').Actions} */
export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();

    const types = formData.getAll('messages[][type]');
    const messagesText = formData.getAll('messages[][message]');

    for (let i = 0; i < types.length; i++) {
      event.locals.flash[types[i]](messagesText[i]);
    }

    throw redirect(302, '/message');
  }
};
