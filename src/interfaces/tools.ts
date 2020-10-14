export type ITools = {
  _id: string;
  categoryid: {
    fields: {
      [key: string]: unknown;
    };
    _id: string;
  };
  name: any;
  description?: any;
  icon?: string;
  slug: string;
  country: string;
};
