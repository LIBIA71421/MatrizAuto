import mover from "./sumador.js";

describe("Mover Auto", () => {
  it("deberia mostrar la posicion inicial 0,0N", () => {
    expect(mover()).toEqual("0,0N");
  });
});

describe("Mover Auto Norte", () => {
  it("deberia moverse hacia el norte", () => {
    expect(mover("A")).toEqual("0,1N");
  });
});
describe("Mover Auto Derecha", () => {
  it("deberia cambiar de direccion a la derecha", () => {
    expect(mover("D")).toEqual("0,1E");
  });
});
