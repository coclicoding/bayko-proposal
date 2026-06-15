// पेजेस बदलण्याचे फंक्शन
function nextPage(pageNumber) {
    // आधी सर्व पेजेस लपवून टाका
    document.querySelectorAll('.container').forEach(container => {
        container.classList.remove('active');
    });
    
    // फक्त हवं तेच पेज स्क्रीनवर दाखवा
    const targetPage = document.getElementById(page${pageNumber});
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// फूड कार्ड सिलेक्ट किंवा अन-सिलेक्ट करण्याचे फंक्शन
function selectFood(element) {
    element.classList.toggle('selected');
}

// डोम (DOM) लोड झाल्यावर बटनांची लॉजिक सेट करणे
document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            nextPage(2);
        });
    }

    if (noBtn) {
        // फंक्शन जे 'No' बटन पळवून लावणार
        const moveButton = () => {
            // बटनाला स्क्रीनच्या मर्यादेतच फिरवण्यासाठी गणित
            const padding = 60;
            const maxX = window.innerWidth - noBtn.offsetWidth - padding;
            const maxY = window.innerHeight - noBtn.offsetHeight - padding;
            
            // 0 पासून ते जास्तीत जास्त मर्यादेपर्यंत रँडम पोझिशन निवडणे
            const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
            const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = ${randomX}px;
            noBtn.style.top = ${randomY}px;
        };

        // कॉम्प्युटरसाठी (Mouse hover)
        noBtn.addEventListener('mouseover', moveButton);
        
        // मोबाईलसाठी (Touch screen)
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // टच केल्यावर होणारी मूळ क्रिया थांबवा
            moveButton();
        });
    }
});
