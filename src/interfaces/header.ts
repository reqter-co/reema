export interface IHeader {
  name: {
    [key: string]: string;
  };
  bloglinktitle: {
    [key: string]: string;
  };
  loginlinktitle: {
    [key: string]: string;
  };
  contactuslinktitle: {
    [key: string]: string;
  };
  logotitle: {
    [key: string]: string;
  };
  [key: string]: unknown;
}
