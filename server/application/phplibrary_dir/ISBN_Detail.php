<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 2018/6/2
 * Time: 13:55
 */
    $ISBN=$_POST['ISBN'];
    $con=mysqli_connect("localhost","root","wx687d0e366c088753","wechatServer2",3306);
    mysqli_set_charset($con,"utf8");
    $result=mysqli_query($con,"select * from Book where ISBN='$ISBN'");
    //数据库必定有这本书，没有的话需要对result进行分支判断
    $row=mysqli_fetch_assoc($result);
    $jobj=new stdClass();
    foreach ($row as $key=>$value)
    {
        $jobj->$key=$value;
    }
    echo json_encode($jobj,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    mysqli_close($con);
    ?>