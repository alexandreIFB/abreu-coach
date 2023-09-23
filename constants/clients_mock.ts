
// Define an interface to represent a client
export interface Client {
  id: string;
  name: string;
  gender: string;
  age: number;
  profileImage?: string;
}

// ESM
import { Faker, faker, pt_BR } from '@faker-js/faker';

export const fakerBr = new Faker({
  locale: [pt_BR],
});

// CJS

export function createRandomClient(): Client {
  return {
    id: fakerBr.string.uuid(),
    name: fakerBr.person.fullName(),
    gender: faker.helpers.arrayElement(['Masculino', 'Feminino']),
    age: fakerBr.number.int({max: 60, min: 10}),
    profileImage: fakerBr.image.avatar(),
  };
}

export const clientList: Client[] = faker.helpers.multiple(createRandomClient, {
  count: 25,
});

type GroupClients = {
  [key: string]: Client[];
};


export function groupClientsByInitial(clients: Client[]) {
  const groupedClients: GroupClients = {};
  clients.forEach(client => {
    const initial = client.name.charAt(0).toUpperCase();
    if (!groupedClients[initial]) {
      groupedClients[initial] = [];
    }
    groupedClients[initial].push(client);
  });
  // Ordenar os clientes dentro de cada seção
  Object.keys(groupedClients).forEach(initial => {
    groupedClients[initial].sort((a, b) => a.name.localeCompare(b.name));
  });

  return groupedClients;
}

