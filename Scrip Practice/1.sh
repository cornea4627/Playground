!# bin/bash
alias myip='ip a | grep -oE "10(\.[0-9]{1,3}){3}" | grep -v "255$"