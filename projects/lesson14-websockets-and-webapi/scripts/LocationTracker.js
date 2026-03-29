let watchId;

if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
            console.error('Error:', error);
        }
    );
}