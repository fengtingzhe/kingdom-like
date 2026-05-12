# CURRENT_TASK：当前任务

## 任务名称

沉淀核心玩法设计到项目文档。

---

## 背景

人类制作人已确认项目核心方向：本项目是一款面向泛用户的轻策略探索建造 Demo，核心乐趣放在探索上，对 SLG 和 RTS 做减法。

当前需要把本轮讨论中已经确认的项目定位、核心玩法、经济系统、建筑系统、探索规则、画面要求和体验边界写入仓库文档，供后续 Codex / DeepSeek / Godot Demo 开发读取。

---

## 本任务服务的 Demo 目标

- [x] 工程基础
- [x] 任务管理
- [x] 设计边界
- [x] 核心玩法
- [x] UI 流程
- [x] 视觉表现

---

## 范围

本轮只做：

- 阅读项目现有可读文档；
- 填写 README.md 中的项目一句话描述和设计边界；
- 填写 DESIGN_HUB/01_PROJECT_BRIEF.md；
- 填写 DESIGN_HUB/02_CORE_GAMEPLAY.md；
- 填写 DESIGN_HUB/03_PLAYER_EXPERIENCE.md；
- 填写 DESIGN_HUB/04_SYSTEM_OVERVIEW.md；
- 填写 DESIGN_HUB/05_ECONOMY_AND_BALANCE.md；
- 填写 DESIGN_HUB/06_CONTENT_PLAN.md；
- 填写 DESIGN_HUB/07_ART_AND_AUDIO_DIRECTION.md；
- 填写 DESIGN_HUB/08_UX_FLOW.md；
- 更新 DESIGN_HUB/09_DECISIONS.md；
- 更新 AI_TASKS/CHANGELOG.md 和 DEV_LOG.md。

---

## 不做

本轮明确不做：

- 不创建 Godot 场景；
- 不写 GDScript 玩法代码；
- 不导入美术资源；
- 不接入广告 / 支付 / 后端；
- 不实现完整玩法；
- 不新增复杂系统；
- 不修改 AI_RULES 核心规则。

---

## 验收标准

- [x] GitHub 仓库中基础目录结构存在；
- [x] 策划维护文件已放入 DESIGN_HUB/；
- [x] AI 规则文件已放入 AI_RULES/；
- [x] AI 任务文件已放入 AI_TASKS/；
- [x] 核心玩法方向已写入 DESIGN_HUB；
- [x] 关键确认决策已写入 DESIGN_HUB/09_DECISIONS.md；
- [x] 后续 AI 可以基于本设计开始第一版 Godot Demo；
- [ ] 创建 Godot 项目文件；
- [ ] 创建第一版主场景；
- [ ] 创建第一版玩家控制；
- [ ] 创建第一版核心玩法 Demo。

---

## 下一轮建议

下一轮建议创建第一版 Godot 空项目和可运行主场景，并只验证最小核心闭环：

```text
玩家移动 → 金币 HUD → 可互动树金币槽 → 投金币 → 工人砍树 → 清理边界 → 建筑节点出现 → 昼夜切换占位
```