import { faker } from '@faker-js/faker';

interface Exercise {
  name: string;
  description: string;
  exerciseTechnique: string;
  equipment: string;
  demoImage: string;
  notes: string;
}

export interface TrainingDivision {
  id: string;
  name: string;
  exercises: Exercise[];
}

export interface TrainingPlan  {
  id: string;
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
    exerciseTechnique: 'Instruções detalhadas de como realizar o supino corretamente.',
    equipment: 'Banco de supino, barra e pesos',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Dicas adicionais, como ajuste de altura do banco.'
  },
  {
    name: 'Tríceps Pulldown',
    description: 'Realizar 3 séries de 15 repetições com 45 segundos de descanso entre as séries.',
    exerciseTechnique: 'Instruções detalhadas de como realizar o tríceps pulldown corretamente.',
    equipment: 'Máquina de tríceps pulldown',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Dicas adicionais, como pegada recomendada.'
  },
  {
    name: 'Agachamento Livre',
    description: 'Realizar 5 séries de 10 repetições com 90 segundos de descanso entre as séries.',
    exerciseTechnique: 'Instruções detalhadas de como realizar o agachamento livre corretamente.',
    equipment: 'Barra e pesos',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Dicas adicionais, como posição dos pés.'
  },
  {
    name: 'Rosca Direta',
    description: 'Realizar 3 séries de 12 repetições com 45 segundos de descanso entre as séries.',
    exerciseTechnique: 'Instruções detalhadas de como realizar a rosca direta corretamente.',
    equipment: 'Barra EZ ou halteres',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Dicas adicionais, como postura.'
  },
  {
    name: 'Leg Press',
    description: 'Realizar 4 séries de 12 repetições com 60 segundos de descanso entre as séries.',
    exerciseTechnique: 'Instruções detalhadas de como realizar o leg press corretamente.',
    equipment: 'Máquina de leg press',
    demoImage: 'URL da imagem ou vídeo de demonstração',
    notes: 'Dicas adicionais, como ajuste do assento.'
  }
];


function createRandomExercice(): Exercise {
  return faker.helpers.arrayElement(exercises);
}

function createRandomDivision(): TrainingDivision {
  return {
    'id': faker.string.uuid(),
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
  'id': faker.string.uuid(),
  'clientId': '1',
  'description': faker.helpers.arrayElement(['Adaptação', 'Cutting', 'Off Season']),
  'name': faker.helpers.arrayElement(trainingNames),
  'startDate': '2023-09-22',
  'expirationDate': '2023-10-22',
  'divisions': divisonList,
};

export function generateRandomTraining(): TrainingPlan{


  return {
    'id': faker.string.uuid(),
    'clientId': '1',
    'description': faker.helpers.arrayElement(['Adaptação', 'Cutting', 'Off Season']),
    'name': faker.helpers.arrayElement(trainingNames),
    'startDate': '2023-08-22',
    'expirationDate': '2023-09-22',
    'divisions': divisonList,
  };
}

export const training: TrainingPlan = generateRandomTraining();

export const trainingList: TrainingPlan[] = [notExpiredTraining, generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining()];
