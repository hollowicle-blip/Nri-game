// === БАЗЫ ДАННЫХ (Замени "?" на свои данные, когда захочешь) ===
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
  'Империя Кадвир': 'Тег Империи',
  'Королевство Гилдас': 'Тег Гилдаса',
  'Аттария': 'Тег Аттарии',
  'Земли Валаса': 'Тег Валаса',
  'Королевство кувитов': 'Тег кувитов',
  'Пламенные острова': 'Тег островов',
  'Айдрасиан': 'Тег Айдрасиана',
  'Дикие земли': 'Тег диких земель',
  'Тхалор': 'Тег Тхалора',
  'Туманный континент': 'Тег тумана',
  'Другой мир': 'Тег чужака'
};

// === ВЫБОРЫ (РАСА, КЛАСС, ПРОИСХОЖДЕНИЕ) ===
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
    
    // Если базовое ХП класса заполнено в БД (>0), подставим его
    const hpInput = document.getElementById('classHPValue');
    if (d.hp > 0 && hpInput.value == "0") {
      hpInput.value = d.hp;
      recalcDerived();
    }
  } else c.style.display = 'none';
  save();
});

document.getElementById('origin').addEventListener('change', function() {
  const t = originData[this.value], c = document.getElementById('originCard');
  if (t) {
    c.style.display = 'block';
    document.getElementById('originTag').textContent = t;
  } else c.style.display = 'none';
  save();
});

// === ЭФИР ===
function changeEther(n) {
  let v = parseInt(document.getElementById('ether').textContent) || 0;
  v = Math.max(0, v + n);
  document.getElementById('ether').textContent = v;
  save();
}

// === АТРИБУТЫ ===
const ATTR_MAX = 2, ATTR_TOTAL = 4, attrs = ['str', 'int', 'con', 'end'];

function getAttrUsed() {
  let s = 0;
  attrs.forEach(a => s += parseInt(document.getElementById('attr_' + a).textContent) || 0);
  return s;
}

function updateAttrPoints() {
  document.getElementById('attrPointsLeft').textContent = ATTR_TOTAL - getAttrUsed();
}

function changeAttr(id, n) {
  const el = document.getElementById('attr_' + id);
  let v = parseInt(el.textContent) || 0;
  const nv = v + n;
  if (nv < 0 || nv > ATTR_MAX) return;
  if (n > 0 && getAttrUsed() >= ATTR_TOTAL) return;
  el.textContent = nv;
  updateAttrPoints();
  recalcDerived();
  save();
}

// === НАВЫКИ ===
const SKILL_MAX = 3, SKILL_TOTAL = 10;
const skillNames = [
  'Атлетика', 'Акробатика', 'Ловкость рук', 'Скрытность', 'Внимательность',
  'Расследование', 'Проницательность', 'Выживание', 'Убеждение', 'Обман',
  'Харизма', 'Запугивание', 'История миров', 'Знание наслоения', 'Знание магии',
  'Природоведение', 'Медицина', 'Ремесло', 'Инженерия', 'Воля'
];

function buildSkills() {
  const g = document.getElementById('skillsGrid');
  g.innerHTML = '';
  skillNames.forEach((n, i) => {
    g.innerHTML += `
      <div class="skill-row">
        <span class="skill-name" title="${n}">${n}</span>
        <div class="skill-controls">
          <button class="pm-btn" onclick="changeSkill(${i},-1)">−</button>
          <span class="skill-val" id="skill_${i}">0</span>
          <button class="pm-btn" onclick="changeSkill(${i},1)">+</button>
        </div>
      </div>`;
  });
}

function getSkillUsed() {
  let s = 0;
  for (let i = 0; i < skillNames.length; i++) {
    s += parseInt(document.getElementById('skill_' + i).textContent) || 0;
  }
  return s;
}

function updateSkillPoints() {
  document.getElementById('skillPointsLeft').textContent = SKILL_TOTAL - getSkillUsed();
}

function changeSkill(i, n) {
  const el = document.getElementById('skill_' + i);
  let v = parseInt(el.textContent) || 0;
  const nv = v + n;
  if (nv < 0 || nv > SKILL_MAX) return;
  if (n > 0 && getSkillUsed() >= SKILL_TOTAL) return;
  el.textContent = nv;
  updateSkillPoints();
  save();
}

buildSkills();

// === ПРОИЗВОДНЫЕ ХАРАКТЕРИСТИКИ ===
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
  
  const maxInventorySlots = end + 10;
  updateInventoryCapacity(maxInventorySlots);

  ['HP', 'Mana', 'Charges', 'Sat'].forEach(k => {
    const cur = +document.getElementById('cur' + k).textContent || 0;
    const max = +document.getElementById('max' + k).textContent || 0;
    if (cur > max) document.getElementById('cur' + k).textContent = max;
  });
}

function changeCur(k, n) {
  const el = document.getElementById('cur' + k);
  const max = +document.getElementById('max' + k).textContent || 0;
  let v = parseInt(el.textContent) || 0;
  v = Math.max(0, Math.min(max, v + n));
  el.textContent = v;
  save();
}

