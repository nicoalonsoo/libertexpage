export const eventContact = (email, name) => {
    window.fbq('track', 'Contact', {content_category: email, content_name: name});
};
export const eventLead = (email, name) => {
    window.fbq('track', 'Lead', {content_category: email, content_name: name});
};
export const eventViewContent = () => {
    window.fbq('track', 'ViewContent');
};