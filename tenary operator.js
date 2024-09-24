function getStatus(isOnline) {
    return isOnline ? 'Online' : 'Offline';
}

console.log(getStatus(true));  // Output: 'Online'
console.log(getStatus(false)); // Output: 'Offline'
