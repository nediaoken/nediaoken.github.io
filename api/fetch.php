<?php 

$conn = mysqli_connect("mysqli.pawbandit.com", "nediaoken", "SchattigeWasberen", "pokemon");

$query = "SELECT * FROM pokemon LIMIT 5";
$query_run = mysqli_query($conn, $query);
$result_array = [];

echo $result_array;

if(mysqli_num_rows($query_run) > 0)
{
    foreach($query_run as $row)
    {
        array_push($result_array, $row);
    }
   // header('Content-type: application/json');
    return json_encode($result_array);
}
else
{
    echo $return = "<h4>No Record Found</h4>";
}
?>