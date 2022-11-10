const btn = document.getElementById('increment');
// const number = document.getElementById('nmb');
const state = {count: 0}


btn.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  counter.innerHTML = ++state.count;
  console.log(state);
});

