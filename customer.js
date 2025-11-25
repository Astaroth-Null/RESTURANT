// ===============================
// MAIN DATA SECTION (EDIT HERE!)
// ===============================
const DATA = {
    logo: {
        imageUrl: "icon.png",
    },
    header: [
        "ရခိုးလေး-လားမြို့လမ်းကြောင်း Hotel လမ်းဆက်ဝဲရဲ့  ",
        "နံနက်ထမင်းစေ့ရပ်ချိုသီးသော့ ချောချဲစိမ်းရွက်ကြက်ကော်",
        "ပြင်ဆင်ထုပ် ၁ ရခိုးလေးတိုင်းထောသောကြီ",
        "0978143371, 09943186837",
        "ဖိုင်းဝိုင်း (မနက် (၈) နာရီ မှ နေလည် (၃) နာရီ",
        "အထ)"
    ],
    bannerImage: "south-korea.png",

    categories: [
        { id: 1, name: "Korean Food/ကိုရီးယားအစားအစာ" },
	{ id: 2, name: "Fried Rice/ထမင်းကြော်" },
	{ id: 3, name: "Curry/ဟင်းအချက်" },
	{ id: 3, name: "Other Food/အခြားအစားအစာ" },
	{ id: 4, name: "Drink/အအေး" },

    ],

    menuItems: [
			//food
        {
            id: 1,
            name: "ဝက်ဆလပ်/BBQ pork",
            price: "3000",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description: "အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 2,
            name: "ကြက်ဆလပ်/BBQ chicken",
            price: "400",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description: "အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 3,
            name: "အမဲဆလပ် /BBQ Beef ",
            price: "600",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description: "အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 4,
            name: "ကိုးရီးယားကျောက်အိုးထမင်းသုပ်/Dolsot Bibimbap",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 5,
            name: "ကင်မ်ချီဟင်းရည်/Kimchi Jjigae",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 6,
            name: "တို့ဟူးပုဇွန်ဟင်းရည်/Sundubu Jjigae",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 7,
            name: "ပဲပိစပ်ဟင်းရည်/Danjang Jjigae",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 8,
            name: "ကိုရီးယားကြက်တောင်ပံကြော်/korean Spicy Chicken wing",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 9,
            name: "ဝက်သားမီးကင် အစပ်ချက်",
            price: "",
            image: "",
            category: "Curry/ဟင်းအချက်",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 10,
            name: "ကြက်သားမီးကင် အစပ်ချက်",
            price: "",
            image: "",
            category: "Curry/ဟင်းအချက်",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 11,
            name: "ခေါက်ဆွဲအစပ်/spicy noodle",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 12,
            name: "ကင်မ်ချီခေါက်ဆွဲ /Kimchi Noodle",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 13,
            name: "ပဲခေါက်ဆွဲ/Janjang Noodle ",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 14,
            name: "တော့ပိုကီ/Teobokki",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 15,
            name: "လာ့ပိုကီ/Rabboki",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 16,
            name: "ငါးသားပြား/Fish cake",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 17,
            name: "ထမင်းလိပ်/Gimbap",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 18,
            name: "ကြက်သားပြားကြော်",
            price: "",
            image: "",
            category: "Korean Food/ကိုရီးယားအစားအစာ",
            description:"အစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 19,
            name: "ကင်မ်ချီထမင်းကြော်",
            price: "",
            image: "",
            category: "Fried Rice/ထမင်းကြော်",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 20,
            name: "တရုတ်ထမင်းကြော်",
            price: "",
            image: "",
            category: "Fried Rice/ထမင်းကြော်",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 21,
            name: "တုန်ယန်းထမင်းကြော်",
            price: "",
            image: "",
            category: "Fried Rice/ထမင်းကြော်",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 22,
            name: "လေပြေညှင်းထမင်းကြော်",
            price: "",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
            category: "Fried Rice/ထမင်းကြော်",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
        {
            id: 23,
            name: "ခေါက်ဆွဲကြော်",
            price: "",
            image: "",
            category: "Other Food/အခြားအစားအစာ",
            description:"ရနိုင်သောအသားများ:ကြက်သား/ဝက်သား/အမဲသား/ပုဇွန်\nအစပ်အရသာlevel:ပုံမှန်/အချို/အစပ်"
        },
							//Drink
        {
            id: 24,
            name: "Blue ocean soda",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 25,
            name: "Strawberry soda",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 26,
            name: "Passion soda",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 27,
            name: "Kiwi soda",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 28,
            name: "Poison love soda",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 29,
            name: "Apple soda",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 30,
            name: "Passion juice",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 31,
            name: "Orange juice",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 32,
            name: "Lime juice",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 33,
            name: "Sunkist juice",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 34,
            name: "Avocado juice",
            price: "",
            image: "",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 34,
            name: "Strawberry juice",
            price: "",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
            category: "Drink/အအေး",
            description:""
        },
        {
            id: 35,
            name: "Soju",
            price: "",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
            category: "Drink/အအေး",
            description:""
        },
	
	
	
	
	
	

    ]
    
};

// ===============================
// DO NOT EDIT BELOW THIS LINE
// ===============================

function normalizeDescription(value) {
    if (Array.isArray(value)) {
        return value.filter(Boolean).join('\n').trim();
    }
    if (typeof value === 'string') {
        return value;
    }
    return '';
}

function formatPrice(value) {
    if (value === null || value === undefined) {
        return '';
    }
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return `${value.toLocaleString()} Ks`;
    }
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (!trimmed) {
            return '';
        }
        const numeric = Number(trimmed.replace(/[,\s]/g, ''));
        if (!Number.isNaN(numeric)) {
            return `${numeric.toLocaleString()} Ks`;
        }
        return trimmed;
    }
    return '';
}

