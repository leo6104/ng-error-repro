import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, EMPTY, map } from 'rxjs';

@Component({
  selector: 'cmp-3',
  templateUrl: './cmp3.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class Cmp3Component {
  request$ = this.http.get<any>('https://www.mymusicsheet.com/graphql/LoadSheetRank?operationName=LoadSheetRank&variables=%7B%22data%22:%7B%22paginate%22:%22all%22,%22listNum%22:50,%22term%22:%22week%22,%22instruments%22:%5B%5D%7D%7D&query=query%20LoadSheetRank($data:%20SheetRankInput!)%20%7B%20%20%20sheetRank(data:%20$data)%20%7B%20%20%20%20%20after%20%20%20%20%20before%20%20%20%20%20current%20%20%20%20%20endAt%20%20%20%20%20list%20%7B%20%20%20%20%20%20%20...SheetListItem%20%20%20%20%20%20%20rankDiff%20%20%20%20%20%7D%20%20%20%20%20listNum%20%20%20%20%20startAt%20%20%20%20%20total%20%20%20%7D%20%7D%20%20fragment%20SheetListItem%20on%20Sheet%20%7B%20%20%20productId%20%20%20productType%20%20%20sheetId%20%20%20title%20%20%20metaMaker%20%20%20metaMemo%20%20%20metaMusician%20%20%20metaSong%20%20%20isFree%20%20%20thumbnailUrl%20%20%20instruments%20%20%20instrumentation%20%20%20sheetType%20%20%20includeChord%20%20%20createdAt%20%20%20level%20%20%20currency%20%20%20price%20%20%20status%20%20%20updatedAt%20%20%20includeLyrics%20%20%20author%20%7B%20%20%20%20%20...UserPublic%20%20%20%7D%20%20%20supportCountry%20%20%20excludeCountries%20%20%20__typename%20%7D%20%20fragment%20UserPublic%20on%20User%20%7B%20%20%20artistUrl%20%20%20authLevel%20%20%20createdAt%20%20%20iamUuid%20%20%20isArtist%20%20%20isOfficial%20%20%20name%20%20%20profileUrl%20%20%20userId%20%20%20sheetsCount%20%7D').pipe(
    map(({ data }) => data),
    map(({ sheetRank }) => sheetRank),
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  );
  constructor(
    private http: HttpClient
  ) {
  }

}
