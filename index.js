let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let messageEl = document.getElementById("save-el");

// Global vars
let count = 0;
let countCache = [];

function increment() {
  count += 1;
  countEl.textContent = count;
  // updateCache();
}

function updateCache() {
  countCache.push(count);
}

function flushCache() {
  countCache = [];
}

function updateMessage() {
  const message = countCache.join(",").replaceAll(",", "-");
  messageEl.innerText = message;
}

function clearMessage() {
  messageEl.innerText = "--";
}

function resetCounter() {
  count = 0;
}

function resetApp() {
  countEl.textContent = 0;
  resetCounter();
  flushCache();
  clearMessage();
}

function save() {
  updateCache();
  updateMessage();
  resetCounter();
}
