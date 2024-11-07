{
  // poblem 5
  const getProperty = <T, K extends keyof T>(obj: T, prop: K): T[K] => {
    return obj[prop];
  };

  const person = {
    name: "Azad",
    age: 30,
    isAdmin: true,
  };

  const name = getProperty(person, "name");
  const age = getProperty(person, "age");
  const isAdmin = getProperty(person, "isAdmin");

  console.log(name);
  console.log(age);
  console.log(isAdmin);
}
