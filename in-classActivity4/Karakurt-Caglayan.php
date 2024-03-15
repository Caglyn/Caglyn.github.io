<!DOCTYPE html>
<html lang="en">
<head>
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1" />
</head>
<body>
    <?php
    // Declaring associative arrays to store the rates
    $currency_rates = array(
        "USD" => array(
            "CAD" => 1.35, 
            "EUR" => 0.92,
            "USD"=>1.00
        ),
        "CAD" => array(
            "USD" => 0.74, 
            "EUR" => 0.68,
            "CAD"=>1.00
        ),
        "EUR" => array(
            "USD" => 1.09, 
            "CAD" => 1.47,  
            "EUR"=>1.00
        )
    );


    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        // Get the values from the form if they exist
        //Else statements are to avoid the undefined array key  error we faced
        if (isset($_GET['from_value'])) {
            $from_value = $_GET['from_value'];
        } else {
            $from_value = "";
        }

        if (isset($_GET['from_currency'])) {
            $from_currency = $_GET['from_currency'];
        } else {
            $from_currency = "";
        }

        if (isset($_GET['to_currency'])) {
            $to_currency = $_GET['to_currency'];
        } else {
            $to_currency = "";
        }
        if (is_numeric($from_value) && isset($currency_rates[$from_currency][$to_currency])) {
            $rate = $currency_rates[$from_currency][$to_currency];
            $to_value = $from_value * $rate;
        } else {
            $to_value = "";
        }
    }
    ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="GET">
        <table>
            <tr>
                <td>
                    From:
                </td>
                <td>
                    <input type="text" name="from_value" value="<?php echo isset($_GET['from_value']) ? $_GET['from_value'] : ''; ?>"/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="from_currency">
                        <option value="USD" <?php if(isset($_GET['from_currency']) && $_GET['from_currency'] == 'USD') echo 'selected'; ?>>USD</option>
                        <option value="CAD" <?php if(isset($_GET['from_currency']) && $_GET['from_currency'] == 'CAD') echo 'selected'; ?>>CAD</option>
                        <option value="EUR" <?php if(isset($_GET['from_currency']) && $_GET['from_currency'] == 'EUR') echo 'selected'; ?>>EUR</option>
                    </select>
                </td>   
            </tr>
            <tr>
                <td>
                    To:
                </td>
                <td>
                    <input type="text" name="to_value" value="<?php echo $to_value; ?>" readonly/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="to_currency">
                        <option value="USD" <?php if(isset($_GET['to_currency']) && $_GET['to_currency'] == 'USD') echo 'selected'; ?>>USD</option>
                        <option value="CAD" <?php if(isset($_GET['to_currency']) && $_GET['to_currency'] == 'CAD') echo 'selected'; ?>>CAD</option>
                        <option value="EUR" <?php if(isset($_GET['to_currency']) && $_GET['to_currency'] == 'EUR') echo 'selected'; ?>>EUR</option>
                    </select>
                </td>   
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <input type="submit" value="Convert"/>
                </td>   
            </tr>
        </table>
    </form>     
</body>
</html>
