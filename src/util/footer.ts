import { footer } from "./data";

const footerContainer = document.querySelector('.footer-center') as HTMLDivElement


const items = footer.map((data) => {
  return `   <div class="footer-menu">
                <h2>${data.title}</h2>
          <div class="footer-menu-link">
            <ul class="footer-link">
                  ${data.links.map((link) => {
    return `<li><a href=${link.url} target="_blank">${link.text}</a></li>`
  }).join('')}
            </ul>
          </div>
        </div>`
}).join('')

footerContainer.innerHTML = items;



