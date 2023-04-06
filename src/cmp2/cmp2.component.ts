import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, EMPTY, map } from 'rxjs';

@Component({
  selector: 'cmp-2',
  templateUrl: './cmp2.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class Cmp2Component {
  request$ = this.http.get<any>('https://www.mymusicsheet.com/graphql/LoadSheetList?operationName=LoadSheetList&variables={"data":{"listNum":20,"paginate":"page","includeChord":null,"includeLyrics":null,"page":1,"level":null,"isFree":null,"search":"","opensearchOrderBy":{"createdAt":"DESC"}},"showPages":true}&query=query LoadSheetList($data: SheetSearchInput!, $showPages: Boolean = false) {   sheetSearch(data: $data) {     ...SheetList     queryId     list {       files @include(if: $showPages) {         pages         purpose       }     }   } }  fragment SheetList on SheetSearchPaginationResult {   aggs   current   listNum   total   list {     ...SheetListItem   } }  fragment SheetListItem on Sheet {   productId   productType   sheetId   title   metaMaker   metaMemo   metaMusician   metaSong   isFree   thumbnailUrl   instruments   instrumentation   sheetType   includeChord   createdAt   level   currency   price   status   updatedAt   includeLyrics   author {     ...UserPublic   }   supportCountry   excludeCountries   __typename }  fragment UserPublic on User {   artistUrl   authLevel   createdAt   iamUuid   isArtist   isOfficial   name   profileUrl   userId   sheetsCount }').pipe(
    map(({ data }) => data),
    map(({ sheetSearch }) => sheetSearch),
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
