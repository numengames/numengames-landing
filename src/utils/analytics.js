export function handleClick(event, label, href, target = "_self") {
    event.preventDefault();
    gtag('event', 'button_click', {
        'event_category': 'User Interaction',
        'event_label': label
    });

    if (target === "_blank") {
        window.open(href, '_blank');
    } else {
        setTimeout(function () {
            window.location.href = href;
        }, 200);
    }
}