# CURRENT_TASK：当前任务

## 任务名称

创建网页端可试玩 Demo 原型。

---

## 背景

用户要求读取 `D:\work\kingdom-like` 下所有内容，并按照现有设计要求开发一个网页端 Demo 游戏，同时先检查文件夹内开发工具是否完备。

检查结果：

- 仓库当前主要是设计文档、AI 规则和占位目录；
- `Tools/` 只有 `.gitkeep`，没有项目内开发工具；
- 未发现 `project.godot`、`package.json`、`index.html`、`.gd`、`.tscn` 等实际工程文件；
- 本机可用 Node.js / npm / git / Python；
- 未找到 Godot 命令。

由于本轮用户明确要求网页端 Demo，本任务以独立 Web/H5 原型方式实现，不修改已确认的 Godot 主引擎决策，不迁移核心技术路线。

---

## 本任务服务的 Demo 目标

- [x] 核心玩法
- [x] UI 流程
- [x] 视觉表现
- [x] 数值验证
- [x] 工程基础

---

## 范围

本轮只做：

- 读取项目现有可读内容；
- 检查项目内和本机可用开发工具；
- 创建无第三方依赖的 Web demo；
- 实现玩家移动、金币 HUD、投金币交互、工人砍树、边界清理、节点建造、昼夜循环、夜晚防守和简单胜负；
- 将核心数值放入 `Data/config/`；
- 在 `Tools/` 提供本地静态服务器；
- 在 `Tests/` 提供 smoke test；
- 更新 `AI_TASKS/CHANGELOG.md` 和 `AI_TASKS/DEV_LOG.md`。

---

## 不做

本轮明确不做：

- 不创建或修改 Godot 项目；
- 不修改 `README.md`；
- 不修改 `DESIGN_HUB/` 核心策划文档；
- 不修改 `AI_RULES/` 核心规则；
- 不引入 npm 第三方依赖；
- 不做完整商业化、后端、账号、SDK；
- 不做自由建筑摆放、多资源经济、RTS 框选和复杂战斗。

---

## 允许修改的文件

- `Builds/web-demo/`
- `Data/config/`
- `Tools/`
- `Tests/`
- `AI_TASKS/CURRENT_TASK.md`
- `AI_TASKS/CHANGELOG.md`
- `AI_TASKS/DEV_LOG.md`

---

## 禁止修改的文件

- `README.md`
- `DESIGN_HUB/`
- `AI_RULES/`
- `project.godot`
- 核心主场景
- 核心 Autoload 配置

---

## 设计约束

- 探索优先，建造和扩张服务探索；
- 玩家只控制一个主角；
- 村民自动执行命令；
- 只有金币一种资源；
- 建筑只能在固定节点建造；
- 砍树作用是扩大王国控制范围，不产出木材；
- 夜晚防守是扩张压力反馈，不是主玩法；
- 画面优先保证可读性。

---

## 技术约束

- 使用原生 HTML / CSS / JavaScript；
- 使用 Canvas 渲染；
- 不引入第三方依赖；
- 数值优先来自 `Data/config/web_demo_balance.json`；
- 本地运行通过 `Tools/web-demo-server.mjs`。

---

## 验收标准

- [x] 项目工具完整性已检查；
- [x] Web demo 可以通过本地 Node 静态服务器启动；
- [x] 页面包含可运行 Canvas 游戏；
- [x] 玩家可移动并进入森林；
- [x] 可靠近边界树投金币；
- [x] 工人会自动移动并砍树；
- [x] 砍树后王国控制范围扩大；
- [x] 清理后可出现建造节点；
- [x] 可建木墙 / 哨塔 / 修复地标；
- [x] 存在昼夜变化和夜晚敌人袭击；
- [x] 存在基础胜负条件；
- [x] 已提供 smoke test。

---

## 下一轮建议

用人类试玩反馈验证：

```text
玩家是否能在 1 分钟内理解：探索森林 → 投金币 → 工人执行 → 边界扩大。
```

如果网页 Demo 方向被接受，下一轮可补：

- 更清楚的新手引导；
- 更完整的地标胜利流程；
- 更细的数值调参；
- 更接近 Godot 主项目的数据结构映射。
