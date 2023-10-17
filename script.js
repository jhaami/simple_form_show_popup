document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.querySelectorAll('input[type="radio"]'))
        .filter(input => input.checked)
        .map(input => input.id)
        .join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
         document.getElementById('fname').innerHTML=`<h4>First Name:</h4>${firstName}`;
         document.getElementById('lname').innerHTML=`<h4>Last Name:</h4>${lastName}`;
         document.getElementById('dob').innerHTML=`</h4>DOB:</h4>${dob}`;
         document.getElementById('country').innerHTML=`<h4>Country:</h4>${country}`;
         document.getElementById('gender').innerHTML=`<h4>Gender:</h4>${gender}`;
         document.getElementById('profession').innerHTML=`<h4>Profession:</h4>${profession}`;
         document.getElementById('mail').innerHTML=`<h4>Email:</h4>${email}`;
         document.getElementById('mob').innerHTML=`<h4>Mobile no.:</h4>${mobile}`;
         document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('surveyForm').reset();
});
