// API Integration for SIH Project
const API_BASE = window.SERVER_CONFIG ? window.SERVER_CONFIG.API_BASE : 'http://localhost:3001/api';

// Get JWT token from localStorage
function getToken() {
    return localStorage.getItem('token');
}

// Set JWT token in localStorage
function setToken(token) {
    localStorage.setItem('token', token);
}

// Remove JWT token
function removeToken() {
    localStorage.removeItem('token');
}

// API call helper with authentication
async function apiCall(endpoint, options = {}) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    
    const response = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers
    });
    
    return response.json();
}

// Authentication functions
async function signup(username, email, password) {
    const result = await apiCall('/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password })
    });
    
    if (result.token) {
        setToken(result.token);
    }
    
    return result;
}

async function login(email, password) {
    const result = await apiCall('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    
    if (result.token) {
        setToken(result.token);
    }
    
    return result;
}

function logout() {
    removeToken();
}

// Posts functions
async function getPosts() {
    return await apiCall('/posts');
}

async function createPost(title, content) {
    return await apiCall('/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content })
    });
}

// Example usage functions
function showLoginForm() {
    const email = prompt('Enter email:');
    const password = prompt('Enter password:');
    
    if (email && password) {
        login(email, password).then(result => {
            if (result.token) {
                alert('Login successful!');
            } else {
                alert('Login failed: ' + result.message);
            }
        });
    }
}

function showSignupForm() {
    const username = prompt('Enter username:');
    const email = prompt('Enter email:');
    const password = prompt('Enter password:');
    
    if (username && email && password) {
        signup(username, email, password).then(result => {
            if (result.token) {
                alert('Signup successful!');
            } else {
                alert('Signup failed: ' + result.message);
            }
        });
    }
}

function showCreatePostForm() {
    const title = prompt('Enter post title:');
    const content = prompt('Enter post content:');
    
    if (title && content) {
        createPost(title, content).then(result => {
            if (result._id) {
                alert('Post created successfully!');
            } else {
                alert('Failed to create post: ' + result.message);
            }
        });
    }
}

// Test the API connection
async function testAPI() {
    try {
        const posts = await getPosts();
        console.log('API connected successfully. Posts:', posts);
        alert('Backend connected! Check console for details.');
    } catch (error) {
        console.error('API connection failed:', error);
        alert('Backend connection failed. Make sure server is running on port 3001.');
    }
}