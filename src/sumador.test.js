import mover from "./sumador.js";

describe("Mover Auto", () => {
  it("deberia mostrar la posicion inicial 0,0N", () => {
    expect(mover()).toEqual("0,0N");
  });
});
