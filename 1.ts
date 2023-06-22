type TInfo = { name: string; age: number };
type TList = { token: string; seller: string; price: number };

interface IList {
  token: string;
  seller: string;
  price: number;
}

let lhjInfo: TInfo = {
  name: "ollok",
  age: 99,
};

let abcInfo: TInfo = {
  name: "abc",
  age: 20,
};

let a: TList[] = [
  {
    token: "abcd",
    seller: "defg",
    price: 1000,
  },
  {
    token: "abcd",
    seller: "defg",
    price: 1000,
  },
];
