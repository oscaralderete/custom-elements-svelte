<svelte:options accessors />

<script>
  export let count = 0;
  const increment = () => {
    count += 1;
  };
  export function showLoader() {
    const loader = document.querySelector("oa-loader");
    loader.show();
    count++;
    setTimeout(() => {
      loader.hide();
    }, 2000);
  }
  const showGlobalLoader = () => {
    /* and here the loader is invoked through the global declaration window.app = {...} */
    window.app.loader.show();
    count++;
    setTimeout(() => {
      window.app.loader.hide();
    }, 2000);
  };
</script>

<section>
  <h3>
    Times the loader was called from Svelte: {count}
  </h3>
  <br />
  <button on:click={showLoader}> Call loader from component </button>
  <br />
  <button on:click={showGlobalLoader}>
    Call loader from component using global declaration
  </button>
  <div class="right">
    <button data-id="component" onclick="window.app.viewCode()">
      View code (I'm inside Vue component)
    </button>
  </div>
</section>

<style>
  section {
    background-color: #eee;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: auto;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    margin-bottom: 1em;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
