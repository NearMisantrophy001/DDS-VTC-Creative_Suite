const cardsData = [
    // ================= TOOLS =================
    {
        title: "Rush ID",
        subtitle: "Created Nov 05, 2026",
        description: "Easily arrange ID picture in various sizes into print-ready layouts.",
        category: "Printing",
        cover: "Assets/Rush_Cover.webp",
        logo: "R",
        href: "Rush_ID.html"
    },
    {
        title: "Mug Printing",
        subtitle: "Created Nov 10, 2026",
        description: "Create and arrange mug designs into layouts ready for printing.",
        category: "Printing",
        cover: "Assets/Mug_Cover.webp",
        logo: "M",
        href: "Mug_Printing.html"
    },
    {
        title: "Print Grid",
        subtitle: "Created Nov 20, 2026",
        description: "Combine multiple images into organized tile layouts for stickers and other prints.",
        category: "Printing",
        cover: "Assets/PrintGrid_Cover.webp",
        logo: "PG",
        href: "Print_Grid.html"
    },
    {
        title: "Valid ID | B2B",
        subtitle: "Created Nov 25, 2026",
        description: "Create a photocopy-style valid ID layout with its front and back arranged on a single page, ready for printing.",
        category: "Photocopy",
        cover: "Assets/ValidID_Cover.webp",
        logo: "V",
        href: "Valid_ID.html"
    }
];

(function renderCards() {
    const grid = document.getElementById('cardGrid');
    if (!grid) return;

    function isImageSource(str) {
        return typeof str === 'string' && (str.includes('/') || str.startsWith('http') || /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(str));
    }

    function esc(str) {
        return String(str).replace(/"/g, '&quot;');
    }

    const cardsHTML = cardsData.map(card => {
        const href = card.href || '#';
        const cover = card.cover || 'Assets/placeholder.png';
        const logo = card.logo || '?';
        const safeTitle = esc(card.title);
        const description = card.description || '';

        let logoHTML;
        if (isImageSource(logo)) {
            logoHTML = `<img src="${logo}" alt="logo" />`;
        } else {
            logoHTML = `<span>${logo}</span>`;
        }

        const tagLabel = card.category.charAt(0).toUpperCase() + card.category.slice(1);

        return `
            <a href="${href}" class="card clickable" data-category="${card.category}" data-title="${safeTitle}">
                <div class="card-thumb">
                    <img src="${cover}" alt="${safeTitle} Cover">
                    ${description ? `<div class="card-desc">${description}</div>` : ''}
                    <div class="card-tags"><span class="tag tag-gray">${tagLabel}</span></div>
                </div>
                <button type="button"
                        class="card-fav"
                        data-fav-key="${safeTitle}"
                        title="Add to favorites"
                        aria-label="Add to favorites">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                </button>
                <div class="card-info">
                    <div class="card-icon">${logoHTML}</div>
                    <div class="card-text">
                        <div class="card-title">${card.title}</div>
                        <div class="card-subtitle">${card.subtitle}</div>
                    </div>
                </div>
            </a>
        `;
    }).join('');

    const emptyState = document.getElementById('emptyState');
    grid.innerHTML = cardsHTML;
    if (emptyState) grid.appendChild(emptyState);
})();