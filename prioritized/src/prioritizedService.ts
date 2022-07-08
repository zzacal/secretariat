import { ISecretService } from "../../common/src";

export class PrioritizedService implements ISecretService {
  constructor(private stores: Array<ISecretService>) {}
  public get: (key: string) => Promise<string | null | undefined> = async (
    key: string
  ) => {
    for (const service of this.stores) {
      const value = await service.get(key);
      if (value) return value;
    }
    return null;
  };
}
