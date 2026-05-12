# NEXT_CODEX_PROMPT：下一轮 Codex 任务

## 任务名称

Web Demo v0.3.1 / Playtest 修正版

---

## 给 Codex 的提示词

你正在继续开发 `kingdom-like` 项目的网页版 Demo。

请先阅读：

1. `README.md`
2. `DESIGN_HUB/01_PROJECT_BRIEF.md`
3. `DESIGN_HUB/02_CORE_GAMEPLAY.md`
4. `DESIGN_HUB/03_PLAYER_EXPERIENCE.md`
5. `DESIGN_HUB/05_ECONOMY_AND_BALANCE.md`
6. `DESIGN_HUB/07_ART_AND_AUDIO_DIRECTION.md`
7. `DESIGN_HUB/08_UX_FLOW.md`
8. `DESIGN_HUB/09_DECISIONS.md`
9. `AI_TASKS/CURRENT_TASK.md`
10. `AI_TASKS/CHANGELOG.md`
11. `AI_TASKS/DEV_LOG.md`
12. `Builds/web-demo/index.html`
13. `Builds/web-demo/styles.css`
14. `Builds/web-demo/game.js`
15. `Data/config/web_demo_balance.json`
16. `Tools/web-demo-server.mjs`
17. `Tests/web-demo-smoke.mjs`

---

## 当前版本状态

上一版已经一次性实现了较完整的 Web Demo，包括：

- 玩家移动；
- 金币 HUD；
- 投金币交互；
- 工人砍树；
- 边界清理；
- 固定节点建造；
- 昼夜循环；
- 夜晚袭击；
- 胜负条件。

当前问题是：功能已经超前，不应继续堆新系统。下一轮应先做试玩修正版，提高稳定性、可读性和新手体验。

---

## 本轮目标

本轮只做 `v0.3.1 / Playtest 修正版`。

目标：

1. 修复部署路径问题；
2. 补充 Web Demo README；
3. 强化画面可读性；
4. 降低首局压力；
5. 增强 smoke test；
6. 保持核心设计不变。

---

## 一、修复配置路径

当前 `Builds/web-demo/game.js` 中：

```js
const CONFIG_URL = "/Data/config/web_demo_balance.json";
```

该绝对路径在本地根目录服务器下可以工作，但部署到 GitHub Pages 子路径时可能失效。

请改成更稳的相对路径或动态路径，例如：

```js
const CONFIG_URL = "../../Data/config/web_demo_balance.json";
```

要求：

- 本地通过 `Tools/web-demo-server.mjs` 运行仍然能加载配置；
- 直接打开 `Builds/web-demo/index.html` 时，即使 fetch 失败，也要继续使用 `DEFAULT_CONFIG`；
- 不要移除 `DEFAULT_CONFIG` fallback。

---

## 二、补充 Web Demo README

新增文件：

```text
Builds/web-demo/README.md
```

内容包括：

1. Demo 名称；
2. 当前版本：`v0.3.1 / Playtest 修正版`；
3. 运行方式：
   - `node Tools/web-demo-server.mjs`
   - 打开 `http://127.0.0.1:4173/Builds/web-demo/`
4. 当前已实现内容：
   - 玩家移动；
   - 金币 HUD；
   - 投金币交互；
   - 工人砍树；
   - 边界清理；
   - 固定节点建造；
   - 昼夜循环；
   - 夜晚压力；
   - 简单胜负；
5. 当前不代表最终内容：
   - Canvas 占位图形；
   - 非最终美术；
   - 非 Godot 主工程；
   - 数值未最终平衡；
6. 试玩重点：
   - 玩家 1 分钟内是否理解“探索森林 → 投金币 → 工人执行 → 边界扩大”；
   - 可互动对象是否清楚；
   - 金币是否被理解为唯一资源；
   - 夜晚压力是否过早或过强。

---

## 三、增强画面可读性

不改变核心玩法，只优化视觉表达。

重点强化：

### 1. 玩家角色

- 角色比例略微放大；
- 轮廓更清楚；
- 不要被森林和地面吞没。

### 2. 可砍边界树

- 与普通背景森林明显区分；
- 增加轻微金色描边、斧头图标或金币槽提示；
- 玩家靠近时提示更明显；
- 不要大面积教程文本。

### 3. 固定建筑节点

- 墙点、塔点、地标点要与地面分离；
- 使用石基、木桩、旗帜、底部光圈等方式表现“这里能建”；
- 不要让玩家误以为可以自由摆放建筑。

