{
  // poblem 8
  const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean =>
    keys.every((key) => key in obj);
  const person = {
    name: "Azad",
    age: 30,
    email: "azad@azad.com",
  };
  const validKeys: (keyof typeof person)[] = ["name", "age", "email"];
  const result1 = validateKeys(person, validKeys);
  const invalidKeys: (keyof typeof person)[] = ["name", "age", "address"];
  const result2 = validateKeys(person, invalidKeys);

  console.log(result1);
  console.log(result2);
}
