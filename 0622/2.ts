type TCreature = {
  name: string;
  level: number;
};

type THuman = TCreature & {
  age: number;
};

interface ICreature {
  name: string;
  level: number;
}

interface IHuman extends ICreature {
  age: number;
}

const player: TCreature = {
  name: "Knight",
  level: 10,
};

const monster: ICreature = {
  name: "Skeleton",
  level: 8,
};
