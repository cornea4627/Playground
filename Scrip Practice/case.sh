#!bin/bash
echo "MENU SYSTEM"
echo "-----------"
echo
echo "1. Quit"
echo "2 . Show IP Address"
read choice
    case $choice in
        1) exit;;
        2) sh myip.sh;;
        *) echo "the heck you saying?!"
    esac