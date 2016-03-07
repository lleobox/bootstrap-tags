/**
 * Created by lleohao on 2016/3/7.
 */
;(function (w) {
    var $tags_area = $('.tags-area'),
        $tags = $('#tags');

    function addTags(name) {
        var elementStr = '<span class="tag-item">' + name + '&nbsp;&nbsp;<i class="glyphicon glyphicon-remove close"></i></span>';
        $tags_area.append($(elementStr));
        bindCloseEvent();
    }

    function bindCloseEvent() {
        $('.close', content = $tags).on('click', function () {
            $(this).parent().remove();
        })
    }

    var init = function (srcElement) {
        var srcElement = srcElement ? $(srcElement) : $('input[name="tags"]');

    };

    $('#append-tag').on('click', function () {
        addTags("ok");
    });

    w.initTags = init;
})(window);