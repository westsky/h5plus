1、在根目录下执行命令 npm run packagr,命令执行完毕会生成 dist 目录,该目录就是要 publish 到 npm 的模块,
在执行 publish 命令前需要先登陆 npm 仓库,如果没有 npm 账号,可以到https://www.npmjs.com/注册

2、设置仓库地址为 npm 官方仓库地址(国内大部分都使用阿里淘宝镜像，如果没改 publish 会失败)
npm config set registry https://registry.npmjs.org/

3、登陆 npm,用户名密码邮箱需要全部匹配
npm whoami
npm login
Username: xxxxx
Password:
Email: (this IS public) xxx@gmail.com
Logged in as xxxxx on https://registry.npmjs.org/.

4、登陆完可以 publish 了,执行以下命令
cd dist && npm publish && cd ../
或 npm publish dist
输出以下信息说明发布成功

- ngx-core@0.0.1
  这时登录https://www.npmjs.com/可以看到自己发布的项目
  使用 npm i ngx-core 可以安装并使用了

---

```shell
npm publish --access public
```
