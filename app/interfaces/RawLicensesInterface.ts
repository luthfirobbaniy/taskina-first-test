export interface RawLicensesInterface {
  [Key: string]: {
    name?: string;
    licenses?: string;
    repository?: string;
    copyright?: string;
    url?: string;
    publisher?: string;
    email?: string;
    version?: string;
    path?: string;
    licenseFile?: string;
    licenseText?: string;
  }
}
