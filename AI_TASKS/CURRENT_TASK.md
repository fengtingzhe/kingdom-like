# CURRENT_TASK：当前任务

## 任务名称

v0.3.4 / 整体镜头缩放。

---

## 背景

上一版已加入 Console 和镜头缩放滑竿。当前反馈是缩放仅影响地图，没有整体放缩；本轮改为世界层整体缩放，并让镜头始终以主角为中心。

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

- 保持基础地块尺寸独立于镜头缩放；
- 新增主角中心镜头焦点；
- 将地图、角色、树、建筑、特效和交互提示统一放入世界层缩放；
- 点击移动坐标同步经过镜头逆变换；
- 夜晚营火光照位置同步适配镜头变换；
- 增强 `Tests/web-demo-smoke.mjs`，检查世界镜头逻辑；
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
- 不做自由建筑摆放、多资源经济、RTS 框选和复杂战斗；
- 不新增 React、Phaser、Three.js 或其他大型依赖；
- 不把 Web Demo 宣称为最终游戏；
- 不新增大型系统或复杂菜单。

---

## 允许修改的文件

- `Builds/web-demo/`
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

- [x] `node --check Builds/web-demo/game.js` 通过；
- [x] `node --check Tools/web-demo-server.mjs` 通过；
- [x] `node Tests/web-demo-smoke.mjs` 通过；
- [x] 打开 `http://127.0.0.1:4173/Builds/web-demo/` 可以看到 `Console` 按钮；
- [x] 调节镜头缩放滑竿后世界层整体缩放；
- [x] 主角保持在镜头中心；
- [x] 点击移动仍可响应；
- [x] 浏览器控制台无错误。

---

## 下一轮建议

继续用人类试玩反馈验证：

```text
镜头缩放在 120%、200%、更高比例下哪一个更适合当前 Demo。
```

下一轮如继续做调试工具，新增调试项统一放入 Console 面板。
