# Linux Docker 版本

## 版本特性

LLBot Docker 版本使用 Docker Compose 进行部署，提供最便捷的容器化解决方案。

### 主要特点

- 🐳 **容器化部署** - 使用 Docker Compose 一键部署
- 🚀 **快速启动** - 自动配置所有依赖环境
- 🔒 **环境隔离** - 不影响宿主机环境
- 🔄 **易于管理** - 使用 Docker 命令管理容器
- 📦 **完整环境** - 包含所有运行时依赖
- 🛠️ **自动化配置** - 引导式配置流程

### 适用场景

- 希望快速部署的用户
- 需要环境隔离的场景
- 多实例部署需求
- 熟悉 Docker 的开发者
- 生产环境部署

## 系统要求

- **Docker**: 20.10 或更高版本
- **Docker Compose**: 2.0 或更高版本
- **操作系统**: 任何支持 Docker 的 Linux 发行版
- **架构**: x64 或 ARM64

## 安装 Docker

如果还没有安装 Docker，请先安装：

### Debian/Ubuntu

```bash
# 安装 Docker
curl -fsSL https://get.docker.com | sh

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker

# 将当前用户添加到 docker 组（可选）
sudo usermod -aG docker $USER
```

### 其他发行版

请参考 [Docker 官方文档](https://docs.docker.com/engine/install/)

## 一键安装 LLBot

### 方式一：直连 GitHub（推荐）

```bash
curl -fsSL https://raw.githubusercontent.com/LLOneBot/LuckyLilliaBot/refs/heads/main/script/install-llbot-docker.sh -o llbot-docker.sh && chmod u+x ./llbot-docker.sh && ./llbot-docker.sh
```

### 方式二：使用镜像加速

如果连接 GitHub 不顺畅，可以使用镜像：

```bash
curl -fsSL https://gh-proxy.com/https://raw.githubusercontent.com/LLOneBot/LuckyLilliaBot/refs/heads/main/script/install-llbot-docker.sh -o llbot-docker.sh && chmod u+x ./llbot-docker.sh && ./llbot-docker.sh
```

## 安装流程

运行安装脚本后，会自动：

1. 检查 Docker 和 Docker Compose 是否已安装
2. 下载必要的配置文件
3. 引导你进行配置（端口、数据目录等）
4. 生成 `docker-compose.yml` 文件
5. 拉取 Docker 镜像
6. 启动容器

## 管理容器

### 启动容器

```bash
docker-compose up -d
```

### 停止容器

```bash
docker-compose down
```

### 重启容器

```bash
docker-compose restart
```

### 查看日志

```bash
# 查看实时日志
docker-compose logs -f

# 查看最近 100 行日志
docker-compose logs --tail=100
```

### 查看容器状态

```bash
docker-compose ps
```

### 进入容器

```bash
docker-compose exec llbot bash
```

## 配置说明

### docker-compose.yml 示例

```yaml
version: '3.8'

services:
  llbot:
    image: llonebot/llbot:latest
    container_name: llbot
    restart: unless-stopped
    ports:
      - "3000:3000"  # OneBot HTTP 端口
      - "3001:3001"  # OneBot WebSocket 端口
    volumes:
      - ./data:/app/data
      - ./config:/app/config
      - ./logs:/app/logs
    environment:
      - TZ=Asia/Shanghai
      - LOG_LEVEL=info
```

### 环境变量

可以在 `docker-compose.yml` 中配置以下环境变量：

- `TZ`: 时区设置（默认：Asia/Shanghai）
- `LOG_LEVEL`: 日志级别（debug/info/warn/error）
- `ONEBOT_HTTP_PORT`: OneBot HTTP 端口
- `ONEBOT_WS_PORT`: OneBot WebSocket 端口

### 数据持久化

容器会将以下目录挂载到宿主机：

- `./data`: QQ 数据目录
- `./config`: 配置文件目录
- `./logs`: 日志文件目录

## 更新版本

### 1. 拉取最新镜像

```bash
docker-compose pull
```

### 2. 重启容器

```bash
docker-compose down
docker-compose up -d
```

## 使用提示

- 首次启动需要扫码登录 QQ
- 配置文件修改后需要重启容器生效
- 建议定期备份 `data` 目录
- 可以通过修改 `docker-compose.yml` 来调整配置

## 下一步

安装完成后，请查看 [配置指南](./config.md) 了解如何配置 LLBot 对接你的机器人框架。

## 常见问题

### 容器启动失败？

检查端口是否被占用，可以修改 `docker-compose.yml` 中的端口映射。

### 如何查看 QQ 登录二维码？

查看容器日志：`docker-compose logs -f`

### 数据会丢失吗？

不会，数据都持久化保存在宿主机的 `data` 目录中。

### 如何配置多个实例？

复制一份配置到新目录，修改端口号，然后启动即可。

### 容器占用资源太多？

可以在 `docker-compose.yml` 中添加资源限制：

```yaml
services:
  llbot:
    # ... 其他配置
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 1G
```
