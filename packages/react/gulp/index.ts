import { parallel, series, TaskFunction } from "gulp";
import { clearDir } from "../../../gulp/clean-dir";
import { generateIcons } from "../../../gulp/generate-icons";
import { reactGetIconFileContent } from "./react-use-template";
import { generateEntry } from "../../../gulp/generate-entry";

export function reactTask(source: string[]): TaskFunction {
  return series(
    clearDir(["packages/react/src/components"]),
    parallel(
      generateIcons({
        from: source,
        to: "packages/react/src/components",
        iconGenerator: reactGetIconFileContent,
        options: {
          replaceColor: true,
        },
      })
    ),
    generateEntry({
      from: "packages/react/src/components/*",
      to: "packages/react/src",
    })
  );
}
