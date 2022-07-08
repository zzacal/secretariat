import { ISecretService } from "../../common/src";
import { PrioritizedService } from "./prioritizedService";

describe("Prioritized", () => {
  const secrets1: ISecretService = {
    get: async (key: string) => {
      switch (key) {
        case "onOne":
        case "onOneTwo":
        case "onOneThree":
        case "onAll":
          return "fromOne";
        default:
          return null;
      }
    },
  };

  const secrets2: ISecretService = {
    get: async (key: string) => {
      switch (key) {
        case "onTwo":
        case "onOneTwo":
        case "onTwoThree":
        case "onAll":
          return "fromTwo";
        default:
          return null;
      }
    },
  };

  const secrets3: ISecretService = {
    get: async (key: string) => {
      switch (key) {
        case "onThree":
        case "onOneThree":
        case "onTwoThree":
        case "onAll":
          return "fromThree";
        default:
          return null;
      }
    },
  };
  const priorized = new PrioritizedService([secrets1, secrets2, secrets3]);

  it("must prioritize", async () => {
    expect(await priorized.get("onAll")).toEqual("fromOne");
    expect(await priorized.get("onOneTwo")).toEqual("fromOne");
    expect(await priorized.get("onOneThree")).toEqual("fromOne");
    expect(await priorized.get("onTwoThree")).toEqual("fromTwo");
  });

  it("must return null when key not in any", async () => {
    expect(await priorized.get("onNone")).toBeNull();
  });
});
