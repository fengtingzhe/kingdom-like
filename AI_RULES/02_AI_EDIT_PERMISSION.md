# 02_AI_EDIT_PERMISSION：AI 修改权限

本文件定义 AI 可以修改、谨慎修改、不得擅自修改的文件和目录。

---

## AI 可以修改

前提是任务明确允许：

```text
Scripts/
Data/
AI_TASKS/CHANGELOG.md
AI_TASKS/DEV_LOG.md
AI_TASKS/REVIEW_LOG.md
AI_TASKS/CURRENT_TASK.md
Tests/
Tools/
Temp/
```

---

## AI 可以谨慎修改

修改前必须说明原因：

```text
Scenes/
Assets/
Docs/
AI_RULES/03_TECHNICAL_RULES.md
AI_RULES/04_DATA_RULES.md
AI_RULES/05_ASSET_RULES.md
AI_RULES/06_VALIDATION_CHECKLIST.md
```

---

## AI 不得擅自修改

如需修改，必须先获得人类制作人确认：

```text
README.md
DESIGN_HUB/
AI_RULES/00_MASTER_PROMPT.md
AI_RULES/01_AI_READ_ORDER.md
AI_RULES/02_AI_EDIT_PERMISSION.md
AI_RULES/07_AI_ROLE_SPLIT.md
project.godot
核心主场景
核心 Autoload 配置
```

---

## Godot 特别提醒

AI 修改 `.tscn` 文件前必须说明：

```text
为什么要修改；
修改哪些节点；
是否会影响已有引用；
如何验证场景仍然可以打开。
```