import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const members = [
      { id: 11, name: "Takehiro Takeyama" },
      { id: 12, name: "Mitsuki Komakura" },
      { id: 13, name: "Kenta Osada" },
      { id: 14, name: "Yurika Takafuji" },
      { id: 15, name: "Takayuki Hamasaki" },
      { id: 16, name: "Riku Midorikawa" },
      { id: 17, name: "Rena Midorikawa" },
      { id: 18, name: "Yudai Ohashi" },
      { id: 19, name: "Noriyuki Iwano" },
      { id: 20, name: "Kojiro Sasaki" }
    ];

    return { members }
  }

  genId(members: Member[]): number {
    return 0 < members.length ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }
}
