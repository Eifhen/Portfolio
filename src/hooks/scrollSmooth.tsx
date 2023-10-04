

export default function ScrollSmooth(){
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var link = anchor  as HTMLAnchorElement;
            var reference = link.getAttribute("href");
            var element = document.querySelector(`${reference}`);
            element?.scrollIntoView({
                behavior: 'smooth'
            })
        });
    });
}

export function scrollTop(){
    const layout = document.getElementById("layout-page");
    layout!.scrollTop = 0;
}
