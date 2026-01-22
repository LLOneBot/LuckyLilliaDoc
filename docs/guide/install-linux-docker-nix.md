# Linux Docker 镜像版本

## 版本特性

LLBot Docker 镜像版本是单独的 Docker 镜像，不依赖 Docker Compose，提供更灵活的部署方式。

### 主要特点

- 🎯 **单镜像部署** - 不需要 Docker Compose
- 🔧 **灵活配置** - 通过环境变量和命令行参数配置
- 🌐 **Web UI** - 内置 Web 界面进行扫码登录
- 🚀 **快速启动** - 一条命令即可运行
- 🔄 **自动登录** - 支持配置自动登录
- 💻 **NixOS 支持** - 特别优化支持 NixOS 系统

### 适用场景

- 不想使用 Docker Compose 的用户
- NixOS 系统用户
- 需要更灵活配置的场景
- Kubernetes 等容器编排平台
- 极简部署需求

## 系统要求

- **Docker**: 20.10 或更高版本
- **操作系统**: 任何支持 Docker 的 Linux 发行版（包括 NixOS）
- **架构**: x64 或 ARM64

## 快速开始

### 拉取镜像

```bash
docker pull initialencounter/llonebot:latest
```

### 基础运行

```bash
docker run -d \
  --name llbot \
  -p 3080:3080 \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/data:/app/data \
  initialencounter/llonebot:latest
```

## 登录方式

### 方式一：Web UI 扫码（推荐）

1. 启动容器后，访问 `http://<宿主机IP>:3080`
2. 在 Web 界面中扫描二维码登录
3. 登录成功后会自动保存登录状态

### 方式二：终端扫码

查看容器日志，会显示二维码：

```bash
docker logs -f llbot
```

使用手机 QQ 扫描终端显示的二维码即可登录。

## 高级配置

### 环境变量

```bash
docker run -d \
  --name llbot \
  -p 3080:3080 \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/data:/app/data \
  -e QUICK_LOGIN_QQ=123456789 \
  -e LOG_LEVEL=info \
  -e TZ=Asia/Shanghai \
  initialencounter/llonebot:latest
```

#### 可用环境变量

- `QUICK_LOGIN_QQ`: QQ 号，设置后会自动登录（需要先扫码登录一次）
- `LOG_LEVEL`: 日志级别（debug/info/warn/error）
- `TZ`: 时区设置
- `ONEBOT_HTTP_PORT`: OneBot HTTP 端口（默认 3000）
- `ONEBOT_WS_PORT`: OneBot WebSocket 端口（默认 3001）
- `WEB_UI_PORT`: Web UI 端口（默认 3080）

### 端口说明

- `3080`: Web UI 端口（用于扫码登录）
- `3000`: OneBot HTTP API 端口
- `3001`: OneBot WebSocket 端口

可以根据需要修改端口映射：

```bash
docker run -d \
  --name llbot \
  -p 8080:3080 \
  -p 5000:3000 \
  -p 5001:3001 \
  -v $(pwd)/data:/app/data \
  initialencounter/llonebot:latest
```

### 数据持久化

建议挂载以下目录：

```bash
docker run -d \
  --name llbot \
  -p 3080:3080 \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/config:/app/config \
  -v $(pwd)/logs:/app/logs \
  initialencounter/llonebot:latest
```

## NixOS 特别说明

此镜像针对 NixOS 进行了特别优化，可以完美运行在 NixOS 系统上。

### NixOS 配置示例

在 NixOS 配置文件中添加：

```nix
{
  virtualisation.docker.enable = true;
  
  systemd.services.llbot = {
    description = "LLBot Service";
    after = [ "docker.service" ];
    requires = [ "docker.service" ];
    wantedBy = [ "multi-user.target" ];
    
    serviceConfig = {
      ExecStart = ''
        ${pkgs.docker}/bin/docker run --rm \
          --name llbot \
          -p 3080:3080 \
          -p 3000:3000 \
          -p 3001:3001 \
          -v /var/lib/llbot/data:/app/data \
          initialencounter/llonebot:latest
      '';
      ExecStop = "${pkgs.docker}/bin/docker stop llbot";
      Restart = "always";
    };
  };
}
```

更多详情请参考：[llonebot.nix](https://github.com/llonebot/llonebot.nix)

## 容器管理

### 查看日志

```bash
docker logs -f llbot
```

### 重启容器

```bash
docker restart llbot
```

### 停止容器

```bash
docker stop llbot
```

### 删除容器

```bash
docker rm -f llbot
```

### 更新镜像

```bash
# 拉取最新镜像
docker pull initialencounter/llonebot:latest

# 停止并删除旧容器
docker rm -f llbot

# 启动新容器
docker run -d \
  --name llbot \
  -p 3080:3080 \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/data:/app/data \
  initialencounter/llonebot:latest
```

## 自动登录配置

首次使用需要扫码登录一次，之后可以配置自动登录：

```bash
docker run -d \
  --name llbot \
  -p 3080:3080 \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/data:/app/data \
  -e QUICK_LOGIN_QQ=你的QQ号 \
  initialencounter/llonebot:latest
```

## 使用提示

- 首次启动建议使用 Web UI 扫码，更加直观
- 数据目录一定要挂载，否则重启后需要重新登录
- 可以使用 `docker-compose` 来管理，但不是必需的
- 支持多实例运行，只需修改容器名和端口即可

## 下一步

安装完成后，请查看 [配置指南](./config.md) 了解如何配置 LLBot 对接你的机器人框架。

## 常见问题

### Web UI 无法访问？

检查防火墙是否开放了 3080 端口，或者检查端口映射是否正确。

### 自动登录不生效？

确保已经扫码登录过一次，并且 `QUICK_LOGIN_QQ` 环境变量设置正确。

### 如何在 Kubernetes 中部署？

可以参考以下 Deployment 配置：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: llbot
spec:
  replicas: 1
  selector:
    matchLabels:
      app: llbot
  template:
    metadata:
      labels:
        app: llbot
    spec:
      containers:
      - name: llbot
        image: initialencounter/llonebot:latest
        ports:
        - containerPort: 3080
        - containerPort: 3000
        - containerPort: 3001
        env:
        - name: QUICK_LOGIN_QQ
          value: "123456789"
        volumeMounts:
        - name: data
          mountPath: /app/data
      volumes:
      - name: data
        persistentVolumeClaim:
          claimName: llbot-data
```

### 镜像大小是多少？

镜像大小约为 500MB-1GB，包含了所有运行时依赖。

### 支持 ARM 架构吗？

支持，镜像同时支持 x64 和 ARM64 架构。
