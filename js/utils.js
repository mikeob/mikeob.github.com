const requestResults = [
  'First set of results',
  'Second set of results',
  'Third set of results',
  'Fourth set of results',
  'Fifth set of results',
];

/* Hang out for a few ms */
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/* Busy loop form of wait() */
function waitSync(ms) {
  const start = Date.now();
  while (Date.now() < start + ms) {
    // Holding on to that CPU!
  }
}

function addHtmlToPage(content) {
  const sandboxRoot = document.querySelector('.sandbox');
  const div = document.createElement('div');
  div.innerHTML = content;
  sandboxRoot.appendChild(div);
}

function addTextToPage(content) {
  const sandboxRoot = document.querySelector('.sandbox');
  const p = document.createElement('p');
  p.textContent = content;
  sandboxRoot.appendChild(p);
}
