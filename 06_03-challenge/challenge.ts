interface MyFunctionType {
  (arg0: number, arg1?: String): void
}

export function Challenge() {
  const myFunction: MyFunctionType = (
    requiredNumber,
    optionalString
  ) => {
    console.log(requiredNumber, optionalString);
  };

  myFunction(100);
  myFunction(100, "Foo!");
}
