<?php
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    echo: "event:test";
    echo: "data";
    flush();
?>