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

describe("Report Function", function() {
  var array = [4, 2, 1, 0, 413, 159, 52, 8];
  it("SHould make a report based off everything in this array", function() {
    const result = age.report(array);
    expect(result).toMatch("Your Life expectancy on Mercury is 413 more years. Your Life expectancy on Venus is 159 more years. Your Life expectancy on Mars is 52 more years. Your Life expectancy on Jupiter is 8 more years.");
  })
})
