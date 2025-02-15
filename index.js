import * as cheerio from 'cheerio';
import * as fs from 'fs';

const FlomoFileName = "flomo.html"

const flomoHtml = fs.readFileSync(FlomoFileName, 'utf8');
const $ = cheerio.load(flomoHtml);

const data = $.extract({
    tags: [
        {
            selector: 'select[name="tag"] option',
            value: (el) => {
                const tag = $(el).text();
                return tag;
            }
        }
    ],
    notes: [
        {
            selector: 'div.memo',
            value: (el) => {
                const created_at = $(el).find('.time').text();
                const content = $(el).find('.content').text().trim().replace(/\n +/g, '<br>');
                return { created_at, content };
            }
        }
    ]
});

const { tags, notes: rawNotes } = data;
const notes = rawNotes.map((note, index) => {
    const noteTags = tags.filter(tag => note.content.includes(`#${tag}`));
    return { ...note, tags: noteTags };
});

const notesJson = JSON.stringify(notes, null, 2);
fs.writeFileSync('flomo.json', notesJson);