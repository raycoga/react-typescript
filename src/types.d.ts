interface Sub {
  nick: string;
  email: string;
  website: string;
  phone?: string;
}
interface SubResponse {
  address: object;
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
export { Sub, SubResponse };
