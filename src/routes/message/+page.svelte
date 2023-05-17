<script>
  /** @type {import('./$types.js').PageData} */
  export let data;
</script>

<div class="w-96">
  <pre class="w-full text-left">{JSON.stringify(data, null, 2)}</pre>

  <a class="inline-block w-full px-5 py-2 text-white no-underline border-0 bg-slate-500" href="/"
    >Back</a
  >
  <a
    class="inline-block w-full px-5 py-2 no-underline border-0"
    href="/message"
    data-sveltekit-reload>Reload</a
  >
</div>
