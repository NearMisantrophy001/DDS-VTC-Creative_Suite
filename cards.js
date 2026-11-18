const cardsData = [
    // ================= TOOLS =================
    {
        title: "Rush ID",
        subtitle: "Created Nov 05, 2026",
        category: "tools",
        cover: "Assets/Rush_Cover.jpg",
        logo: "R",
        href: "Rush_ID.html"
    },
    {
        title: "Mug Printing",
        subtitle: "Created Nov 07, 2026",
        category: "tools",
        cover: "Assets/Mug_Cover.jpg",
        logo: "M",
        href: "Mug_Printing.html"
    },
    {
        title: "Tile Layout",
        subtitle: "Created Nov 11, 2026",
        category: "Tools",
        cover: "Assets/PrintGrid_Cover.jpg",
        logo: "T",
        href: "Tile_Layout.html"
    },
    {
        title: "Client Contract Draft",
        subtitle: "Word Document",
        category: "files",
        cover: "Assets/1.jpg",
        logo: "D",
        href: "#"
    },
    // ================= BOOKMARKS =================
    {
        title: "Logo Design Inspiration",
        subtitle: "Saved Nov 10, 2026",
        category: "bookmarks",
        cover: "Assets/1.jpg",
        logo: "1",
        href: "#"
    },
    {
        title: "Color Palette Guide",
        subtitle: "Saved Nov 12, 2026",
        category: "bookmarks",
        cover: "Assets/2.jpg",
        logo: "2",
        href: "#"
    },
    {
        title: "Typography Rules",
        subtitle: "Saved Nov 15, 2026",
        category: "bookmarks",
        cover: "Assets/1.jpg",
        logo: "3",
        href: "#"
    },
    {
        title: "UI/UX Wireframes",
        subtitle: "Saved Nov 18, 2026",
        category: "bookmarks",
        cover: "Assets/2.jpg",
        logo: "4",
        href: "#"
    },
    {
        title: "Printing Dimensions",
        subtitle: "Saved Nov 20, 2026",
        category: "bookmarks",
        cover: "Assets/1.jpg",
        logo: "5",
        href: "#"
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