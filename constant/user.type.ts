interface Address {
  address: string;
  city: string;
  state: string;
  // Otros campos relacionados con la dirección si los hay
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  // Otros campos bancarios si los hay
}

interface Company {
  department: string;
  name: string;
  title: string;
  // Otros campos relacionados con la empresa si los hay
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
  // Otros campos relacionados con la criptomoneda si los hay
}

interface Hair {
  color: string;
  type: string;
  // Otros campos relacionados con el cabello si los hay
}

interface Person {
  age: number;
  birthDate: string;
  bloodGroup: string;
  company: Company;
  crypto: Crypto;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: Hair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
  address: Address;
  bank: Bank;
}

const person: Person = {
  age: 28,
  birthDate: "1996-5-30",
  bloodGroup: "O-",
  company: {
    department: "Engineering",
    name: "Dooley, Kozey and Cronin",
    title: "Sales Manager",
    // Otros campos de la empresa si los hay
  },
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
    // Otros campos de la criptomoneda si los hay
  },
  ein: "977-175",
  email: "emily.johnson@x.dummyjson.com",
  eyeColor: "Green",
  firstName: "Emily",
  gender: "female",
  hair: {
    color: "Brown",
    type: "Curly",
    // Otros campos del cabello si los hay
  },
  height: 193.24,
  id: 1,
  image: "https://dummyjson.com/icon/emilys/128",
  ip: "42.48.100.32",
  lastName: "Johnson",
  macAddress: "47:fa:41:18:ec:eb",
  maidenName: "Smith",
  password: "emilyspass",
  phone: "+81 965-431-3024",
  role: "admin",
  ssn: "900-590-289",
  university: "University of Wisconsin--Madison",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  username: "emilys",
  weight: 63.16,
  address: {
    address: "626 Main Street",
    city: "Phoenix",
    state: "Mississippi",
    // Otros campos de la dirección si los hay
  },
  bank: {
    cardExpire: "03/26",
    cardNumber: "9289760655481815",
    cardType: "Elo",
    // Otros campos bancarios si los hay
  },
};
interface Address {
  address: string;
  city: string;
  state: string;
  // Otros campos relacionados con la dirección si los hay
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  // Otros campos bancarios si los hay
}

interface Company {
  department: string;
  name: string;
  title: string;
  // Otros campos relacionados con la empresa si los hay
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
  // Otros campos relacionados con la criptomoneda si los hay
}

interface Hair {
  color: string;
  type: string;
  // Otros campos relacionados con el cabello si los hay
}

interface Person {
  age: number;
  birthDate: string;
  bloodGroup: string;
  company: Company;
  crypto: Crypto;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: Hair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
  address: Address;
  bank: Bank;
}
export { Person };
