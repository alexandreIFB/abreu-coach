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

export function createRandomDivision(): TrainingDivision {
  return {
    'id': faker.string.uuid(),
    'name': faker.helpers.arrayElement(['Peito + Triceps', 'Costas + Biceps', 'Braço', 'Ombro', 'Perna', 'Força']),
    'exercises': [
      {
        'name': 'Supino Reto',
        'description': 'Realizar 4 séries de 12 repetições com 60 segundos de descanso entre as séries.',
        'exerciseTechnique': 'Instruções detalhadas de como realizar o supino corretamente.',
        'equipment': 'Banco de supino, barra e pesos',
        'demoImage': 'URL da imagem ou vídeo de demonstração',
        'notes': 'Dicas adicionais, como ajuste de altura do banco.'
      },
      {
        'name': 'Tríceps Pulldown',
        'description': 'Realizar 3 séries de 15 repetições com 45 segundos de descanso entre as séries.',
        'exerciseTechnique': 'Instruções detalhadas de como realizar o tríceps pulldown corretamente.',
        'equipment': 'Máquina de tríceps pulldown',
        'demoImage': 'URL da imagem ou vídeo de demonstração',
        'notes': 'Dicas adicionais, como pegada recomendada.'
      }
    ]
  };
}

export const divisonList: TrainingDivision[] = faker.helpers.multiple(createRandomDivision, {
  count: 7,
});

const notExpiredTraining: TrainingPlan = {
  'id': faker.string.uuid(),
  'clientId': '1',
  'description': faker.helpers.arrayElement(['Adaptação', 'Cutting', 'Off Season']),
  'name': 'Treino ' + faker.company.name(),
  'startDate': '2023-09-22',
  'expirationDate': '2023-10-22',
  'divisions': divisonList,
};

export function generateRandomTraining(): TrainingPlan{
  return {
    'id': faker.string.uuid(),
    'clientId': '1',
    'description': faker.helpers.arrayElement(['Adaptação', 'Cutting', 'Off Season']),
    'name': 'Treino ' + faker.company.name(),
    'startDate': '2023-08-22',
    'expirationDate': '2023-09-22',
    'divisions': divisonList,
  };
}

export const training: TrainingPlan = generateRandomTraining();

export const trainingList: TrainingPlan[] = [notExpiredTraining, generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining()];
