declare module 'ml-regression-base' {
  export interface RegressionScore {
    r: number;
    r2: number;
    chi2: number;
    rmsd: number;
  }

  export default class BaseRegression {
    predict(x: number): number;
    predict(x: number[]): number[];
    toString(): string;
    toLaTeX(): string;
    score(x: number[], y: number[]): RegressionScore;
  }
}
