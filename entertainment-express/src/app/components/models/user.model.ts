export interface User {
  _id: { $oid: string };
  username: string;
  status: boolean;
  gender: string;
  membership_type: string;
  bio: string;
  date_of_birth: string;
}
