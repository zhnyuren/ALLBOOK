<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 2018/6/8
 * Time: 13:54
 */
    $con=mysqli_connect("localhost","root","wx687d0e366c088753","wechatServer2",3306);
    mysqli_set_charset($con,"utf8");
    $result=mysqli_query($con,"select distinct Category from Book");
    $jobj=new stdClass();
    $jobj->total=mysqli_num_rows($result);
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