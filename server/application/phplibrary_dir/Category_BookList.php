<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 2018/6/8
 * Time: 14:29
 */
    $Category=$_POST['category'];//改成request
    $Begin=20*$_POST['start'];//强制转换类型成int?
    $con=mysqli_connect("localhost","root","wx687d0e366c088753","wechatServer2",3306);
    mysqli_set_charset($con,"utf8");
    $result=mysqli_query($con,"select Name,Author,Publish_Year,ISBN,Picture,Category from Book where Category='$Category' limit $Begin,20");
    $jobj=new stdClass();
    $num=mysqli_query($con,"select count(*) as num from Book where Category='$Category'");
    $num2=mysqli_fetch_assoc($num);
    $jobj->total=$num2['num'];
    $jobj->books=array();
    while($row=mysqli_fetch_assoc($result))
    {
        $jarr=new stdClass();
        foreach ($row as $key=>$value)
        {
            $jarr->$key=$value;
        }
        array_push($jobj->books,$jarr);
    }
    echo json_encode($jobj,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    mysqli_close($con);
    ?>
