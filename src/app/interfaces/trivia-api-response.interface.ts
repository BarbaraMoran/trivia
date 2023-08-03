
export interface ITriviaCategories {
  trivia_categories: ITriviaCategory[];
}

export interface ITriviaCategory {
  id:   number;
  name: string;
}

export interface ITriviaQuestions {
  response_code: number;
  results:       IResult[];
}

export interface IResult {
  category:          string;
  type:              Type;
  difficulty:        Difficulty;
  question:          string;
  correct_answer:    string;
  incorrect_answers: string[];
}

export enum Difficulty {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

export enum Type {
  Multiple = "multiple",
}
