# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 项目概述

STRION LASER（思创激光）产品展示静态网站。

- **运营主体**：Jinan Euchio Machinery Co., Ltd.（济南钰峭机械有限公司）
- **品牌关系**：思创激光为 Euchio 合作推广品牌（非独家代理），措辞使用 "Authorized Partner" / "Cooperative Partner Brand"
- **品牌英文名**：STRION LASER（Sichuan Strion Laser Technology Co., Ltd.）
- **目标客户**：海外钣金加工、五金建材、厨卫家电等行业的 B2B 买家
- **语言**：英文为主

## 技术栈

纯静态网站，零构建步骤：

- HTML5 + Tailwind CSS (CDN) + 原生 JavaScript
- Font Awesome 6 (CDN) 图标
- 部署目标：Cloudflare Pages 或任意静态托管

## 项目结构

```
website/
├── index.html            # 首页
├── products.html         # 产品列表 + 型号对比表
├── product-hw.html       # STR-HW 手持焊详情
├── product-ifoa.html     # iFOA 激光清洗机详情
├── about.html            # 技术 & 公司介绍
├── contact.html          # 联系页 + FAQ
├── css/style.css         # 自定义样式
├── js/main.js            # 交互逻辑
├── images/               # 网站图片
└── CLAUDE.md
```

## 本地预览

```bash
cd website
python -m http.server 8080
# 访问 http://localhost:8080
```

或在浏览器直接打开 `index.html`。

## 设计规范

### 色彩

参考思创激光官网 (strlaser.com) 的红色系设计：

| 用途 | 色值 | Tailwind |
|------|------|----------|
| 主色 (红) | #c41230 | 自定义 red-brand |
| 深色背景 | #111111 | 自定义 dark |
| 深色次要 | #1a1a1a | 自定义 dark-secondary |
| 强调色 (金) | #c8963e | amber-600 |
| 正文 | #333333 | gray-800 |
| 浅灰背景 | #f5f5f5 | gray-100 |

### 视觉风格

- 企业工业风，参考思创官网
- 红色为主色调（非蓝色）
- 大量留白，深色 hero/footer
- 产品卡片 + 悬停效果
- 响应式设计

## 产品数据（来自思创官网 strlaser.com）

### STR-HW 系列准确参数

| 参数 | HW200 | HW350 | HW450 | HW550 | HW850 |
|------|-------|-------|-------|-------|-------|
| 激光功率 | 700W | 900W | 1200W | 1500W | 3000W |
| 额定输入功率 | 3200W | 3800W | 4200W | 5400W | 10500W |
| 电源 | 单相220V | 单相220V | 单相220V | 单相220V | 三相380V |
| 重量 | 38kg | 39kg | 43kg | 45kg | 70kg |
| 尺寸 | 675×310×580 | 675×310×580 | 673×310×605 | 673×310×605 | 863×410×724 |
| 工作温度 | -30~60°C | -20~60°C | -20~60°C | -20~60°C | -30~60°C |
| 预设工艺包 | 16 | 24 | 30 | 40 | 50 |
| 冷却方式 | 双回路冷媒直冷 | 同 | 同 | 同 | 同 |
| 焊丝直径 | 0.8/1.0/1.2/1.6/2.0mm | 同 | 同 | 同 | 同 |
| 焊接速度 | 20-200 cm/min | 同 | 同 | 同 | 20-250 cm/min |

### 核心技术
- 976nm 泵浦源（85% 电光转换效率）
- 14μm 小芯径光纤（熔深比同类提升约 40%）
- 双回路冷媒直冷系统（-30~60°C，7×24h 连续工作）
- 一体集成设计
- 全套自研自产

## EUCHIO 联系方式（网站统一使用）

- 公司：Jinan Euchio Machinery Co., Ltd.
- 邮箱：sales@euchio.com
- 手机/WhatsApp：+86 186 1558 4520
- Facebook：https://www.facebook.com/euchiolaser
- LinkedIn：https://www.linkedin.com/in/josephji/
- YouTube：https://www.youtube.com/@euchiolaser
- 地址：济南高新区舜泰广场 / 章丘区枣园街道

## 品牌措辞规范

- 对外说明 EUCHIO 与 STRION LASER 关系："Authorized Partner" / "Cooperative Partner Brand"
- 不得使用 "Exclusive Distributor"、"Official Representative" 等独家代理措辞
- 运营主体统一为 Jinan Euchio Machinery Co., Ltd.
- 思创激光为公司/工厂方，Euchio 为合作推广方

## 内容规则

- 所有对外内容使用英文，专业 B2B 工业品顾问语气
- 不使用 cheap、low cost、best、guaranteed 等词
- 技术参数必须来源于官方资料，禁止编造
- 图片使用描述性英文文件名
- 不引入 npm 依赖或构建步骤
