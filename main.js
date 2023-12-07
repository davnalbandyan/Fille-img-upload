"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('input-file');
    const profilePic = document.getElementById('profilePic');

 
    inputFile.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            
            const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (validImageTypes.includes(file.type)) {
                
                const reader = new FileReader();

                reader.onload = function (e) {
                    profilePic.src = e.target.result;
                };

                reader.readAsDataURL(file);
            } else {
                alert('Please choose a valid image file (JPEG, PNG, JPG).');
                inputFile.value = ''; 
            }
        }
    });
});
