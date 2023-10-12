type MyType = String | Boolean | [String, number]
export function Challenge() {
  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
