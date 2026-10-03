import cors from 'cors';
import express from 'express';
import fs from 'node:fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { grabSongInfo, modifySets, modifyDiffs, updateAllMaps } from './mapupdate.js';

dotenv.config();

const app = express();

app.listen(3333, () => {
    console.log(`\x1b[45myuru.ca server\x1b[0m - currently listening on port 3333~`);
    console.log(`\x1b[45myuru.ca server\x1b[0m - launched from ${path.resolve()}`);
});
app.use(cors());
app.use(express.json());
app.use(express.static('page/assets/')); //serves the assets for the api page ^-^
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get('/', (req, res) => { //serves the basic api webpage~
    res.sendFile(__dirname+'/page/index.html');
});

app.get('/lastfm', async(req, res) => {
    let isKanojo = req.query.isKanojo ?? false;
    try {
        let songInfo;
        if (isKanojo) {
            songInfo = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=meowpurrmrrp&api_key=${process.env.LAST_FM_KEY}&format=json&limit=1`);
        } else {
            songInfo = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=yurukyan&api_key=${process.env.LAST_FM_KEY}&format=json&limit=1`);
        }
        res.send(await songInfo.json());
    } catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
});