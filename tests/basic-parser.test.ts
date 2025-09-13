import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { Schema, z } from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

// Tests I wrote:

test("parseCSV fields with commas inside quotes", async () => {
  const results = await parseCSV(path.join(__dirname, "../data/people2.csv"));

  expect(results).toHaveLength(1);
  expect(results[0]).toHaveLength(3);
  expect(results[0]).toEqual(['Caesar', 'Julius', 'veni, vidi, vici']);
});

test("parseCSV handles empty files", async () => {
  const results = await parseCSV(path.join(__dirname, "../data/people3.csv"));

  expect(results).toHaveLength(4);
  expect(results[0]).toEqual(["Alice", "23", "", "New York"]);
  expect(results[1]).toEqual(["Julius", "", "Salad Maker", "Rome"]);
  expect(results[2]).toEqual(["", "10", "Astronaut", "Florida"]);
  expect(results[3]).toEqual(["Paula", "19", "Engineer", ""]);
});

test("parseCSV handles double quotes", async () => {
  const results = await parseCSV(path.join(__dirname, "../data/people4.csv"));

  expect(results).toHaveLength(2);
  
  expect(results[0]).toHaveLength(3);
  expect(results[0]).toEqual(["Hello", "I said \"HI\"", "HELLO \"HI\" WORLD!!!"]);

  expect(results[1]).toHaveLength(3);
  expect(results[1]).toEqual(["You're out of \"touch\"", "I'm out of", "TIME"]);
});

// creating a schema for people.csv (name, age)
const peopleRowSchema = z.tuple([z.string(), z.coerce.number().min(0)]);

test("parseCSV with schema success", () => {
  expect(peopleRowSchema.safeParse(["Alice", 30]).success).toBe(true);
});

test("parseCSV with schema failure", () => {
  expect(peopleRowSchema.safeParse(["Bob", "thirty"]).success).toBe(false);
});


// creating a schema for people2.csv (first name, last name, catchphrase?)
const people2RowSchema = z.tuple([z.string(), z.string(), z.string()]);

test("parseCSV people2 with schema success", () => {
  expect(people2RowSchema.safeParse(['Caesar', 'Julius', 'veni, vidi, vici']).success).toBe(true);
});

test("parseCSV people2 with schema failure", () => {
  expect(people2RowSchema.safeParse(['Caesar', 123, 'veni, vidi, vici']).success).toBe(false);
});




