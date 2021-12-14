#npm-install-has-run is a semaphore file to be used across stages as env variables dont persist
if [ ! -f npm-install-has-run ]; then
    echo "npm-install not run already, running"
    npm --registry https://nexus-ha.cvshealth.com:9443/repository/npmjs-group install
    if [ $? -ne 0 ]; then
        echo "npm-install failed, exiting.."
        exit 1
    fi
    touch npm-install-has-run
    npm run build
else
    echo "npm-install was already run... SKIPPING!"
fi
