# [htmlprview](http://htmlpreview.github.io/)

# 协议
git使用https协议，每次pull, push都会提示要输入密码，使用git协议，然后使用ssh密钥，这样免去每次都输密码的麻烦。

## 使用https协议

[https协议](https://www.cnblogs.com/superGG1990/p/6844952.html)

### 
```vim
$ git config --global user.name "yourname"

$ git config --global user.email "your_email@youremail.com"
```

## 使用SSH协议
初次使用git的用户要使用git协议大概需要三个步骤：

### [生成密钥对SSH](https://www.cnblogs.com/yehui-mmd/p/5962254.html)

```vim
$ cd ~/.ssh

$ ls
```

看一下有没有id_rsa和id_rsa.pub(或者是id_dsa和id_dsa.pub之类成对的文件)，有.pub 后缀的文件就是公钥，另一个文件则是密钥。

假如没有这些文件，甚至连 .ssh 目录都没有，可以用 ssh-keygen 来创建。

```vim
$ ssh-keygen -t rsa -C "your_email@youremail.com"

Creates a new ssh key using the provided email # Generating public/private rsa key pair.

Enter file in which to save the key (/home/you/.ssh/id_rsa):
```

输入密码，不输都可以。

```vim
Enter same passphrase again: [Type passphrase again]
```

### 添加公钥到你的远程仓库（github）

**查看你生成的公钥：**

```vim
$ cat ~/.ssh/id_rsa.pub
```

**添加公钥到Github上**

> * Settings -> 左栏点击 SSH and GPG keys -> 点击 New SSH key。
> * 你复制上面的公钥内容，粘贴进“Key”文本域内。 title域，随便起个名字。点击 Add key。

### 修改git的remote url

**查看remote**
```vim
$ git remote -v
```

**修改remote url**
```vim
$ git remote set-url origin git@github.com:someaccount/someproject.git
```

### [用SSH登录github](https://jingyan.baidu.com/article/f7ff0bfc3e6c122e26bb1313.html)



