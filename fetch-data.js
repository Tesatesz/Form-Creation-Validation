// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Step 5: Parse the JSON response
        const users = await response.json();

        // Step 6: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 7: Create a list
        const userList = document.createElement('ul');

        // Step 8: Loop through the users and create list items
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Step 9: Append the list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 10: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 11: Run the fetch function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
