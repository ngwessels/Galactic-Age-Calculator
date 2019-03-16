import { Age } from './../src/js/galacticAge.js';


let age = new Age();


describe("Mars Age", function() {
  it("Should tell me my age on Mars", function() {
    const result = age.mars(16);
    expect(result).toEqual(9);
  });
});
describe("Mercuy Age", function() {
  it("Should tell me my age on Mercury", function() {
    const result = age.mercury(20);
    expect(result).toEqual(83);
  });
});

describe("Venus Age", function() {
  it("Should tell me my age on Venus", function() {
    const result = age.venus(44);
    expect(result).toEqual(71);
  });
});

describe("Jupiter Age", function() {
  it("Should tell me my age on Jupiter", function() {
    const result = age.jupiter(80);
    expect(result).toEqual(7);
  });
});
