<script>
  let messages = 1;
</script>

<h1>SvelteKit Flash ⚡️</h1>

<div class="text-left">
  <p>Simple demo to use flash messages on your sveltekit app</p>

  <h2>Demo</h2>

  <form method="post" class="flex flex-col gap-4">
    {#each { length: messages } as index}
      <fieldset class="grid items-center grid-cols-2 p-3 border border-gray-500 gap-y-2">
        <label class="col-span-1 text-left" for="type-{index}">Type</label>
        <select class="col-span-1" name="messages[][type]" id="type-{index}">
          <option value="success">SUCCESS</option>
          <option value="info">INFO</option>
          <option value="warning">WARNING</option>
          <option value="error">ERROR</option>
          <option value="debug">DEBUG</option>
        </select>

        <label class="col-span-1 text-left" for="message-{index}">Message</label>
        <input
          class="col-span-1"
          type="text"
          name="messages[][message]"
          id="message-{index}"
          placeholder="Message"
          required
        />
      </fieldset>
    {/each}

    <button type="button" on:click={() => (messages += 1)}><strong>+</strong> Add message </button>

    <button class="px-5 py-2 text-white border-0 bg-slate-500" type="submit">Submit</button>
  </form>
</div>
