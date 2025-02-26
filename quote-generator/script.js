// Explanation: Why We Chose This API
// -----------------------------------
// We are using the Quotable API (https://api.quotable.io/random) for the following reasons:
// 1. It provides a large collection of high-quality quotes along with the author's name.
// 2. It's completely free to use and does not require an API key.
// 3. The API response is in JSON format, making it easy to extract and display quotes dynamically.
// 4. It ensures a fresh quote every time a request is made, enhancing user engagement.

// Function to fetch a random quote from the Quotable API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = "${data.content}";
        document.getElementById('author').textContent = - ${data.author};
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').textContent = 'Failed to load quote.';
        document.getElementById('author').textContent = '';
    }
}