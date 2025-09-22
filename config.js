// Auto-detect server configuration
function getServerConfig() {
    // Try to detect if we're on localhost or need IP
    const hostname = window.location.hostname;
    
    // If accessing via IP, use that IP for API calls
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
        return `http://${hostname}:3001/api`;
    }
    
    // Default to localhost for local development
    return 'http://localhost:3001/api';
}

// Export configuration
window.SERVER_CONFIG = {
    API_BASE: getServerConfig(),
    PORT: 3001
};