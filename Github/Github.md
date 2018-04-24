# [htmlprview](http://htmlpreview.github.io/)

# 协议
git使用https协议，每次pull, push都会提示要输入密码，使用git协议，然后使用ssh密钥，这样免去每次都输密码的麻烦。

## 使用https协议

[https协议](https://www.cnblogs.com/superGG1990/p/6844952.html)

### Git全局设置：

**全局设置用户名和邮件**

```vim
git config --global user.name "yourname"

git config --global user.email "your_email@youremail.com"
```

**记录密码**

```vim
git config --global credential.helper store
```

## 使用SSH协议
初次使用git的用户要使用git协议大概需要三个步骤：

### [生成密钥对SSH](https://www.cnblogs.com/yehui-mmd/p/5962254.html)

```vim
cd ~/.ssh

ls
```

看一下有没有id_rsa和id_rsa.pub(或者是id_dsa和id_dsa.pub之类成对的文件)，有.pub 后缀的文件就是公钥，另一个文件则是密钥。

假如没有这些文件，甚至连 .ssh 目录都没有，可以用 ssh-keygen 来创建。

```vim
ssh-keygen -t rsa -C "your_email@youremail.com"
```

输入密码，不输都可以。

```vim
Enter same passphrase again: [Type passphrase again]
```

### 测试SSH key是否成功

```vim
ssh -T git@github.com
```

成功提示：

```vim
Hi xxxx! You've successfully authenticated, but GitHub does not provide shell 
```

### 添加公钥到你的远程仓库（github）

**查看你生成的公钥：**

```vim
cat ~/.ssh/id_rsa.pub
```

**添加公钥到Github上**

> * Settings -> 左栏点击 SSH and GPG keys -> 点击 New SSH key。
> * 你复制上面的公钥内容，粘贴进“Key”文本域内。 title域，随便起个名字。点击 Add key。

**复制命令**

```vim
clip < ~/.ssh/id_rsa.pub
```

### 修改git的remote url

**查看remote**
```vim
git remote -v
```

**修改remote url**
```vim
git remote set-url origin git@github.com:someaccount/someproject.git
```

这里修改的是项目中 .git （隐藏）文件夹下的config文件。

### [用SSH登录github](https://jingyan.baidu.com/article/f7ff0bfc3e6c122e26bb1313.html)

**常用命令**

```vim
eval $(ssh-agent -s)    // 启动ssh-agent

ssh-add ~/.ssh/id_rsa   // 添加秘钥到ssh-agent中

ssh-agent -k            // 退出ssh-agent命令

ssh-add -l              // 查看代理中的私钥

ssh-add -L              // 查看代理中的公钥

ssh-add -d /path/of/key/key_name        // 移除指定的私钥

ssh-add -D              // 移除代理所有的私钥

ssh-add -x              // 锁定ssh代理。锁定后不能帮助管理私钥。

ssh-add -X              // 解锁ssh代理

```