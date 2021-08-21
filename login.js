document.getElementById('login-submit').addEventListener('click',function()
{
    const emailField = document.getElementById('user-email');

    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('user-password');

    const userPassword = passwordField.value;

    if(userEmail == 'sontan@gmail.com' && userPassword== 'secret')
    {
        window.location.href='banking.html'
    }
    else console.log('invalid password');
})

