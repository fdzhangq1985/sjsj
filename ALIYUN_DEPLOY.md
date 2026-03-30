# 阿里云部署说明

本项目为 React + Vite 静态前端网站，可部署在 Alibaba Cloud OSS 静态网站托管或其他静态主机上。

## 1. 生成静态文件

```bash
npm install
npm run build
```

生成结果会输出到 `dist/` 目录。

## 2. 使用 OSSCLI 上传（示例）

1. 安装 `ossutil`，并完成配置：

```bash
ossutil64 config
```

2. 上传静态资源：

```bash
ossutil64 cp -r dist/ oss://your-bucket-name/ --recursive
```

3. 配置 OSS 静态网站托管：

- 首页文档：`index.html`
- 404 文档：`index.html`

## 3. 访问网站

配置完成后，使用 OSS 域名或自定义域名访问即可。

## 4. 注意事项

- `HashRouter` 已启用，支持直接访问子页面与刷新场景。
- `dist/` 目录已加入 `.gitignore`，不建议直接提交构建产物。
- 若使用 ECS 或容器部署，可将 `dist/` 内容作为静态文件目录发布。