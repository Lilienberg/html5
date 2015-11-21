<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>User-info</title>
    </head>
    <body>
        
        <h3>User Info</h3>
        <ul>
            <li>
                First name: <?php echo htmlspecialchars($_POST["sentForm"]); ?>
            </li>
        </ul>
        
    </body>
    
</html>