<html>
<head>
  <link rel="stylesheet" href="<?php echo(CSS.'registrations.css'); ?>">
</head>
<body>

<? //echo heading('Registrations',1); ?>
<div class="registrations">
  <h1>Registrations</h1>
<table>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>State</th>
    <th>College</th>
    <th>Unlisted College</th>
    <th>Gender</th>
    <th>Email Address</th>
    <th>Contact Number</th>
    <th>AZeo Number</th>
    <th>Suggestions</th>
  </tr>
<?php 
foreach($query as $row){
  echo "<tr>";
  echo "<td>". $row->id ."</td>";
  echo "<td>". $row->name ."</td>";
  echo "<td>". $row->state ."</td>";
  echo "<td>". $row->college ."</td>";
  echo "<td>". $row->specify ."</td>";
  echo "<td>". $row->gender ."</td>";
  echo "<td>". $row->email ."</td>";
  echo "<td>". $row->phone ."</td>";
  echo "<td>". $row->azeonum ."</td>";
  echo "<td>". $row->suggestions ."</td>";
  echo "</tr>"; 
}
?>
</table>
</div>
</body>
</html>