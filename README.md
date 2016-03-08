# bootstrap-tags
基于 bootstrap 的 tags(标签) 插件

##使用方法：
1. 简单调用
`html`代码
```
<input type="text" name="tags" id="tags" data-toggle="tags">
```

`js`代码
```
$('[data-toggle="tags"]').tags(); // 在你需要使用 'tags插件' 的元素上调用 tags()方法
```

2. 带默认值的调用
`html`代码
```
<input type="text" name="tags" data-toggle="tags">
```

`js`代码
```
$('[data-toggle="tags"]').tags('lleohao','bootstrap'); // 向 tags 元素中传入参数
```

3. 获取标签的值
可以直接通过表单的提交向服务器发送标签的值
你也可以通过`js`代码获得
`html`代码
```
<input type="text" name="tags" id="tags" data-toggle="tags">
```

`js`代码
```
$('#tags').tags(); // 初始化插件
$('#tags').val();  // 获取标签的值
```

##后续添加的功能
1. 添加与服务器的交互，实现智能填写