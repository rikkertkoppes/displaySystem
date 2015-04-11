displaySystem.config({
    //websocket host to listen to
    // wsHost: "",
    //specify the node that is being subscribed to when using mserver
    // mserverNode: "overlay",
    //optional chromakey background color
    // background: "lime",
    //modules, order determines z stacking
    modules: {
        'camera': {
            visible: true
        },
        'clock': {
            // visible: true
        },
        'time': {
            // visible: true
        },
        // 'twitter': {
            // visible: true
        // },
        // 'lowThird': {
            // visible: true
        // }
    },
    //path to the modules, can even be a full url
    modulePath: "modules"
});