### 4. 王国控制范围

- 已清理区域和未清理森林的明暗差更明显；
- 砍树完成后，清理区域变化要更明显；
- 可以增加短暂闪光、扩散圈或地面变亮反馈。

### 5. 森林

- 普通背景森林保持密集和阴影感；
- 森林可以探索，但更危险；
- 不要让所有树都看起来都能砍。

---

## 四、降低首局压力

当前版本已有夜晚和怪物，但首局要更适合验证核心循环。

请调整 `Data/config/web_demo_balance.json`：

建议：

- `daySeconds` 从 `50` 提高到 `70` 或 `80`；
- `duskSeconds` 保持 `12` 或提高到 `15`；
- `nightSeconds` 可以保持 `24`；
- `enemySpawnSeconds` 从 `4.2` 提高到 `5.5` 或 `6`；
- `enemySpeed` 略微降低，例如 `0.8`；
- `campHp` 从 `12` 提高到 `14`；
- `startingGold` 从 `7` 提高到 `8`。

目标：

- 玩家第一天有足够时间理解探索、投金币、砍树；
- 夜晚仍然存在压力，但不要太快打崩；
- 夜晚是“扩张后果反馈”，不是新手劝退。

---

## 五、增强新手目标提示

当前目标提示可以保留，但要更聚焦。

请让前期 `objective` 更明确表达：

```text
探索森林，找到可砍边界树。投金币让工人清理边界，把发现纳入营地范围。
```

当玩家第一次成功砍树后，目标改为：

```text
边界扩大了。寻找宝箱、流民或建筑节点，继续用金币做取舍。
```

当玩家发现地标后，目标改为：

```text
旧地标已发现。需要把王国边界清理到地标附近，才能修复它。
```

要求：

- 目标提示要短；
- 不要变成复杂任务列表；
- 不要显示多资源、多按钮、多菜单。

---

## 六、增强 smoke test

修改：

```text
Tests/web-demo-smoke.mjs
```

至少增加以下检查：

1. 检查 `Builds/web-demo/README.md` 存在；
2. 检查 `game.js` 中不再包含：
   ```js
   const CONFIG_URL = "/Data/config/web_demo_balance.json";
   ```
3. 检查 `game.js` 仍包含 `DEFAULT_CONFIG`；
4. 检查配置文件中 `economy` 存在：
   - `startingGold`
   - `treeCost`
   - `wallCost`
   - `towerCost`
   - `landmarkCost`
5. 检查配置文件中不包含：
   - `wood`
   - `stone`
   - `food`
   - `iron`
6. 检查 HTML 仍引用 `game.js` 和 `styles.css`；
7. 检查 `Tools/web-demo-server.mjs` 存在。

---

## 七、更新任务记录

请更新：

1. `AI_TASKS/CHANGELOG.md`
2. `AI_TASKS/DEV_LOG.md`
3. `AI_TASKS/CURRENT_TASK.md`

记录本轮为：

```text
v0.3.1 / Playtest 修正版
```

记录内容包括：

- 修复配置路径；
- 补充 Web Demo README；
- 提升可互动对象可读性；
- 降低首局压力；
- 增强 smoke test；
- 没有新增大型系统。

---

## 本轮禁止事项

- 不要新增多资源；
- 不要新增自由建造；
- 不要新增复杂科技树；
- 不要新增大规模战争；
- 不要新增 RTS 框选；
- 不要引入 React、Phaser、Three.js 或 npm 依赖；
- 不要修改 `DESIGN_HUB/09_DECISIONS.md`；
- 不要修改 `AI_RULES/`；
- 不要把 Web Demo 宣称为最终游戏；
- 不要移除 Godot 作为 Demo 阶段主引擎的长期决策。

---

## 验收标准

1. `node --check Builds/web-demo/game.js` 通过；
2. `node --check Tools/web-demo-server.mjs` 通过；
3. `node Tests/web-demo-smoke.mjs` 通过；
4. `node Tools/web-demo-server.mjs` 可以启动；
5. 打开 `http://127.0.0.1:4173/Builds/web-demo/` 可以试玩；
6. 玩家能更清楚地区分：
   - 主角；
   - 可砍树；
   - 普通森林；
   - 建筑节点；
   - 已清理区域；
7. 首局不会因为夜晚过快或怪物过强而快速失败；
8. 画面仍然只显示金币一种资源；
9. 没有新增复杂菜单。
