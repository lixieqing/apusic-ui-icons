# 开发指南

ApusicUI Icons 仓库负责生产和构建 ApusicUI 所有图标相关的资源和包。也可以用这个仓库构建自己的图标资源和包。开发前请确认已经安装过 pnpm 。

## 加入原始图标 ⛽️

将原始的 svg 图标资源放在 `svg/` 目录下。

## 图标资源生成 🏗

在根目录运行 `pnpm run generate`，该命令会全量更新 `packages/` 目录下的各框架包的单 Icon 的资源。同时，还会生产`resources/`目录下 iconfont 各字体资源 和 svgsprite 资源。

如果更新了原始图标资源之后，请务必运行 `pnpm run generate` 命令。

## 更新版本号及 CHANGELOG 🔖

在根目录运行 `npx changeset`，根据具体情况依次选择各个包的版本号变更规则，并填下 `CHANGELOG`的内容。

再执行 `pnpm changeset version`，CHANGELOG 的内容将依次注入到 `packages/` 内各个框架包的 `package.json` 及`CHANGELOG` 中。

## 构建 NPM 包 📦

在根目录执行 `pnpm run --filter "apusic-ui-icons-*" build`，将构建各框架包。

## 发布 NPM 包 🚀

在根目录执行 `pnpm publish -r`，将发布所有框架的 npm 包。
