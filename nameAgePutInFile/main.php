<html>
<body>

    <?php
    $array = $_POST['result'];

    $file = 'file.txt';
    $fp = fopen($file, 'w');

    foreach ($array as $item) {
        echo $item;
        echo '<br>';

        fputs($fp, $item."\n");
    }

    fclose($fp);

    echo '<a href="file.txt" download="file">Download</a>';
    echo '&nbsp;';
    echo '<a href="index.html">zurück</a>';
    ?>

</body>
</html>
