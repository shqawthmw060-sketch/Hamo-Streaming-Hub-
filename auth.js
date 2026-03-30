// auth.js

// Function to handle user authentication
function authenticate(userCredentials) {
    // Mock authentication process
    const validCredentials = { username: 'user', password: 'pass' };  
    return (userCredentials.username === validCredentials.username && userCredentials.password === validCredentials.password);
}

// Function to handle login
function login(username, password) {
    const userCredentials = { username, password };
    if (authenticate(userCredentials)) {
        console.log('Login successful!');
    } else {
        console.log('Invalid username or password.');
    }
}

// Example usage
login('user', 'pass'); // Change parameters for testing
