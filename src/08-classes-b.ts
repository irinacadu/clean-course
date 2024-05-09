(() => {
  type Gender = "M" | "F";
  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      (this.name = name), (this.gender = gender), (this.birthdate = birthdate);
    }
  }

  interface UserProps {
    email: string;
    role: string;
    lastAcess: Date;
  }
  class User {
    public email: string;
    public role: string;
    private lastAcess: Date;
    public personProps: PersonProps;

    constructor(
      { email, role, lastAcess }: UserProps,
      personProps: PersonProps
    ) {
      (this.email = email),
        (this.role = role),
        (this.lastAcess = lastAcess),
        (this.personProps = personProps);
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenfolder: string;
  }

  class UserSettings {
    public workingDirectory: string;
    public lastOpenfolder: string;
    public personProps: PersonProps;
    public user: UserProps;
    constructor(
      { workingDirectory, lastOpenfolder }: UserSettingsProps,
      personProps: PersonProps,
      user: UserProps
    ) {
      (this.workingDirectory = workingDirectory),
        (this.lastOpenfolder = lastOpenfolder),
        (this.user = user),
        (this.personProps = personProps);
    }
  }
})();
