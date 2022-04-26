<script>
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import Table from "./lib/Table.svelte";

  let myCounter;

  const showLoader = () => {
    /* here the loader is invoked through the global declaration window.app = {...} */
    window.app.loader.show();
    /* we can access to the child component data property: count, via this.$refs */
    myCounter.count++;
    setTimeout(() => {
      window.app.loader.hide();
    }, 1000);
  };

  const callLoaderFromComponent = () => {
    /* here the loader is invoked through the same component HelloWorld inner method and data property */
    myCounter.count++;
    myCounter.showLoader();
  };

  const updateCounter = (obj) => {
    // this to update myCounter from Table component
    myCounter.count++;
  };
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Custom Web Elements</h1>

  <Counter bind:this={myCounter} />

  <br />
  <button on:click={showLoader}>
    Call loader from root component using global declaration
  </button>
  <br />
  <button on:click={callLoaderFromComponent}
    >Call loader using component method from parent</button
  >

  <h3>
    Below, there is another component to test the another custom web elements:
  </h3>

  <Table {updateCounter} />

  <div class="right">
    <button data-id="app" onclick="window.app.viewCode()">
      View code (I'm inside Vue root component)
    </button>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #fff;
    background-color: #0969a2;
    border-radius: 2em;
    border: 2px solid #0969a2;
    outline: none;
    width: auto;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    margin-bottom: 1em;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
