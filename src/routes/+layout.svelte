<script>
  import '../app.css';
  import '../theme.css';
</script>

<svelte:head>
  <title>SvelteKit Flash | Demo</title>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡️</text></svg>"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&family=Quicksand&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main
  class="grid min-w-full min-h-screen px-4 py-8 font-sans prose place-items-center prose-h1:font-serif"
>
  <section class="text-center">
    <slot />
  </section>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.slate.50);
  }
</style>
