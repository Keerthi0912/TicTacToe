export async function ProtectedView() {
    const response = await fetch('/view/templates/protcted_page_template.html',
    {cache: 'no-store'});
    return await response.text();
}