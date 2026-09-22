import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8787;
const DB_PATH = path.join(__dirname, 'server', 'data', 'db.json');
const DIST_PATH = path.join(__dirname, 'dist');

const COLLECTIONS = ['destinations', 'packages', 'activities', 'blogs', 'taxiRoutes', 'taxiVehicles', 'enquiries'];

function ensureDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    const empty = {};
    for (const c of COLLECTIONS) empty[c] = [];
    fs.writeFileSync(DB_PATH, JSON.stringify(empty, null, 2));
  }
}

function readDb() {
  ensureDb();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    const db = JSON.parse(raw);
    for (const c of COLLECTIONS) {
      if (!Array.isArray(db[c])) db[c] = [];
    }
    return db;
  } catch (e) {
    console.error('Failed to read DB, starting fresh:', e.message);
    const empty = {};
    for (const c of COLLECTIONS) empty[c] = [];
    return empty;
  }
}

function writeDb(db) {
  const tmp = DB_PATH + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(db, null, 2));
  fs.renameSync(tmp, DB_PATH);
}

function makeId(prefix) {
  return `${prefix}-${Date.now().toString(36)}${Math.floor(Math.random() * 999).toString(36)}`;
}

const app = express();
app.use(express.json({ limit: '5mb' }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

for (const collection of COLLECTIONS) {
  const prefix = collection === 'enquiries' ? 'ENQ' : collection === 'taxiRoutes' ? 'route' : collection === 'taxiVehicles' ? 'veh' : collection.replace(/s$/, '') === 'activitie' ? 'act' : collection.replace(/s$/, '').slice(0, 4);

  app.get(`/api/${collection}`, (req, res) => {
    const db = readDb();
    res.json(db[collection]);
  });

  app.post(`/api/${collection}`, (req, res) => {
    const db = readDb();
    const item = { ...req.body };
    if (!item.id) item.id = makeId(prefix);
    if (!item.createdAt && collection === 'enquiries') item.createdAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
    db[collection].unshift(item);
    writeDb(db);
    res.status(201).json(item);
  });

  app.put(`/api/${collection}/:id`, (req, res) => {
    const db = readDb();
    const idx = db[collection].findIndex(i => i.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    db[collection][idx] = { ...req.body, id: req.params.id };
    writeDb(db);
    res.json(db[collection][idx]);
  });

  app.patch(`/api/${collection}/:id`, (req, res) => {
    const db = readDb();
    const idx = db[collection].findIndex(i => i.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    db[collection][idx] = { ...db[collection][idx], ...req.body, id: req.params.id };
    writeDb(db);
    res.json(db[collection][idx]);
  });

  app.delete(`/api/${collection}/:id`, (req, res) => {
    const db = readDb();
    const before = db[collection].length;
    db[collection] = db[collection].filter(i => i.id !== req.params.id);
    if (db[collection].length === before) return res.status(404).json({ error: 'Not found' });
    writeDb(db);
    res.json({ ok: true });
  });
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

if (fs.existsSync(DIST_PATH)) {
  // Serve built site under both the configured base path and root.
  app.use('/organise-my-trip', express.static(DIST_PATH));
  app.use(express.static(DIST_PATH));

  // Relative asset paths (images/..., assets/...) resolved from nested SPA
  // routes like /packages/images/x or /attraction/jaipur/images/x —
  // rewrite to dist/<asset>.
  app.use((req, res, next) => {
    const m = req.path.match(/^\/(?:organise-my-trip\/)?[\w-]+(?:\/[\w-]+)*\/((?:images|assets)\/.+)$/);
    if (m) {
      return res.sendFile(path.join(DIST_PATH, m[1]), err => { if (err) next(); });
    }
    next();
  });

  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'API running. Build dist/ to serve the website.', endpoints: COLLECTIONS.map(c => `/api/${c}`) });
  });
}

app.listen(PORT, () => {
  console.log(`Organise My Trip API + site server running at http://localhost:${PORT}`);
  console.log(`API endpoints: ${COLLECTIONS.map(c => `/api/${c}`).join(', ')}`);
  console.log(`DB file: ${DB_PATH}`);
});
