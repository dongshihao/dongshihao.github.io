---
layout: post
title:  "Github pull requests 流程"
crawlertitle: "herman - Github pull requests 流程"
categories: posts
tags: 'github'
author: shdong
---

现代软件复杂程度越来越高，版本管理工具必不可少，目前最流行的版本管理工具是：`git`。同时，开源也是软件行业的大趋势，几乎每个软件从业人员都知道的一个git在线服务：`github`，github采用git作为版本管理工具。


## Github pull requests 流程

### 背景
通常情况下，我们不会直接在主仓库的`master`开发提交，会用`fork`的方式开发。
以`react`仓库为例：
主仓库地址：`https://github.com/facebook/react.git`
fork仓库地址：`https://github.com/[your username]/react.git`

#### 添加主仓库远程源：

``` bash
git remote add react https://github.com/facebook/react.git
```
- 本地添加 `remote` 源名称为`react`
- 可以使用 `git remote -v` 查看本地添加的源
- 可以使用 `ssh`和`https` 形式

### 2. fetch 远程源 

``` bash
git fetch react
```

### 3. 基于正式仓库源 master 分之迁出分支

``` bash
# 迁出一个修复 bug 分支
git checkout -b fix/xxx react/master

# 迁出一个新功能分支
git checkout -b feat/xxx react/master
```

### 4. 开发、测试
啊哈~ 你可以开开心心的开发了~

### 5. 推送到 fork 仓库

``` bash
git push origin feat/xxx
```

### 6. 去 github 上你的 fork 仓库下去发 PR
github 界面分支下提PR，全界面操作，不在赘述。

### 7. 当 PR 未被合入前需要同步远程主仓库 master

``` bash
# 同步主仓库的远程 master，若有冲突需要解决冲突
git pull react master
```

### 8. PR 被合并后删除远程和本地分支

``` bash
# 删除远程 fork 仓库分支，也可以在 github 界面 fork 仓库的 PR 页面删除
git push origin :fix/xxx

# 删除本地分支
git branch -D fix/xxx
```

## 参考资料
- [about-pull-requests—github](https://help.github.com/articles/about-pull-requests/)



