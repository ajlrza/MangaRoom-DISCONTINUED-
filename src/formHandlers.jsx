function SignInHandler(email, pass) {
    fetch('http://localhost:3000/startSession', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'Logged In': 'Yes'})
    })
        .then(res => res.json())
        .then(data => {
            // 2. Update the signal directly
            // Any component listening to this signal will auto-update
            getSession.value = data['access'];
        })
        .catch(err => console.error(err));
    console.log(getSession.value);
    return getSession.value;
}
