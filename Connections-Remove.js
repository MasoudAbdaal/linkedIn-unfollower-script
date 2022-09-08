(() => {
  let count = 1;

  function getAllButtons() {
    return document.querySelectorAll('div[class*="ember-view mn-connection-card__dropdown"]');

  }


  async function unfollowAll() {
    const parent = getAllButtons();

    for (let button of parent) {
      const startTime = window.performance.now();
      count = count + 1;
      const name = button.parentElement.parentElement.querySelector('span[class*="mn-connection-card__name"]').textContent.trim();

      const openDropDown = button.querySelector('button[class*="artdeco-dropdown__trigger"]');
      openDropDown.click();
      await new Promise((resolve) => setTimeout(resolve, 100));

      const removeButton = button.querySelectorAll('button')[1];

      removeButton.click();
      await new Promise((resolve) => setTimeout(resolve, 100));


      const finalRemove = document.querySelector('button[class*="artdeco-button--primary"]')
      finalRemove.click();



      window.scrollTo(0, window.scrollY + button.getBoundingClientRect().top - 260);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const EndTime = window.performance.now();

      console.table({ Time: ((EndTime - startTime) / 1000).toFixed(2) + " Seconds", Name: name });

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