# 敲敲云 Skills · AI 一句话搭建

除了拖拽搭建，敲敲云还官方开源了 **Claude Code Skills** —— 在终端里用**一句话**让 AI 直接搭建 **应用 · 工作表 · 简流 · 仪表盘**，告别拖拉拽。

> 🏠 官网专题页（安装演示 · 提示词库）：<https://www.qiaoqiaoyun.com/skills>
> 🎬 演示视频：<https://www.qiaoqiaoyun.com/skillVideos>
> 📦 Skills 仓库：[gitee.com/jeecg/qqyun-skills](https://gitee.com/jeecg/qqyun-skills)（国内推荐）· [GitHub](https://github.com/jeecgboot/qqyun-skills)

## 安装 Skills（两步）

**第 1 步 · 一行命令装齐 Claude Code 环境（推荐 · 无需翻墙）**

```powershell
# Windows（PowerShell）
irm https://www.qiaoqiaoyun.com/claude/boot.ps1 | iex
```

```bash
# macOS / Linux
curl -fsSL https://www.qiaoqiaoyun.com/claude/install-claude-code.sh | bash
```

> ⚠️ 脚本写入 DeepSeek 作为模型后端（按 token 计费，[需自备 API Key](https://platform.deepseek.com/api_keys)）

**第 2 步 · 安装敲敲云 Skills**

```bash
# macOS / Linux
git clone https://gitee.com/jeecg/qqyun-skills.git
cp -r qqyun-skills/jeecg-lowcode-* ~/.claude/skills/
```

```powershell
# Windows（PowerShell）
git clone https://gitee.com/jeecg/qqyun-skills.git
Copy-Item qqyun-skills\jeecg-lowcode-* $env:USERPROFILE\.claude\skills\ -Recurse -Force
```

> 已有 Claude Code 可跳过第 1 步；需确保 **Python 3.12+** 可用（Skills 通过 Python 脚本调用敲敲云 API）。

## 一句话开始

```bash
claude
```

```text
> 在敲敲云租户【北京敲敲云科技有限公司】的应用【OA办公】下建工作表「请假申请」：
  姓名（选择用户，必填，标题）、请假类型（下拉单选：事假/病假/年假/调休）、
  开始日期、结束日期、请假天数（整数，必填）、请假原因（多行文本）、附件（附件上传）。
```

同一句话同时要「应用 + 工作表 + 简流 + 仪表盘」时，三个 Skill 自动协同，一次交付完整应用：

```text
> 在「行政管理」应用里做一个请假管理：请假表单（申请人、请假类型、起止日期、天数、事由、附件），
  提交后走直属上级审批，审批通过状态改为"已通过"，
  再来一个请假统计看板：按类型分布饼图 + 按月趋势折线图。
```

## 提示词写法要点

- 两种触发写法**等价、二选一**：`使用 /jeecg-lowcode-lowapp ……` 或 `在敲敲云租户【xx】的应用【xx】下，……`
- 必须写 **租户 + 应用** 两级上下文；应用不存在时直接说「创建一个应用【xxx】」
- 字段用「**中文名 + 控件类型 + 关键属性**」描述（如：请假天数（整数，必填）），不要写 JSON
- 更多实战提示词（含 30 张工作表 + 12 条简流的人事OA整套系统）见[官网专题页](https://www.qiaoqiaoyun.com/skills)

## 连接私有化部署环境

Skills 通过敲敲云 API 工作，**本仓库自建的环境同样可用** —— 在 Claude Code 会话中按 AI 提示提供：

| 信息 | 获取方式 |
|------|----------|
| API 地址 | 本仓库部署的服务地址，如 `http://<服务器IP>` |
| X-Access-Token | 登录敲敲云 → F12 → Network → 任意请求的 Request Headers |
| 租户 / 应用 | 组织名称 / 应用名称（必填的两级上下文） |