function fillMax(k) {
  document.getElementById('cur' + k).textContent = document.getElementById('max' + k).textContent;
  save();
}

['level', 'classHPValue', 'manaBonus'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => { recalcDerived(); save(); });
});

// === ИНВЕНТАРЬ ===
let inventoryItems = [];

function updateInventoryCapacity(maxSlots) {
  let usedSlots = 0;
  inventoryItems.forEach(item => {
    if (item.s) {
      usedSlots += Math.ceil(item.q / 10);
    } else {
      usedSlots += item.q;
    }
  });

  const statusEl = document.getElementById('invStatus');
  statusEl.textContent = `Занято слотов: ${usedSlots} / ${maxSlots}`;
  
  if (usedSlots > maxSlots) {
    statusEl.classList.add('overloaded');
  } else {
    statusEl.classList.remove('overloaded');
  }
}

function renderInventory() {
  const container = document.getElementById('inventoryList');
  container.innerHTML = '';
  
  inventoryItems.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.innerHTML = `
      <input type="text" class="item-name" value="${item.n}" placeholder="Название" oninput="editItem(${index}, 'n', this.value)">
      <div class="item-qty-box">
        <button class="pm-btn" onclick="changeItemQty(${index}, -1)">−</button>
        <span class="item-qty">${item.q}</span>
        <button class="pm-btn" onclick="changeItemQty(${index}, 1)">+</button>
      </div>
      <div class="item-chk">
        <span>Расходник</span>
        <input type="checkbox" ${item.s ? 'checked' : ''} onchange="editItem(${index}, 's', this.checked)">
      </div>
      <button class="del-item-btn" onclick="removeItem(${index})">✕</button>
    `;
    container.appendChild(row);
  });
  recalcDerived();
}

function addItem(name = '', qty = 1, isStackable = false) {
  inventoryItems.push({ n: name, q: qty, s: isStackable });
  renderInventory();
  save();
}

function removeItem(index) {
  inventoryItems.splice(index, 1);
  renderInventory();
  save();
}

function changeItemQty(index, amount) {
  inventoryItems[index].q = Math.max(1, inventoryItems[index].q + amount);
  renderInventory();
  save();
}

function editItem(index, key, value) {
  inventoryItems[index][key] = value;
  recalcDerived();
  save();
}

function addStartingGear() {
  const cls = document.getElementById('charClass').value;
  const d = classData[cls];
  if (!d || !d.gear || d.gear.length === 0) {
    alert('У этого класса нет прописанного стартового снаряжения.');
    return;
  }
  if (confirm(`Заменить текущий инвентарь снаряжением класса "${cls}"?`)) {
    inventoryItems = JSON.parse(JSON.stringify(d.gear));
    renderInventory();
    save();
  }
}

// === АВТОСОХРАНЕНИЕ И ЗАГРУЗКА ===
const fields = ['name', 'race', 'charClass', 'origin', 'tag1', 'tag2', 'tag3', 'bond1', 'bond2', 'bond3', 'bond4', 'level', 'classHPValue', 'manaBonus'];

function save() {
  const data = {};
  fields.forEach(id => data[id] = document.getElementById(id).value);
  data.ether = document.getElementById('ether').textContent;
  attrs.forEach(a => data['attr_' + a] = document.getElementById('attr_' + a).textContent);
  for (let i = 0; i < skillNames.length; i++) {
    data['skill_' + i] = document.getElementById('skill_' + i).textContent;
  }
  ['HP', 'Mana', 'Charges', 'Sat'].forEach(k => data['cur' + k] = document.getElementById('cur' + k).textContent);
  data.inventory = inventoryItems;
  localStorage.setItem('charSheet', JSON.stringify(data));
}

function load() {
  const raw = localStorage.getItem('charSheet');
  if (!raw) {
    recalcDerived();
    return;
  }
  const data = JSON.parse(raw);
  fields.forEach(id => {
    if (data[id] !== undefined) document.getElementById(id).value = data[id];
  });
  if (data.ether) document.getElementById('ether').textContent = data.ether;
  attrs.forEach(a => {
    if (data['attr_' + a] !== undefined) document.getElementById('attr_' + a).textContent = data['attr_' + a];
  });
  for (let i = 0; i < skillNames.length; i++) {
    if (data['skill_' + i] !== undefined) document.getElementById('skill_' + i).textContent = data['skill_' + i];
  }
  ['HP', 'Mana', 'Charges', 'Sat'].forEach(k => {
    if (data['cur' + k] !== undefined) document.getElementById('cur' + k).textContent = data['cur' + k];
  });
  if (data.inventory) inventoryItems = data.inventory;
  
  renderInventory();
  updateAttrPoints();
  updateSkillPoints();
  recalcDerived();
  
  document.getElementById('race').dispatchEvent(new Event('change'));
  document.getElementById('charClass').dispatchEvent(new Event('change'));
  document.getElementById('origin').dispatchEvent(new Event('change'));
}

document.querySelectorAll('input, select, textarea').forEach(el => {
  el.addEventListener('input', save);
  el.addEventListener('change', save);
});

load();
