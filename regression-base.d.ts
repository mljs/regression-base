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
    toString(precision?: number): string;
    toLaTeX(precision?: number): string;
    score(x: number[], y: number[]): RegressionScore;
  }
}
