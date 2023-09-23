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
  name: string;
  exercises: Exercise[];
}

export interface TrainingPlan  {
  id: string;
  clientId: string;
  name: string;
  startDate: string;
  expirationDate: string;
  divisions: TrainingDivision[];
}

export function generateRandomTraining(){
  return {
    'id': faker.string.uuid(),
    'clientId': '1',
    'name': 'Treino Inicial',
    'startDate': '2023-09-22',
    'expirationDate': '2023-10-22',
    'divisions': [
      {
        'name': 'Peito + Tríceps',
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
      },
      {
        'name': 'Costas + Bíceps',
        'exercises': [
          {
            'name': 'Puxada Alta',
            'description': 'Realizar 4 séries de 10 repetições com 60 segundos de descanso entre as séries.',
            'exerciseTechnique': 'Instruções detalhadas de como realizar a puxada alta corretamente.',
            'equipment': 'Máquina de puxada alta, barra e pesos',
            'demoImage': 'URL da imagem ou vídeo de demonstração',
            'notes': 'Dicas adicionais, como ajuste do peso.'
          },
          {
            'name': 'Rosca Direta',
            'description': 'Realizar 3 séries de 12 repetições com 45 segundos de descanso entre as séries.',
            'exerciseTechnique': 'Instruções detalhadas de como realizar a rosca direta corretamente.',
            'equipment': 'Barra reta e pesos',
            'demoImage': 'URL da imagem ou vídeo de demonstração',
            'notes': 'Dicas adicionais, como postura adequada.'
          }
        ]
      }
    ],
  };
}

export const training: TrainingPlan = generateRandomTraining();

export const trainingList: TrainingPlan[] = [generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining(),generateRandomTraining()];
