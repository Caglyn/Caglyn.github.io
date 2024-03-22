<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Form</title>
    </head>
    <body>
        <?php
            if(empty($_POST['name']) == false)
            {
                echo $_POST['name'];
                echo "</br>";
            }
            else
            {
                echo "Name: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['username']) == false)
            {
                echo $_POST['username'];
                echo "</br>";
            }
            else
            {
                echo "Username: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['password']) == false)
            {
                echo $_POST['password'];
                echo "</br>";
            }
            else
            {
                echo "Password: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['address']) == false)
            {
                echo $_POST['address'];
                echo "</br>";
            }
            else
            {
                echo "Adress: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['country']) == false)
            {
                echo $_POST['country'];
                echo "</br>";
            }
            else
            {
                echo "Country: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['zipcode']) == false)
            {
                echo $_POST['zipcode'];
                echo "</br>";
            }
            else
            {
                echo "Zip: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['email']) == false)
            {
                echo $_POST['email'];
                echo "</br>";
            }
            else
            {
                echo "Email: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['gender']) == false)
            {
                echo $_POST['gender'];
                echo "</br>";
            }
            else
            {
                echo "Gender: Not provided";
                echo "</br>";
            }
            if(empty($_POST['language']) == false)
            {
                for($i=0;$i<sizeof($_POST['language']); $i++)
                {
                    echo $_POST['language'][$i];
                    echo "</br>";
                }
            }
            else
            {
                echo "Language: Not provided\n";
                echo "</br>";
            }
            if(empty($_POST['about']) == false)
            {
                echo $_POST['about'];
                echo "</br>";
            }
            else
            {
                echo "About: Not provided\n";
                echo "</br>";
            }
            
        ?>
    </body>
</html>