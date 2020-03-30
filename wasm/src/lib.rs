use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = app)]
  fn run(event: &str, p: &str);
}

#[wasm_bindgen(start)]
pub fn start() {
  run("@hello", "hello world from rust");
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  a + b
}