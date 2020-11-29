#!/bin/bash

clear ;

USER_IP=`hostname -I | awk '{print $1}'`

echo "
Compiled Successfully!

You can view you project in the browser.

Local:                  http://localhost:4000
On Your Network         http://$USER_IP:4000

Have fun!
";
