#!bin/bash

while true
do
    clear
    echo "UTILITY MENU"
    echo "1 Show IP INFO"
    echo "2 Quit Program"
    read -p "Enter Choice: " selection

    case "$selection" in
        1) sh myip.sh;read junk;;
        2) clear;exit;;
        3) clear;;
    esac

done