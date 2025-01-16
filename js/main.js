// Select the button
const button = document.querySelector('button');

// Add click event to the button
button.addEventListener('click', () => {
    // Create the modal content
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.color = 'white';
    modal.style.fontSize = '1.2rem';
    modal.innerHTML = `
        <div style="text-align: center;">
            <p>Welcome to the AI Journey!</p>
            <button style="padding: 0.5rem 1rem; font-size: 1rem;">Close</button>
        </div>
    `;

    // Append modal to the body
    document.body.appendChild(modal);

    // Close the modal when the button inside it is clicked
    modal.querySelector('button').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
});
