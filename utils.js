function isUpdateReady(updateName, currentTime) {
    var lastSunUpdate = localStorage.getItem(updateName);

    if ((currentTime - lastSunUpdate) !== 0 || !lastSunUpdate) {
        localStorage.setItem(updateName, currentTime);

        return true;
    }

    return false;
}

export { isUpdateReady };