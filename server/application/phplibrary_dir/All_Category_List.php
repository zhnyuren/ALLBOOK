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
    $Cate_Array=array();
    while($row=mysqli_fetch_assoc($result))
    {
        array_push($Cate_Array,$row['Category']);
    }
    $jobj=new stdClass();
    for($i=0;$i<count($Cate_Array);$i++)
    {
        $j=$i;
		$category='a'.$j;
        $res=mysqli_query($con,"select Name,Author,Publish_Year,ISBN,Picture,Category from Book where Category='$Cate_Array[$i]'");
        $jobj->$category=array();
        while($row2=mysqli_fetch_assoc($res))
        {
            $jarr=new stdClass();
            foreach ($row2 as $key=>$value)
            {
                $jarr->$key=$value;
            }
            array_push($jobj->$category,$jarr);
        }
    }
    echo json_encode($jobj,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    mysqli_close($con);
    ?>