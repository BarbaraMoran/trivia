export interface ITriviaCategories {
  trivia_categories: ITriviaCategory[];
}

export interface ITriviaCategory {
  id: number;
  name: string;
}

export interface ITriviaQuestions {
  response_code: number;
  results: IQuestion[];
}

export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  allAnswers: string[];
}
