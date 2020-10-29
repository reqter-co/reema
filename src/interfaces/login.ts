export interface ILogin {
  name: string;
  formtitle: string;
  formdescription: string;
  emailplaceholder: string;
  passwordplaceholder: string;
  forgotpasstext: string;
  submittext: string;
  socialboxtitle: string;
  signuptext: string;
  signuplinktext: string;
  infotitle: string;
  infodescripton: string;
  infoimage?: string;
  [key: string]: unknown;
}
