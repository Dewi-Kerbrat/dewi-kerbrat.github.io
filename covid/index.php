<?php
	$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
	if ($lang != 'br')
	    $lang = 'fr';
	header("Location: $lang/index.html",TRUE,301);
 ?>
