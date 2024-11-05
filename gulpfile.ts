import { parallel, series, TaskFunction } from "gulp";
import { reactTask } from "./packages/react/gulp";

const source: string[] = ["svg/*.svg"];

const build: TaskFunction = series(parallel(reactTask(source)));

export default build;
