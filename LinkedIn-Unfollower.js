(() => {
  let count = 0;
  function getAllButtons() {
    let items = [];
    document.querySelectorAll('div[class="pv2"] > button[id*="ember"]').forEach(function (item) {

      item.querySelectorAll('span[class="artdeco-button__text"]')[0].innerText === "Following" ? items.push(item) : false

    })
    return items
  }
  async function unfollowAll() {
    const buttons = getAllButtons();

    for (let button of buttons) {
      count = count + 1;
      const name = button.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('span[aria-hidden=true]').textContent
      console.log(`Unfollow #${count}:`, name);

      window.scrollTo(0, window.scrollY + button.getBoundingClientRect().top - 260);
      button.click();

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  async function run() {
    await unfollowAll();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const buttons = getAllButtons();
    if (buttons.length) run();
  }
  run();
})();