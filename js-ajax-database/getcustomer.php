<?php
$mysqli = new mysqli("localhost", "root", "", "customer_db");

if ($mysqli->connect_error) {
    exit("Could not connect");
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>Customer ID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>Company Name</th>";
echo "<td>" . $cname . "</td>";
echo "<th>Contact Name</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>Postal Code</th>";
echo "<td>" . $pcode . "</td>";
echo "<th>Country</th>";
echo "<td>" . $country . "</td>";
echo "</tr>";
echo "</table>";
?>