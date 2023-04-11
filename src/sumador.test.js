import mover from "./sumador.js";

describe("Mover Auto", () => {
  it("deberia mostrar la posicion inicial 0,0N", () => {
    expect(mover()).toEqual("0,0N");
  });
});
describe("Mover Auto Norte", () => {
  it("deberia moverse hacia el norte", () => {
    expect(mover("N")).toEqual("0,1N");
  });
});