{
  // poblem 6
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (
    profile: Profile,
    updates: Partial<Profile>
  ): Profile => {
    return { ...profile, ...updates };
  };
  const profile: Profile = {
    name: "Azad",
    age: 25,
    email: "azad@azad.com",
  };
  const updatedProfile = updateProfile(profile, {
    age: 26,
    email: "azad@azadddddd.com",
  });

  //   console.log(updatedProfile);
  const partialUpdate = updateProfile(profile, { name: "Azad" });

  //   console.log(partialUpdate);
}
