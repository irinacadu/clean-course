(() => {
  //En el código siguiente no hay responsabilidad única en classes-b refactorizamos
  type Gender = "M" | "F";
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAcess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
    }
    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenfolder: string,
      email: string,
      role: string,
      lastAcess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, lastAcess, name, gender, birthdate);
    }
  }

  const userSetting = new UserSettings(
    "/usr/home",
    "/usr/home",
    "Irina@gmail.com",
    "admin",
    new Date("01-01-2024"),
    "Irina",
    "F",
    new Date("01-01-2024")
  );
  // const newPerson = new User ('irina','F',new Date('1983-12-14'));
  // console.log({newPerson});
})();
