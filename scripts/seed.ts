import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DESTINATIONS } from '../src/data/destinationsData';
import { TOUR_PACKAGES } from '../src/data/packagesData';
import { ACTIVITIES } from '../src/data/activitiesData';
import { BLOG_POSTS } from '../src/data/blogData';
import { TAXI_ROUTES, TAXI_VEHICLES } from '../src/data/taxiData';
import { INITIAL_ENQUIRIES } from '../src/data/enquiriesSeed';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'server', 'data', 'db.json');

const db = {
  destinations: DESTINATIONS,
  packages: TOUR_PACKAGES,
  activities: ACTIVITIES,
  blogs: BLOG_POSTS,
  taxiRoutes: TAXI_ROUTES,
  taxiVehicles: TAXI_VEHICLES,
  enquiries: INITIAL_ENQUIRIES
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(db, null, 2));

console.log('Seeded', outPath);
for (const [k, v] of Object.entries(db)) {
  console.log(`  ${k}: ${v.length} records`);
}
