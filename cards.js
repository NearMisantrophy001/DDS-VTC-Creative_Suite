/* cards.js
 * ------------------------------------------------------------
 * All card data for the dashboard.
 * Each object supports:
 *   - title     : string (required)
 *   - subtitle  : string (required)
 *   - category  : "tools" | "files" | "bookmarks" (required)
 *   - cover     : string (URL or path to cover image)
 *   - logo      : string (either a letter/emoji OR an image URL/path)
 *                 If the string contains a slash (/) or starts with
 *                 "http", it is treated as an image source.
 *   - href      : string (link target, optional – defaults to "#")
 * ------------------------------------------------------------
 */

const cardsData = [
    // ================= TOOLS =================
    {
        title: "Rush ID",
        subtitle: "Created Nov 05, 2026",
        category: "tools",
        cover: "Assets/g1.PNG",
        logo: "R",                // can also be an image path like "logos/rush.png"
        href: "Rush_ID.html"
    },
    {
        title: "Mug Printing",
        subtitle: "Created Nov 07, 2026",
        category: "tools",
        cover: "Assets/g2.jpg",
        logo: "M",
        href: "Mug_Printing.html"
    },

    // ================= FILES =================
    {
        title: "Project Brief 2026",
        subtitle: "PDF Document",
        category: "files",
        cover: "Assets/g1.PNG",
        logo: "P",
        href: "#"
    },
    {
        title: "Client Contract Draft",
        subtitle: "Word Document",
        category: "files",
        cover: "Assets/g2.jpg",
        logo: "D",
        href: "#"
    },

    // ================= BOOKMARKS =================
    {
        title: "Logo Design Inspiration",
        subtitle: "Saved Nov 10, 2026",
        category: "bookmarks",
        cover: "Assets/g1.PNG",
        logo: "1",
        href: "#"
    },
    {
        title: "Color Palette Guide",
        subtitle: "Saved Nov 12, 2026",
        category: "bookmarks",
        cover: "Assets/g2.jpg",
        logo: "2",
        href: "#"
    },
    {
        title: "Typography Rules",
        subtitle: "Saved Nov 15, 2026",
        category: "bookmarks",
        cover: "Assets/g1.PNG",
        logo: "3",
        href: "#"
    },
    {
        title: "UI/UX Wireframes",
        subtitle: "Saved Nov 18, 2026",
        category: "bookmarks",
        cover: "Assets/g2.jpg",
        logo: "4",
        href: "#"
    },
    {
        title: "Printing Dimensions",
        subtitle: "Saved Nov 20, 2026",
        category: "bookmarks",
        cover: "Assets/g1.PNG",
        logo: "5",
        href: "#"
    }
];

/* ------------------------------------------------------------
 * Renders the card data into the #cardGrid container.
 * This runs immediately after the script is loaded (the script
 * tag is placed at the end of <body>, so the DOM is ready).
 * ------------------------------------------------------------ */
(function renderCards() {
    const grid = document.getElementById('cardGrid');
    if (!grid) {
        console.error('cards.js: #cardGrid container not found.');
        return;
    }

    // Helper: decide if logo is an image path/URL or just text
    function isImageSource(str) {
        return typeof str === 'string' && (str.includes('/') || str.startsWith('http') || /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(str));
    }

    // Build HTML for each card
    const cardsHTML = cardsData.map(card => {
        const href = card.href || '#';
        const cover = card.cover || 'Assets/placeholder.png'; // fallback
        const logo = card.logo || '?';

        // Build the logo element (text or image)
        let logoHTML;
        if (isImageSource(logo)) {
            logoHTML = `<img src="${logo}" alt="logo" />`;
        } else {
            logoHTML = `<span>${logo}</span>`;
        }

        // Category tag label (capitalize first letter)
        const tagLabel = card.category.charAt(0).toUpperCase() + card.category.slice(1);

        return `
            <a href="${href}" class="card clickable" data-category="${card.category}">
                <div class="card-thumb">
                    <img src="${cover}" alt="${card.title} Cover">
                    <div class="card-tags"><span class="tag tag-gray">${tagLabel}</span></div>
                </div>
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

    grid.innerHTML = cardsHTML;
})();