/**
 * Created by lleohao on 2016/3/7.
 */
'use strict'
;
(function ($) {
    var Tags = function (elems) {
        elems = elems || '';
        if (!elems) {
            return;
        }

        var self = this;
        elems.each(function (key, elem) {
            // 如果 input 元素外有 div 包裹则跳过
            if ($(elem).parent('div.form-tags')[0]) {
                return;
            }
            $(elem).wrap($('<div class="form-tags"></div>')).hide(); // 隐藏原来的 input
            var input = $('<input class="input-tags form-control" placeholder="请输入标签"/>').insertAfter($(elem));
            self.bind(input); // 绑定事件
        })
    };

    Tags.prototype = {
        // 设置默认添加的标签
        set: function (elems, values) {
            var self = $(elems),
                Tags = this;

            elems.each(function (key, elem) {
                for (var key in values) {
                    var tag = $('<span class="label label-info">' + values[key] + '<i class="glyphicon glyphicon-remove close"></i></span>');
                    tag.children('i').click(click); // 给新增的标签添加处理事件
                    self.after(tag);
                    Tags.value(tag);  // 设置隐藏的‘真正’表单的 value 值
                }
            });
        },
        // 给 input 元素绑定事件
        bind: function (elem) {
            var Tags = this,
                self = $(elem);

            elem.keydown(function (event) {
                 var keycode = (event.keyCode ? event.keyCode : event.which );

                // 输入框为空并且按退格键则清除输入框前一个标签
                if (keycode == '8' && self.val() == '') {
                    self.prev('span').remove();
                    Tags.value(self);
                }
            });

            elem.keypress(function (event) {
                var self = $(elem), // 保存当前 input 元素
                    keycode = (event.keyCode ? event.keyCode : event.which );

                // enter code 13
                if (keycode != '13') {
                    return;
                }
                var text = self.val();
                if (!text) { // 未输入任何值则不处理
                    return;
                }

                var tag = $('<span class="label label-info">' + text.trim() + '<i class="glyphicon glyphicon-remove close"></i></span>');
                self.before(tag).val(''); // 插入标签元素，并将输入框清空
                tag.children('i').click(click);         // 给标签增加点击事件
                Tags.value(self);         // 将新增的值设置在隐藏的输入框中
            });
        },

        value: function (elem) {
            var hideInput = elem.prevAll('input'),
                tags = elem.parent().children('span.label'),
                values = [];
            tags.each(function (key, tag) {
                values.push($(tag).text());
            });
            return hideInput.val(values);
        }
    };

    var click = function () {
        var _self = $(this).parent().nextAll('input.input-tags');
        $(this).parent().remove();
        new Tags().value(_self);
    };

    $.fn.tags = function () {
        var tags = new Tags(this);
        var values = Array.prototype.slice.call(arguments);
        tags.set(this, values);
        return this;
    };
})(jQuery);

$(function () {
    $('[data-toggle="tags"]').tags('a','b','c');
});