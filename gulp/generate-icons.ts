import { dest, src } from "gulp";
import rename from "gulp-rename";

import { svgToElement, SvgToElementOptions } from "./svg-info-check";
import { svgo, SVGOConfig } from "./svgo";
import { useTemplate, IconFileContentGenerator } from "./use-template";

interface GenerateIconOptions {
  from: string[];
  to: string;
  iconGenerator: IconFileContentGenerator;
  options?: SvgToElementOptions;
  extName?: string;
  config?: SVGOConfig;
}

export const generateIcons = ({
  from,
  to,
  iconGenerator,
  extName = ".tsx",
  config,
  options,
}: GenerateIconOptions) =>
  function generateIcons() {
    return src(from)
      .pipe(svgo(config)) //优化svg文件 统一格式
      .pipe(svgToElement(options)) // 转为ast字符串
      .pipe(useTemplate(iconGenerator)) //替换模板中的变量
      .pipe(
        rename((file) => {
          if (file.basename) {
            // eslint-disable-next-line no-param-reassign
            file.extname = extName;
          }
        })
      )
      .pipe(dest(to));
  };