function renderLogo() {
    const logoCircle = document.getElementById('logoCircle');
    const logoImage = document.getElementById('logoImage');
    if (DATA.logo.backgroundColor) {
        logoCircle.style.backgroundColor = DATA.logo.backgroundColor;
    }
    if (DATA.logo.imageUrl) {
        logoImage.src = DATA.logo.imageUrl;
        logoImage.style.display = 'block';
    } else {
        logoImage.style.display = 'none';
    }
}
function renderHeader() {
    const headerText = document.getElementById('headerText');
    headerText.innerHTML = '';
    DATA.header.forEach(line => {
        const p = document.createElement('p');
        p.textContent = line;
        headerText.appendChild(p);
    });
}
function renderBanner() {
    const bannerImage = document.getElementById('bannerImage');
    bannerImage.src = DATA.bannerImage;
}
function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    const allButton = document.createElement('button');
    allButton.className = 'category-item active';
    allButton.innerHTML = `All Categories <span class="category-count">(${DATA.menuItems.length})</span>`;
    allButton.onclick = () => {
        renderMenuItems();
        highlightActiveCategory("All Categories");
        document.getElementById('categoryDropdown').style.display = 'none';
    };
    categoryList.appendChild(allButton);
    DATA.categories.forEach(cat => {
        const count = DATA.menuItems.filter(item => item.category === cat.name).length;
        const button = document.createElement('button');
        button.className = 'category-item';
        button.innerHTML = `${cat.name} <span class="category-count">(${count})</span>`;
        button.onclick = () => {
            renderMenuItems(cat.name);
            highlightActiveCategory(cat.name);
            document.getElementById('categoryDropdown').style.display = 'none';
        };
        categoryList.appendChild(button);
    });
    const categoriesBtn = document.getElementById('categoriesBtn');
    categoriesBtn.style.display = DATA.categories.length ? 'block' : 'none';
}
function highlightActiveCategory(catName) {
    document.querySelectorAll('.category-item').forEach(btn => {
        if (
            (catName === "All Categories" && btn.textContent.includes("All Categories")) ||
            btn.textContent.includes(catName)
        ) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
function renderMenuItems(filterCat = "") {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    updateSectionTitle("");
    if (!filterCat || filterCat === "All Categories") {
        DATA.categories.forEach(cat => {
            const headerDiv = document.createElement('div');
            headerDiv.className = 'category-header';
            headerDiv.style.gridColumn = "1/-1";
            headerDiv.style.margin = "30px 0 10px 0";
            headerDiv.innerHTML = `<h3>${cat.name}</h3>`;
            menuGrid.appendChild(headerDiv);
            DATA.menuItems
                .filter(item => item.category === cat.name)
                .forEach(item => {
                    menuGrid.appendChild(makeMenuItemDiv(item));
                });
        });
    } else {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'category-header';
        headerDiv.style.gridColumn = "1/-1";
        headerDiv.style.margin = "30px 0 10px 0";
        headerDiv.innerHTML = `<h3>${filterCat}</h3>`;
        menuGrid.appendChild(headerDiv);
        DATA.menuItems
            .filter(item => item.category === filterCat)
            .forEach(item => {
                menuGrid.appendChild(makeMenuItemDiv(item));
            });
    }
}
function makeMenuItemDiv(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.setAttribute('data-category', item.category || '');
    div.style.cursor = 'pointer';
    div.onclick = () => showMenuDetail(item);
    const description = normalizeDescription(item.description);
    const price = formatPrice(item.price);
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-item-image">
        <div class="menu-item-content">
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-item-footer">
                <span class="menu-item-price">${price}</span>
            </div>
        </div>
    `;
    if (description) {
        div.dataset.description = description;
    } else {
        delete div.dataset.description;
    }
    return div;
}
function updateSectionTitle(text = "") {
    const sectionTitle = document.querySelector('.section-title');
    if (!sectionTitle) return;
    sectionTitle.textContent = "";
    sectionTitle.style.display = "none";
}
function showMenuDetail(item) {
    const modal = document.getElementById('menuDetailModal');
    document.getElementById('detailImage').src = item.image;
    document.getElementById('detailImage').alt = item.name;
    document.getElementById('detailName').textContent = item.name;
    document.getElementById('detailPrice').textContent = formatPrice(item.price);
    document.getElementById('detailDescription').textContent = normalizeDescription(item.description) || 'No description available.';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeMenuDetail() {
    document.getElementById('menuDetailModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const sectionTitle = document.querySelector('.section-title');
    if (searchContainer.style.display === 'none') {
        searchContainer.style.display = 'flex';
        document.getElementById('searchInput').focus();
        if (sectionTitle) sectionTitle.style.display = 'none';
    } else {
        searchContainer.style.display = 'none';
        clearSearch();
        if (sectionTitle) sectionTitle.style.display = 'none';
    }
}
function searchMenu() {
    const term = document.getElementById('searchInput').value.toLowerCase().trim();
    const menuItems = document.querySelectorAll('.menu-item');
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) sectionTitle.style.display = 'none';

    let visibleCount = 0;

    menuItems.forEach(itemEl => {
        const name = itemEl.querySelector('.menu-item-name').textContent.toLowerCase();
        const description = itemEl.dataset.description ? itemEl.dataset.description.toLowerCase() : '';
        const isMatch = name.includes(term) || description.includes(term);
        itemEl.classList.toggle('hidden', !isMatch);
        if (isMatch) visibleCount++;
    });

    document.querySelectorAll('.category-header').forEach(header => {
        header.style.display = 'none';
    });

    let invalidMessage = document.getElementById('invalidItemMessage');
    if (visibleCount === 0 && term) {
        if (!invalidMessage) {
            invalidMessage = document.createElement('div');
            invalidMessage.id = 'invalidItemMessage';
            invalidMessage.style.cssText = 'grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #ef4444; font-size: 20px; font-weight: bold; background: #fee; border-radius: 10px; margin: 20px 0;';
            invalidMessage.textContent = 'Invalid item';
            document.getElementById('menuGrid').appendChild(invalidMessage);
        }
        invalidMessage.style.display = 'block';
    } else if (invalidMessage) {
        invalidMessage.style.display = 'none';
    }
}
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('hidden'));
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) sectionTitle.style.display = 'none';
    document.querySelectorAll('.category-header').forEach(header => {
        header.style.display = '';
    });
    const invalidMessage = document.getElementById('invalidItemMessage');
    if (invalidMessage) {
        invalidMessage.style.display = 'none';
    }
}
function toggleCategories() {
    const dropdown = document.getElementById('categoryDropdown');
    if (!DATA.categories.length) return;
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
        renderCategories();
    } else {
        dropdown.style.display = 'none';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    renderLogo();
    renderHeader();
    renderBanner();
    renderCategories();
    renderMenuItems();
    updateSectionTitle("");

    document.getElementById('categoriesBtn').addEventListener('click', toggleCategories);
    document.getElementById('searchBtn').addEventListener('click', toggleSearch);

    // ✅ Modified: hide search box automatically after pressing Enter
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchMenu();
            const term = document.getElementById('searchInput').value.trim();
            if (term !== "") {
                document.getElementById('searchContainer').style.display = 'none';
            }
        } else {
            searchMenu();
        }
    });

    document.getElementById('clearSearchBtn').addEventListener('click', function() {
        clearSearch();
        document.getElementById('searchContainer').style.display = 'none';
    });

    const closeBtn = document.querySelector('.menu-detail-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMenuDetail);

    const modal = document.getElementById('menuDetailModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) closeMenuDetail();
        });
    }
});

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('categoryDropdown');
    const categoriesBtn = document.getElementById('categoriesBtn');
    if (dropdown && dropdown.style.display !== 'none' &&
        !dropdown.contains(event.target) &&
        !categoriesBtn.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
