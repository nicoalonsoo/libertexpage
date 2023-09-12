export const eventContact = (email, name) => {
    window.fbq('track', 'Contact', {email: email, name: name});
};