#!/bin/bash

CHECK_HOME=${ANDROID_HOME:-}
if [ -z ${CHECK_HOME} ];
 then
    echo "Please set ANDROID_HOME"
    exit 0
fi

if [ "$HOST_IP" == "" ]
then
   IP_ADDR=127.0.0.1
    POSITIONAL=()
    while [[ $# -gt 0 ]]
    do
    key="$1"

    case $key in
        -i|--ip-address)
            IP_ADDR="$2"
            shift # past argument
            shift # past value
            ;;
        -h|--help)
            echo "Provide IP address of appium node via -i or --ip-address flag"
            shift # past argument
            ;;
        *)
            POSITIONAL+=("$1") # save it in an array for later
            shift # past argument
            ;;
    esac
    done
    set -- "${POSITIONAL[@]}" # restore positional parameters
else
   IP_ADDR=$HOST_IP
fi

echo running Appium Android node on $IP_ADDR

sed "s/<IP_ADDR>/$IP_ADDR/g" ./e2e-test/resource/appium-node-android.json.template > ./e2e-test/resource/appium-node-android.json

./node_modules/.bin/appium --nodeconfig e2e-test/resource/appium-node-android.json
