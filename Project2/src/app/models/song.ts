/* export class Song {

    constructor(
        public _id: number,
        public _title: string,
        public _musician: Musician
    ){}
} */

import { Musician } from './musician';

export interface Song {
    id: number;
    title: string;
    musician: Musician;
}