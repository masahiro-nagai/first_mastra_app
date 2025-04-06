import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { windsurfRulesAgent } from "./agents";

export const mastra = new Mastra({
    agents: {
        windsurfRulesAgent,
    },
    logger: createLogger({
        name: "GitHub Windsurf Rules Agent",
        level: "info",
    }),
});