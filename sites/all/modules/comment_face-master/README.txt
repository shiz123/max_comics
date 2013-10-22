
DESCRIPTION
-----------
This module allow user add face into comment, and show comment face. 

USAGE
-----

1.Replace comment content in comment.tpl.php
//print render($content);
print comment_face_replace($comment->comment_body['und'][0]['safe_value']);
2.Replace comment subject in comment.tpl.php
//print comment_face_replace($title); 
print comment_face_replace($title); 
3.Replace content of comment blocks in template.php
add following code in youthemename_preprocess_block(&$variables)
if ($variables['block']->module == 'comment') {
   $variables['content'] = comment_face_replace($variables['content']);
}
4.If don't want to show comment face, you should do like this.

comment_face_replace($string,'')

http://git.drupal.org/sandbox/hejinlong/1383896.git

Module Demo: drupaluser.org
Author: Hejinlong , Drupal Beijing meetup organizer 
        & Drupaluser.org founder , jinlonghe@yahoo.cn
