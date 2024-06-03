<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="database123";

$conn=mysqli_connect($server_name,$username,$password,$database_name);

if(!$conn)
{
	die("Connection Failed:" . mysqli_connect_error());
}

if(isset($_POST['payButton']))
{
	
	$requiredFields = array('name_surname', 'phone_number', 'address_1', 'postal_code', 'email');
	$emptyFields = array_filter($requiredFields, function($field) {
	    return empty(trim($_POST[$field]));
	});

	
	if (!empty($emptyFields)) {
		echo("Please insert all required information before proceeding to checkout.");
	} else {
		$name_surname = $_POST['name_surname'];
		$phone_number = $_POST['phone_number'];
		$address_1 = $_POST['address_1'];
		$postal_code = $_POST['postal_code'];
		$email = $_POST['email'];

		$sql_query = "INSERT INTO entry_details_ecommerce (name_surname,phone_number,address_1,postal_code,email)
			VALUES ('$name_surname', '$phone_number' , '$address_1' , '$postal_code' , '$email')";

		if (mysqli_query($conn, $sql_query))
		{
			echo "Thank you for your purchase!!";
		}
		else
		{
			echo "Error: " . $sql_query . "<br>" . mysqli_error($conn);
		}
		mysqli_close($conn);
	}
}
?>
