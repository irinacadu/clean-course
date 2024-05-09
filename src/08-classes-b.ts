(() => {
  type Gender = "M" | "F";
  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  interface UserProps {
    email: string;
    role: string;
    lastAcess: Date;
  }


  interface SettingsProps {
    workingDirectory: string;
    lastOpenfolder: string;
  }

  class UserSettings {
 
    public settingsProps: SettingsProps;
    public personProps: PersonProps;
    public userProps: UserProps;
    constructor(
      settingsProps: SettingsProps,
      personProps: PersonProps,
      userProps: UserProps
    ) {
      (this.settingsProps = settingsProps),
        (this.userProps = userProps),
        (this.personProps = personProps);
    }
  }

  const userSettings = new UserSettings(
    {workingDirectory:'/home',lastOpenfolder:'home'},
    {name: 'Irina', gender: 'F', birthdate: new Date('12-14-1983')},
    {email:'fernando@google.com',role:'Admin',lastAcess: new Date('1985-10-21')}
   

);

console.log({userSettings});
})();
