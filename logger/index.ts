import { isProd } from "../is/env";
import * as loggerModule from "./logger";

export const logger = isProd ? () => () => {} : loggerModule.logger;
export const domain = isProd ? () => () => () => {} : loggerModule.domain;

export * from "./decorator";
export * from "./store";
