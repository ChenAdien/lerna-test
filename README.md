### lerna 命令

`lerna init`

初始化仓库

`lerna bootstrap`

在当前 Lerna 仓库中执行引导流程（bootstrap）。安装所有 依赖项并链接任何交叉依赖

`lerna import <pathToRepo>`

将本地路径 `pathToRepo`中的软件包导入（import） packages/`directory-name` 中并提交 commit。

`lerna publish`

为已经更新过的软件包创建一个新版本。提示 输入新版本号并更新 git 和 npm 上的所有软件包。

`lerna changed`

检查自上次发布以来哪些软件包被修改过。

`lerna diff [package?]`

列出所有或某个软件包自上次发布以来的修改情况。

`lerna run [script]`

在每一个包含 [script] 脚本的软件包中运行此 npm 脚本。

`lerna ls`

列出当前 Lerna 仓库中的所有公共软件包

`lerna create`

创建一个新的 lerna 托管包

#### peerDependencies

peerDependencies 的目的是提示宿主环境去安装满足插件 peerDependencies 所指定依赖的包，然后在插件 import 或者 require 所依赖的包的时候，永远都是引用宿主环境统一安装的 npm 包，最终解决插件与所依赖包不一致的问题。

## 🔥 TODO

1.@nano/components 中 type 的支持
