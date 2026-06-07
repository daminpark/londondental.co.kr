import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function readDistFile(relativePath) {
  const filePath = join(dist, relativePath);
  assert(existsSync(filePath), `Missing dist file: ${relativePath}`);
  return readFileSync(filePath, 'utf8');
}

function readRoute(routePath) {
  const cleanPath = routePath.replace(/^\/|\/$/g, '');
  const candidates = cleanPath
    ? [join(cleanPath, 'index.html'), `${cleanPath}.html`]
    : ['index.html'];

  const match = candidates.find((candidate) => existsSync(join(dist, candidate)));
  assert(match, `Missing built route: ${routePath}`);
  return readDistFile(match);
}

function assertIncludes(content, snippet, label) {
  assert(content.includes(snippet), `${label} missing "${snippet}"`);
}

const routes = ['/en/', '/ko/', '/en/services', '/ko/services', '/en/faq', '/ko/privacy-policy'];

for (const route of routes) {
  const html = readRoute(route);
  assertIncludes(html, 'rel="canonical"', `${route} canonical`);
  assertIncludes(html, 'hreflang="en"', `${route} English alternate`);
  assertIncludes(html, 'hreflang="ko"', `${route} Korean alternate`);
  assertIncludes(html, 'application/ld+json', `${route} structured data`);
  assertIncludes(html, '/llms.txt', `${route} LLM discovery`);
}

const llms = readDistFile('llms.txt');
const llmsFull = readDistFile('llms-full.txt');
const llmsKo = readDistFile('llms-ko.txt');

assertIncludes(llms, 'London Dental Clinic', 'llms.txt');
assertIncludes(llms, 'Dr. Fiona Park', 'llms.txt');
assertIncludes(llmsFull, 'London Dental Clinic', 'llms-full.txt');
assertIncludes(llmsFull, 'Dr. Fiona Park', 'llms-full.txt');
assertIncludes(llmsKo, '런던치과의원', 'llms-ko.txt');
assertIncludes(llmsKo, '박지연', 'llms-ko.txt');

readDistFile('robots.txt');
readDistFile('_headers');

const hasSitemap = ['sitemap-index.xml', 'sitemap-0.xml'].some((fileName) => existsSync(join(dist, fileName)));
assert(hasSitemap, 'Missing generated sitemap output');

console.log(`Verified ${routes.length} routes, LLM files, headers, robots, and sitemap output.`);
