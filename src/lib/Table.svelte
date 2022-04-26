<script>
  const authors = [
    {
      id: 1,
      name: "Toni Morrison",
      country: "USA",
      comment:
        "Her works often depict difficult circumstances and the dark side of humanity, but still convey integrity and redemption.",
    },
    {
      id: 2,
      name: "Jorge Luis Borges",
      country: "Argentina",
      comment: 'Believe me, you need to read "The Immortal".',
    },
    {
      id: 3,
      name: "Mary Shelley",
      country: "United Kingdom",
      comment:
        "She believed that people could improve society through the responsible exercise of political power, but she feared that the irresponsible exercise of power would lead to chaos.",
    },
    {
      id: 4,
      name: "Oscar Alderete",
      country: "Perú",
      comment: "Well, this guy just write code.",
    },
  ];

  const editIt = (obj) => {
    // calls parent function to update sibling component variable
    updateCounter(obj);
    window.app.loader.show();
    setTimeout(() => {
      window.app.loader.hide();
      window.app.toast.show({
        message: `Cannot access to author ${obj.name}'s record!`,
        type: "error",
      });
    }, 1000);
  };

  const deleteIt = (obj) => {
    window.app.dialog.deploy(
      {
        title: "WARNING",
        message: `Are you sure you want to delete ${obj.name}'s record?`,
      },
      () => {
        editIt(obj);
      },
      () => {
        window.app.toast.show({
          message: `Yeah, this writer is too good to be deleted!`,
          type: "success",
        });
      }
    );
  };

  export let updateCounter;
</script>

<table class="my-table">
  <thead>
    <tr>
      <th>Author</th>
      <th>Country</th>
      <th>Comment</th>
      <th />
      <th />
    </tr>
  </thead>
  <tbody>
    {#each authors as author}
      <tr v-for="user in authors" key={author.id}>
        <td>{author.name}</td>
        <td>{author.country}</td>
        <td>{author.comment}</td>
        <td>
          <span on:click={() => editIt(author)}>EDIT</span>
        </td>
        <td>
          <span on:click={() => deleteIt(author)}>DELETE</span>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .my-table {
    border-collapse: collapse;
  }

  .my-table tr:nth-child(even) {
    background-color: #f4f4f4;
  }

  .my-table th,
  .my-table td {
    border: solid 1px #ccc;
    padding: 0.5em;
  }

  .my-table td {
    text-align: left;
  }

  .my-table td span {
    display: inline-block;
    cursor: pointer;
    background-color: #ccc;
    color: #222;
    padding: 0.25em 0.5em;
  }
</style>
