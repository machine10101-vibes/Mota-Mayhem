import './brands.css';
import { loadPublicCatalog, isAdultAttested, setAdultAttested, safeHttpsUrl } from './enterprise.js';

const root = document.querySelector('#brand-directory');
const gate = document.querySelector('#age-gate');
const confirm = document.querySelector('#age-confirm');
const status = document.querySelector('#directory-status');

function node(tag, className, value) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (value !== undefined) el.textContent = value;
  return el;
}

function link(label, href, className = 'brand-link') {
  const safe = safeHttpsUrl(href);
  if (!safe) return null;
  const a = node('a', className, label);
  a.href = safe;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  return a;
}

function render(catalog) {
  root.replaceChildren();
  if (!catalog.brands.length) {
    root.append(node('p', 'empty', 'No approved Enterprise brands are listed yet. Check back soon.'));
    return;
  }
  for (const brand of catalog.brands) {
    const card = node('article', 'brand-card');
    card.id = brand.slug;
    const head = node('div', 'brand-head');
    if (safeHttpsUrl(brand.logo_url)) {
      const logo = node('img', 'brand-logo');
      logo.src = brand.logo_url;
      logo.alt = `${brand.display_name} logo`;
      logo.loading = 'lazy';
      head.append(logo);
    }
    const identity = node('div', 'brand-identity');
    identity.append(node('p', 'eyebrow', 'APPROVED ENTERPRISE BRAND'));
    identity.append(node('h2', '', brand.display_name));
    identity.append(node('p', 'tagline', brand.tagline));
    head.append(identity);
    card.append(head, node('p', 'brand-about', brand.about));
    const website = link('OFFICIAL BRAND WEBSITE ↗', brand.website, 'brand-link primary');
    if (website) card.append(website);
    const strains = catalog.strains.filter((strain) => strain.brand_id === brand.id);
    if (strains.length) {
      card.append(node('h3', 'section-title', 'APPROVED GENETICS'));
      const list = node('div', 'strain-list');
      for (const strain of strains) {
        const item = node('section', 'strain-card');
        item.append(node('h4', '', strain.name));
        item.append(node('p', 'lineage', strain.lineage));
        item.append(node('p', 'strain-description', strain.description));
        const official = link('STRAIN INFORMATION ↗', strain.official_url);
        if (official) item.append(official);
        list.append(item);
      }
      card.append(list);
    }
    const campaigns = catalog.campaigns.filter((campaign) => campaign.brand_id === brand.id);
    if (campaigns.length) {
      card.append(node('h3', 'section-title', 'SPONSORED IN-GAME FEATURES'));
      for (const campaign of campaigns) {
        const promo = node('section', 'campaign-card');
        promo.append(node('p', 'sponsored-label', 'SPONSORED'));
        promo.append(node('h4', '', campaign.headline));
        promo.append(node('p', 'strain-description', campaign.message));
        promo.append(node('p', 'lineage', campaign.strain.name));
        const destination = link('OFFICIAL BRAND INFORMATION ↗', campaign.destination_url);
        if (destination) promo.append(destination);
        card.append(promo);
      }
    }
    card.append(node('p', 'jurisdiction', `Brand review jurisdiction: ${brand.jurisdiction}`));
    root.append(card);
  }
}

async function openDirectory() {
  if (!isAdultAttested()) {
    gate.hidden = false;
    root.hidden = true;
    return;
  }
  gate.hidden = true;
  root.hidden = false;
  status.textContent = 'Loading approved Enterprise brands…';
  try {
    const catalog = await loadPublicCatalog();
    render(catalog);
    status.textContent = 'Only reviewed, approved brand and strain submissions are shown.';
  } catch (error) {
    status.textContent = error.message || 'The brand directory is temporarily unavailable.';
  }
}

confirm.addEventListener('click', () => {
  if (!setAdultAttested(true)) {
    status.textContent = 'This browser could not save your age confirmation. Enable site storage and try again.';
    return;
  }
  void openDirectory();
});

document.querySelector('#age-leave').addEventListener('click', () => {
  window.location.href = './';
});

void openDirectory();
