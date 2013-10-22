(function ($) {

Drupal.behaviors.commentFace = {
  attach: function (context) {
    $("#edit-comment-body-und-0-value").focus(function(){
        var pre = $("#edit-comment-body-und-0-value").selection().pre;
        var end = $("#edit-comment-body-und-0-value").selection().end;
        $("#pre_text").html(pre);
        $("#end_text").html(end);
    });
    $("#edit-comment-body-und-0-value").keyup(function(){
        var pre = $("#edit-comment-body-und-0-value").selection().pre;
        var end = $("#edit-comment-body-und-0-value").selection().end;
        $("#pre_text").html(pre);
        $("#end_text").html(end);
    })
    var face = '<div class="clearfix">'+$('#comment-face').html()+'</div>';
    $('#edit-comment-body-und-0-value').before(face);
    $('img').click( function() { 
        var face = $(this).attr("alt");
        var pre = $("#pre_text").html();
        var end = $("#end_text").html();
        $('#edit-comment-body-und-0-value').val(pre+face+end);
        var pre = $("#edit-comment-body-und-0-value").selection().pre;
        var end = $("#edit-comment-body-und-0-value").selection().end;
        $("#pre_text").html(pre);
        $("#end_text").html(end);
    });
  }
}

})(jQuery);
