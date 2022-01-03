import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrServiceService {

  arr = [
    { name: `Pepsi-Kola`, prise: `$1`, expirationDate: { normalDate: `10/08/2022`, exDate: new Date(2022, 7, 10), }, category: `drinks` },
    { name: `Fanta`, prise: `$2`, expirationDate: { normalDate: `04/01/2022`, exDate: new Date(2022, 0, 4), }, category: `drinks` },
    { name: `7up`, prise: `$5`, expirationDate: { normalDate: `10/07/2021`, exDate: new Date(2021, 6, 10), }, category: `drinks` },
    { name: `Mirinda`, prise: `$2`, expirationDate: { normalDate: `10/05/2022`, exDate: new Date(2022, 4, 10), }, category: `drinks` },
    { name: `Sprite`, prise: `$4`, expirationDate: { normalDate: `10/12/2021`, exDate: new Date(2021, 11, 10), }, category: `drinks` },
    { name: `Kola`, prise: `$1`, expirationDate: { normalDate: `08/09/2021`, exDate: new Date(2021, 8, 8), }, category: `drinks` },
  ];

  constructor() { }
}
