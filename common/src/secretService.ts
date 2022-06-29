export interface ISecretService {
  get: (key: string) => Promise<string>;
}
