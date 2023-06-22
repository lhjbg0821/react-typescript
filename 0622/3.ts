function someFunction<T>(a: T): T {
  return a;
}

//함수를 호출할 때 타입을 정해주는 게 제네릭
someFunction<number>(1);
someFunction<string>("a");

// function someNumberFunction(a: number): number {
//   return a;
// }

// function someStringFunction(a: string): string {
//   return a;
// }

// someNumberFunction(1);
// someStringFunction("a");
