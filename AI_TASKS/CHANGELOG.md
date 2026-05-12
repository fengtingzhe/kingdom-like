# CHANGELOG

## 2026-05-12 / v0.0.2

### 本轮目标

将人类制作人已确认的核心玩法、项目定位、经济系统、建筑系统、探索规则、目标体验和画面方向沉淀到项目文档中。

---

### 已完成

- [x] 阅读仓库现有可读文档；
- [x] 更新 README.md 项目一句话描述和当前设计边界；
- [x] 填写 DESIGN_HUB/01_PROJECT_BRIEF.md；
- [x] 填写 DESIGN_HUB/02_CORE_GAMEPLAY.md；
- [x] 填写 DESIGN_HUB/03_PLAYER_EXPERIENCE.md；
- [x] 填写 DESIGN_HUB/04_SYSTEM_OVERVIEW.md；
- [x] 填写 DESIGN_HUB/05_ECONOMY_AND_BALANCE.md；
- [x] 填写 DESIGN_HUB/06_CONTENT_PLAN.md；
- [x] 填写 DESIGN_HUB/07_ART_AND_AUDIO_DIRECTION.md；
- [x] 填写 DESIGN_HUB/08_UX_FLOW.md；
- [x] 更新 DESIGN_HUB/09_DECISIONS.md；
- [x] 更新 AI_TASKS/CURRENT_TASK.md；
- [x] 更新 AI_TASKS/DEV_LOG.md。

---

### 本轮确认的核心设计

- 项目定位为面向泛用户的轻策略探索建造游戏；
- 核心乐趣放在探索上，建造和扩张服务探索；
- 游戏只有一种资源：金币；
- 生产出的只有金币，消耗的也只有金币；
- 建筑只能在特定节点建造，不做自由摆放；
- 建筑可以通过继续投金币升级；
- 玩家可以进入未砍伐森林探索；
- 村民、建筑、防线和稳定经济只能存在于已清理区域或王国控制范围内；
- 砍树的作用是扩大王国控制范围，不是采集木材；
- 夜晚防守是扩张压力反馈，不是主玩法；
- 画面采用 45 度斜俯视角，必须优先保证游戏可读性。

---

### 修改文件

- README.md
- DESIGN_HUB/01_PROJECT_BRIEF.md
- DESIGN_HUB/02_CORE_GAMEPLAY.md
- DESIGN_HUB/03_PLAYER_EXPERIENCE.md
- DESIGN_HUB/04_SYSTEM_OVERVIEW.md
- DESIGN_HUB/05_ECONOMY_AND_BALANCE.md
- DESIGN_HUB/06_CONTENT_PLAN.md
- DESIGN_HUB/07_ART_AND_AUDIO_DIRECTION.md
- DESIGN_HUB/08_UX_FLOW.md
- DESIGN_HUB/09_DECISIONS.md
- AI_TASKS/CURRENT_TASK.md
- AI_TASKS/CHANGELOG.md
- AI_TASKS/DEV_LOG.md

---

### 未完成

- [ ] 创建 Godot 项目文件；
- [ ] 创建第一版主场景；
- [ ] 创建第一版玩家控制；
- [ ] 创建第一版金币 HUD；
- [ ] 创建第一版投金币交互；
- [ ] 创建第一版工人砍树与边界清理；
- [ ] 创建第一版昼夜循环占位。

---

### 风险

- 后续实现时容易把游戏做成传统 RTS / SLG，需要严格遵守单角色控制、金币单资源、节点式建造和探索优先原则；
- 美术表现容易过度插画化，需要优先保证可互动对象清晰；
- 砍树机制需要避免被误解为木材采集，应通过反馈强调“扩大控制范围”。

---

### 下一步建议

开始第一版 Godot 空项目初始化，并创建可运行主场景。第一版只验证：

```text
玩家移动 → 金币 HUD → 可互动树金币槽 → 投金币 → 工人砍树 → 清理边界 → 建筑节点出现 → 昼夜切换占位
```

---

## 2026-05-12 / v0.0.1

### 本轮目标

初始化 kingdom-like 项目的 AI 协作目录结构。

---

### 已完成

- [x] 创建 README.md；
- [x] 创建 DESIGN_HUB/ 策划维护区；
- [x] 创建 AI_RULES/ AI 规则区；
- [x] 创建 AI_TASKS/ AI 执行记录区；
- [x] 创建 Docs/、Data/、Assets/、Scenes/、Scripts/、Tools/、Tests/、Builds/、Temp/ 占位结构。

---

### 修改文件

- README.md
- DESIGN_HUB/*
- AI_RULES/*
- AI_TASKS/*
- Docs/.gitkeep
- Data/.gitkeep
- Assets/.gitkeep
- Scenes/.gitkeep
- Scripts/.gitkeep
- Tools/.gitkeep
- Tests/.gitkeep
- Builds/.gitkeep
- Temp/.gitkeep

---

### 未完成

- [ ] 创建 Godot 项目文件；
- [ ] 创建第一版主场景；
- [ ] 创建第一版玩家控制；
- [ ] 创建第一版核心玩法 Demo。

---

### 风险

暂无。

---

### 下一步建议

开始第一版 Godot 空项目初始化，并创建可运行主场景。