import { faker } from '@faker-js/faker';

export interface Exercise {
  name: string;
  description: string;
  equipment: string;
  demoImage?: string;
  notes: string;
}

export interface TrainingDivision {
  _id: string;
  name: string;
  exercises: Exercise[];
}

export interface TrainingPlan  {
  _id: string;
  clientId: string;
  description: string;
  name: string;
  startDate: string;
  expirationDate: string;
  divisions: TrainingDivision[];
}

const trainingNames = [
  'Treino de Desenvolvimento',
  'Treino de Resistência',
  'Treino de Potência',
  'Treino de Hipertrofia',
  'Treino de Recuperação',
  'Treino de Velocidade',
  'Treino de Agilidade',
  'Treino de Flexibilidade',
  'Treino de Explosão',
  'Treino de Equilíbrio'
];

const exercises: Exercise[] = [
  {
    name: 'Supino Reto',
    description: 'Realizar 4 séries de 12 repetições com 60 segundos de descanso entre as séries.',
    equipment: 'Banco de supino, barra e pesos',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Certifique-se de ajustar o banco para a altura adequada, de modo que a barra toque levemente no peito durante o movimento. Mantenha uma pegada firme e estável na barra para evitar lesões nos pulsos.'
  },
  {
    name: 'Tríceps Pulldown',
    description: 'Realizar 3 séries de 15 repetições com 45 segundos de descanso entre as séries.',
    equipment: 'Máquina de tríceps pulldown',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Experimente diferentes pegadas na barra da máquina para atingir diferentes partes dos tríceps. Mantenha os cotovelos próximos ao corpo durante o exercício para maximizar o envolvimento dos tríceps.'
  },
  {
    name: 'Agachamento Livre',
    description: 'Realizar 5 séries de 10 repetições com 90 segundos de descanso entre as séries.',
    equipment: 'Barra e pesos',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Posicione os pés na largura dos ombros e mantenha os joelhos alinhados com os pés durante o agachamento. Mantenha as costas retas e olhe para frente para manter uma boa forma.'
  },
  {
    name: 'Rosca Direta',
    description: 'Realizar 3 séries de 12 repetições com 45 segundos de descanso entre as séries.',
    equipment: 'Barra EZ ou halteres',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Mantenha os cotovelos próximos ao corpo durante o movimento e evite balançar o corpo para ajudar no levantamento. Use um peso adequado para evitar lesões nos braços.'
  },
  {
    name: 'Leg Press',
    description: 'Realizar 4 séries de 12 repetições com 60 segundos de descanso entre as séries.',
    equipment: 'Máquina de leg press',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Ajuste o assento de acordo com sua altura para garantir um movimento confortável. Mantenha os joelhos alinhados com os pés e evite trancar as pernas completamente no topo do movimento para evitar tensões indesejadas.'
  }
];


function createRandomExercice(): Exercise {
  return faker.helpers.arrayElement(exercises);
}

function createRandomDivision(): TrainingDivision {
  return {
    '_id': faker.string.uuid(),
    'name': faker.helpers.arrayElement(['Peito + Triceps', 'Costas + Biceps', 'Braço', 'Ombro + Trapézio', 'Perna + Abs', 'Força']),
    'exercises': faker.helpers.multiple(createRandomExercice, {
      count: 7,
    })
  };
}

export const divisonList: TrainingDivision[] = faker.helpers.multiple(createRandomDivision, {
  count: 7,
});

const notExpiredTraining: TrainingPlan = {
  '_id': faker.string.uuid(),
  'clientId': '1',
  'description': faker.helpers.arrayElement(['Adaptação', 'Cutting', 'Off Season']),
  'name': faker.helpers.arrayElement(trainingNames),
  'startDate': '2023-09-22',
  'expirationDate': '2023-10-22',
  'divisions': divisonList,
};

export function generateRandomTraining(): TrainingPlan{


  return {
    '_id': faker.string.uuid(),
    'clientId': '1',
    'name': faker.helpers.arrayElement(trainingNames),
    'description': faker.helpers.arrayElement(['Adaptação', 'Cutting', 'Off Season']),
    'startDate': '2023-08-22',
    'expirationDate': '2023-09-22',
    'divisions': divisonList,
  };
}

export const training: TrainingPlan = generateRandomTraining();

export const trainingList: TrainingPlan[] = [notExpiredTraining, generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining()];
