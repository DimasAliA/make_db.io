const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');

    const textSpan = document.createElement('span');
    textSpan.innerText = "MakeDB";

    colorBox.appendChild(textSpan);
    bgAnimation.append(colorBox);
}
window.onload = () => {
    fetch('https://68cb-36-85-1-212.ngrok-free.app/auth/check-login-status', {
        method: 'GET',
        credentials: 'include'
    })
        .then(response => {
            console.log('Response', response);
            return response.json();
        })
        .then(data => {
            console.log('Data', data);
            if (data.isLoggedIn) {
                window.location.href = 'https://dimasalia.github.io/make_db.io/index2.html';
            }
        })
        .catch(error => console.error('Error:', error));
};
