import app from 'apprun';

let wasm;
import('../wasm/pkg').then(module => wasm = module);

const state = {
  title: 'Hello world - AppRun !',
  count: 0
}

const add = (state, num) => ({
  ...state,
  count: wasm.add(state.count, num)
});

const view = ({ title, count }) => <>
  <h1>{title}</h1>
  <h1>{count}</h1>
  <button $onclick={[add, -1]}>-1</button>
  <button $onclick={[add, +1]}>+1</button>
</>;

const update = {
  '@hello': (state, title) => ({...state, title})
}

app.start(document.body, state, view, update);
