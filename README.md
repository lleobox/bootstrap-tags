# bootstrap-tags
基于 bootstrap 的 tags(标签) 插件

![demo](https://github.com/lleobox/bootstrap-tags/raw/master/tags-demo.gif)

###使用方法：
1. 引入相关文件`tags.min.js`和`style.min.css`

2. 简单调用
    ```html
    <input type="text" name="tags" id="tags" data-toggle="tags">
    ```

    ```javascript
    $('[data-toggle="tags"]').tags(); // 在你需要使用 'tags插件' 的元素上调用 tags()方法
    ```

3. 带默认值的调用
    ![demo](https://github.com/lleobox/bootstrap-tags/raw/master/tags-demo2.jpg)
    ```html
    <input type="text" name="tags" data-toggle="tags">
    ```

    ```javascript
    $('[data-toggle="tags"]').tags('lleohao','bootstrap'); // 向 tags 元素中传入参数
    ```

4. 如果`input`元素中存在`value`值，则可一直接导入其中
    ![demo](https://github.com/lleobox/bootstrap-tags/raw/master/tags-demo2.jpg)
    ```html
    <input type="text" name="tags" data-toggle="tags" value="lleohao,bootstrap">
    ```

    ```javascript
    $('[data-toggle="tags"]').tags(); // 自动导入value中的值
    ```

5. 获取标签的值
可以直接通过表单的提交向服务器发送标签的值
也可以通过`js`代码获得
    ```html
    <input type="text" name="tags" id="tags" data-toggle="tags">
    ```

    ```javascript
    $('#tags').tags(); // 初始化插件
    $('#tags').val();  // 获取标签的值
    ```

###可能存在的问题
1. 因为`style.min.css`中设置了`input`元素的宽度为`auto`，可能导致样式的改变，可以修改


###后续添加的功能
1. 添加与服务器的交互，实现智能填写
