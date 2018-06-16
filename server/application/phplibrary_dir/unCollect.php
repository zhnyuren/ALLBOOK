<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 2018/6/2
 * Time: 17:26
 */
    $user_id=$_POST['user_id'];
    $ISBN=$_POST['ISBN'];
    $con=mysqli_connect("localhost","root","wx687d0e366c088753","wechatServer2",3306);
    mysqli_set_charset($con,"utf8");
    mysqli_query($con,"delete from Collection where UserID='$user_id' and BookID='$ISBN'");
    mysqli_close($con);
    ?>