// === БАЗЫ ДАННЫХ ===
const raceData = {
  'Ангелы':        { hp: '?', tag: '?', ability: '?', move: '?' },
  'Ангриалы':      { hp: '?', tag: '?', ability: '?', move: '?' },
  'Вампиры':       { hp: '?', tag: '?', ability: '?', move: '?' },
  'Гули':          { hp: '?', tag: '?', ability: '?', move: '?' },
  'Демоны кольца': { hp: '?', tag: '?', ability: '?', move: '?' },
  'Люди':          { hp: '?', tag: '?', ability: '?', move: '?' },
  'Маги':          { hp: '?', tag: '?', ability: '?', move: '?' },
  'Оборотни':      { hp: '?', tag: '?', ability: '?', move: '?' },
  'Сеты':          { hp: '?', tag: '?', ability: '?', move: '?' },
  'Сильфы':        { hp: '?', tag: '?', ability: '?', move: '?' },
  'Эльфы':         { hp: '?', tag: '?', ability: '?', move: '?' }
};

const classData = {
  'Мечник':        { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Торговец':      { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Послушник':     { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Волшебник':     { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Вор':           { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Лучник':        { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Ниндзя':        { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Варвар':        { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Монах':         { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Рунный мастер': { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Друид':         { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Скаут':         { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Ассасин':       { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] },
  'Линкер':        { hp: 0, weapon: '?', armor: '?', license: '?', moves: '?', gear: [] }
};

const originData = {
  'Империя Кадвир': 'Тег Империи', 'Королевство Гилдас': 'Тег Гилдаса', 'Аттария': 'Тег Аттарии',
  'Земли Валаса': 'Тег Валаса', 'Королевство кувитов': 'Тег кувитов', 'Пламенные острова': 'Тег островов',
  'Айдрасиан': 'Тег Айдрасиана', 'Дикие земли': 'Тег диких земель', 'Тхалор': 'Тег Тхалора',
  'Туманный континент': 'Тег тумана', 'Другой мир': 'Тег чужака'
};

const starterKits = [
  {
    name: '🧭 Набор следопыта',
    items: [
      { n: 'Компас и звёздная карта', q: 1, s: false },
      { n: 'Пеньковый канат 15м с кошкой', q: 1, s: false },
      { n: 'Мелок и маркерные колышки', q: 1, s: false },
      { n: 'Малая подзорная труба', q: 1, s: false },
      { n: 'Огниво и трутовые трубки', q: 5, s: true }
    ]
  },
  {
    name: '🍳 Набор повара',
    items: [
      { n: 'Котелок и специи', q: 1, s: false },
      { n: 'Разделочный нож и складная доска', q: 1, s: false },
      { n: 'Фляга с крепким алкоголем', q: 1, s: false },
      { n: 'Чугунная ступка с пестиком', q: 1, s: false },
      { n: 'Проветриваемый meшочек', q: 1, s: false }
    ]
  },
  {
    name: '🔦 Набор дозорного',
    items: [
      { n: 'Сигнальный рог или свисток', q: 1, s: false },
      { n: 'Фонарь-потайник и масло', q: 1, s: false },
      { n: 'Отвар/ягоды «ночноцвета»', q: 1, s: false },
      { n: 'Колокольчики и бечёвка', q: 1, s: false },
      { n: 'Тёплый шерстяной плед', q: 1, s: false }
    ]
  },
  {
    name: '🩹 Набор лекаря',
    items: [
      { n: 'Бинты и льняные жгуты', q: 5, s: true },
      { n: 'Прижигательные иглы и ланцет', q: 1, s: false },
      { n: 'Мазь от ожогов и гноя', q: 1, s: false },
      { n: 'Успокоительная настойка', q: 1, s: false },
      { n: 'Нюхательная соль и порошок', q: 1, s: false }
    ]
  },
  {
    name: '🕵️ Набор разведчика',
    items: [
      { n: 'Маскировочный грим (сажа, глина)', q: 1, s: false },
      { n: 'Мягкие кожаные чехлы для обуви', q: 1, s: false },
      { n: 'Рулон тонкой прочной проволоки', q: 1, s: false },
      { n: 'Металлическое зеркальце', q: 1, s: false },
      { n: 'Пучок отмычек', q: 5, s: true }
    ]
  },
  {
    name: '🗺️ Набор картографа',
    items: [
      { n: 'Тубус с чистыми пергаментами', q: 1, s: false },
      { n: 'Перо, вощёные чернила, грифели', q: 5, s: true },
      { n: 'Курвиметр и латунный циркуль', q: 1, s: false },
      { n: 'Увеличительное стекло', q: 1, s: false },
      { n: 'Песочные часы (1 минута)', q: 1, s: false }
    ]
  },
  {
    name: '🤝 Набор переговорщика',
    items: [
      { n: 'Шёлковые платки и мыло', q: 1, s: false },
      { n: 'Дорожные кубики и колода карт', q: 1, s: false },
      { n: 'Личный журнал слухов', q: 1, s: false },
      { n: 'Бутылка хорошего вина', q: 1, s: false },
      { n: 'Кошелёк с двойным дном', q: 1, s: false }
    ]
  },
  {
    name: '🏹 Набор охотника',
    items: [
      { n: 'Стальной охотничий капкан', q: 1, s: false },
      { n: 'Потрошильные ножи и крюки', q: 1, s: false },
      { n: 'Флакон запах-приманки', q: 5, s: true },
      { n: 'Смола для тетивы и оперения', q: 1, s: false },
      { n: 'Деревянные манки', q: 1, s: false }
    ]
  },
  {
    name: '🔨 Набор ремесленника',
    items: [
      { n: 'Точильный камень и масло', q: 1, s: false },
      { n: 'Иглы и жильные нити', q: 5, s: true },
      { n: 'Молоточек и наковаленка', q: 1, s: false },
      { n: 'Мешочек с заклёпками, ремешками', q: 1, s: false },
      { n: 'Смола/воск и ветошь', q: 1, s: false }
    ]
  }
];

// === СОСТОЯНИЕ ===
let inventoryItems = [];
let chosenKit = '';

// === ДЕКОРАТИВНЫЕ ФУНКЦИИ ВЫБОРА ===
document.getElementById('race').addEventListener('change', function() {
  const d = raceData[this.value], c = document.getElementById('raceCard');
  if (d) {
    c.style.display = 'block';
    document.getElementById('raceHP').textContent = d.hp;
    document.getElementById('raceTag').textContent = d.tag;
    document.getElementById('raceAbility').textContent = d.ability;
    document.getElementById('raceMove').textContent = d.move;
  } else c.style.display = 'none';
  save();
});

document.getElementById('charClass').addEventListener('change', function() {
  const d = classData[this.value], c = document.getElementById('classCard');
  if (d) {
    c.style.display = 'block';
    document.getElementById('classHP').textContent = d.hp;
    document.getElementById('classWeapon').textContent = d.weapon;
    document.getElementById('classArmor').textContent = d.armor;
    document.getElementById('classLicense').textContent = d.license;
    document.getElementById('classMoves').textContent = d.moves;
    const hpInput = document.getElementById('classHPValue');
    if (d.hp > 0 && hpInput.value == "0") { hpInput.value = d.hp; recalcDerived(); }
  } else c.style.display = 'none';
  save();
});

document.getElementById('origin').addEventListener('change', function() {
  const t = originData[this.value], c = document.getElementById('originCard');
  if (t) { c.style.display = 'block'; document.getElementById('originTag').textContent = t; } 
  else c.style.display = 'none';
  save();
});

function changeEther(n) {
  let v = parseInt(document.getElementById('ether').textContent) || 0;
  v = Math.max(0, v + n); document.getElementById('ether').textContent = v; save();
}

// === АТРИБУТЫ ===
const ATTR_MAX = 2, ATTR_TOTAL = 4, attrs = ['str', 'int', 'con', 'end'];
function getAttrUsed() { let s = 0; attrs.forEach(a => s += parseInt(document.getElementById('attr_' + a).textContent) || 0); return s; }
function updateAttrPoints() { document.getElementById('attrPointsLeft').textContent = ATTR_TOTAL - getAttrUsed(); }
function changeAttr(id, n) {
  const el = document.getElementById('attr_' + id); let v = parseInt(el.textContent) || 0; const nv = v + n;
  if (nv < 0 || nv > ATTR_MAX) return;
  if (n > 0 && getAttrUsed() >= ATTR_TOTAL) return;
  el.textContent = nv; updateAttrPoints(); recalcDerived(); save();
}

// === НАВЫКИ ===
const SKILL_MAX = 3, SKILL_TOTAL = 10;
const skillNames = ['Атлетика', 'Акробатика', 'Ловкость рук', 'Скрытность', 'Внимательность', 'Расследование', 'Проницательность', 'Выживание', 'Убеждение', 'Обман', 'Харизма', 'Запугивание', 'История миров', 'Знание наслоения', 'Знание магии', 'Природоведение', 'Медицина', 'Ремесло', 'Инженерия', 'Воля'];

function buildSkills() {
  const g = document.getElementById('skillsGrid'); g.innerHTML = '';
  skillNames.forEach((n, i) => {
    g.innerHTML += `<div class="skill-row"><span class="skill-name" title="${n}">${n}</span><div class="skill-controls"><button class="pm-btn" onclick="changeSkill(${i},-1)">−</button><span class="skill-val" id="skill_${i}">0</span><button class="pm-btn" onclick="changeSkill(${i},1)">+</button></div></div>`;
  });
}
function getSkillUsed() { let s = 0; for (let i = 0; i < skillNames.length; i++) s += parseInt(document.getElementById('skill_' + i).textContent) || 0; return s; }
function updateSkillPoints() { document.getElementById('skillPointsLeft').textContent = SKILL_TOTAL - getSkillUsed(); }
function changeSkill(i, n) {
  const el = document.getElementById('skill_' + i); let v = parseInt(el.textContent) || 0; const nv = v + n;
  if (nv < 0 || nv > SKILL_MAX) return;
  if (n > 0 && getSkillUsed() >= SKILL_TOTAL) return;
  el.textContent = nv; updateSkillPoints(); save();
}

// === ПРОИЗВОДНЫЕ ===
function recalcDerived() {
  const con = +document.getElementById('attr_con').textContent || 0;
  const int_ = +document.getElementById('attr_int').textContent || 0;
  const end = +document.getElementById('attr_end').textContent || 0;
  const lvl = +document.getElementById('level').value || 1;
  const cHP = +document.getElementById('classHPValue').value || 0;
  const mB = +document.getElementById('manaBonus').value || 0;
  
  document.getElementById('maxHP').textContent = con + 10 + cHP;
  document.getElementById('maxMana').textContent = int_ + lvl + mB;
  document.getElementById('maxCharges').textContent = int_;
  document.getElementById('maxSat').textContent = con + lvl + 10;
  updateInventoryCapacity(end + 10);

  ['HP', 'Mana', 'Charges', 'Sat'].forEach(k => {
    const cur = +document.getElementById('cur' + k).textContent || 0;
    const max = +document.getElementById('max' + k).textContent || 0;
    if (cur > max) document.getElementById('cur' + k).textContent = max;
  });
}
function changeCur(k, n) {
  const el = document.getElementById('cur' + k); const max = +document.getElementById('max' + k).textContent || 0;
  let v = parseInt(el.textContent) || 0; v = Math.max(0, Math.min(max, v + n)); el.textContent = v; save();
}
function fillMax(k) { document.getElementById('cur' + k).textContent = document.getElementById('max' + k).textContent; save(); }

['level', 'classHPValue', 'manaBonus'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => { recalcDerived(); save(); });
});

// === ИНВЕНТАРЬ ===
function updateInventoryCapacity(maxSlots) {
  let used = 0; inventoryItems.forEach(item => { used += item.s ? Math.ceil(item.q / 10) : item.q; });
  const statusEl = document.getElementById('invStatus'); statusEl.textContent = `Занято слотов: ${used} / ${maxSlots}`;
  if (used > maxSlots) statusEl.classList.add('overloaded'); else statusEl.classList.remove('overloaded');
}

function renderInventory() {
  const container = document.getElementById('inventoryList'); container.innerHTML = '';
  inventoryItems.forEach((item, index) => {
    const row = document.createElement('div'); row.className = 'item-row';
    row.innerHTML = `
      <input type="text" class="item-name" value="${item.n}" oninput="editItem(${index}, 'n', this.value)">
      <div class="item-qty-box">
        <button class="pm-btn" onclick="changeItemQty(${index}, -1)">−</button>
        <span class="item-qty">${item.q}</span>
        <button class="pm-btn" onclick="changeItemQty(${index}, 1)">+</button>
      </div>
      <div class="item-chk"><span>Расходник</span><input type="checkbox" ${item.s ? 'checked' : ''} onchange="editItem(${index}, 's', this.checked)"></div>
      <button class="del-item-btn" onclick="removeItem(${index})">✕</button>`;
    container.appendChild(row);
  });
  recalcDerived();
}
function addItem(n = '', q = 1, s = false) { inventoryItems.push({ n, q, s }); renderInventory(); save(); }
function removeItem(index) { inventoryItems.splice(index, 1); renderInventory(); save(); }
function changeItemQty(index, amt) { inventoryItems[index].q = Math.max(1, inventoryItems[index].q + amt); renderInventory(); save(); }
function editItem(index, k, v) { inventoryItems[index][k] = v; recalcDerived(); save(); }

function addStartingGear() {
  const cls = document.getElementById('charClass').value, d = classData[cls];
  if (!d || !d.gear || d.gear.length === 0) { alert('У этого класса нет стартового снаряжения.'); return; }
  if (confirm(`Заменить инвентарь снаряжением класса "${cls}"?`)) { inventoryItems = JSON.parse(JSON.stringify(d.gear)); renderInventory(); save(); }
}

// === НАЧАЛЬНЫЕ НАБОРЫ ===
function buildKitList() {
  const container = document.getElementById('kitList'); container.innerHTML = '';
  starterKits.forEach((kit, index) => {
    const isTaken = chosenKit === kit.name;
    const card = document.createElement('div'); card.className = 'kit-card'; card.id = 'kit_' + index;
    let itemsHTML = '';
    kit.items.forEach(item => { itemsHTML += `<div class="kit-item">• ${item.n}${item.s ? ` <b>(расходник ×${item.q})</b>` : ''}</div>`; });
    card.innerHTML = `
      <div class="kit-header" onclick="toggleKit(${index})"><span>${kit.name}</span><span class="kit-arrow">►</span></div>
      <div class="kit-body">
        ${itemsHTML}
        <button class="kit-take-btn ${isTaken ? 'kit-taken' : ''}" onclick="takeKit(${index})">${isTaken ? '✅ Набор выбран' : '🎒 Взять этот набор'}</button>
      </div>`;
    container.appendChild(card);
  });
}
function toggleKit(index) { document.getElementById('kit_' + index).classList.toggle('open'); }
function takeKit(index) {
  const kit = starterKits[index];
  if (chosenKit) {
    if (!confirm(`Заменить "${chosenKit}" на "${kit.name}"? Вещи старого набора удалятся.`)) return;
    const oldKit = starterKits.find(k => k.name === chosenKit);
    if (oldKit) { oldKit.items.forEach(old => { const idx = inventoryItems.findIndex(inv => inv.n === old.n); if (idx !== -1) inventoryItems.splice(idx, 1); }); }
  }
  kit.items.forEach(item => inventoryItems.push(JSON.parse(JSON.stringify(item))));
  chosenKit = kit.name; localStorage.setItem('chosenKit', chosenKit);
  renderInventory(); buildKitList(); save();
}

// === СОХРАНЕНИЕ И ЗАГРУЗКА ===
const fields = ['name', 'race', 'charClass', 'origin', 'tag1', 'tag2', 'tag3', 'bond1', 'bond2', 'bond3', 'bond4', 'level', 'classHPValue', 'manaBonus'];
function save() {
  const data = {}; fields.forEach(id => data[id] = document.getElementById(id).value);
  data.ether = document.getElementById('ether').textContent;
  attrs.forEach(a => data['attr_' + a] = document.getElementById('attr_' + a).textContent);
  for (let i = 0; i < skillNames.length; i++) data['skill_' + i] = document.getElementById('skill_' + i).textContent;
  ['HP', 'Mana', 'Charges', 'Sat'].forEach(k => data['cur' + k] = document.getElementById('cur' + k).textContent);
  data.inventory = inventoryItems; data.chosenKit = chosenKit;
  localStorage.setItem('charSheet', JSON.stringify(data));
}
function load() {
  const raw = localStorage.getItem('charSheet'); if (!raw) { recalcDerived(); return; }
  const data = JSON.parse(raw);
  fields.forEach(id => { if (data[id] !== undefined) document.getElementById(id).value = data[id]; });
  if (data.ether) document.getElementById('ether').textContent = data.ether;
  attrs.forEach(a => { if (data['attr_' + a] !== undefined) document.getElementById('attr_' + a).textContent = data['attr_' + a]; });
  for (let i = 0; i < skillNames.length; i++) if (data['skill_' + i] !== undefined) document.getElementById('skill_' + i).textContent = data['skill_' + i];
  ['HP', 'Mana', 'Charges', 'Sat'].forEach(k => { if (data['cur' + k] !== undefined) document.getElementById('cur' + k).textContent = data['cur' + k]; });
  if (data.inventory) inventoryItems = data.inventory;
  if (data.chosenKit) chosenKit = data.chosenKit;
}

// === ЗАПУСК ===
buildSkills();
load();
buildKitList();
renderInventory();

document.querySelectorAll('input, select, textarea').forEach(el => {
  el.addEventListener('input', save); el.addEventListener('change', save);
});
