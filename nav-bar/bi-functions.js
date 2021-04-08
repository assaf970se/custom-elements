async function trackClickEvent(redirectUrl = '') {
    const obj = {
        uniqueId: 'customEl',
        label: 'customEl',
        name: 'customEl',
        type: 'customEl',
        linkTo: redirectUrl,
        url: `${location.href}`,
    };
    const route = `https://app.wixanswers.com/api/bi/website-click?uniqueId=${obj.uniqueId}&type=${obj.type}&name=${obj.name}&url=${obj.url}&label=${obj.label}&linkTo=${obj.linkTo}`;
    const res = await fetch(route);
    const resText = await res.text();
    console.log(resText);
    window.location.href = redirectUrl;
}
