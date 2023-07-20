import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { delay, of, retry, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class AppComponent {
  httpClient = inject(HttpClient);
  platformId = inject(PLATFORM_ID);
  isServer = isPlatformServer(this.platformId);
  test: string = this.isServer ? 'server' : 'client';
  test$ = of('test').pipe(
    tap((t) => this.test = t),
  );

  t$ = of([1, 2, 3]).pipe(
    delay(30),
    switchMap(() =>
      this.httpClient.post(
        "https://mms.pd.mapia.io/mms/graphql/LoadSheet",
        "{\"operationName\":\"LoadSheet\",\"query\":\"query LoadSheet($sheetId: Int!, $previewSize: SizeInput, $isQuickView: Boolean! = false, $tagImageSize: SizeInput) {   sheet(sheetId: $sheetId) {     ...SheetListItem     tags {       localized       imageUrl(size: $tagImageSize)       tagId       aliasUrl       category       sheetsCount       packagesCount       likes     }     seoInfo {       description       keywords       imageUrl       title     }     isVideoAvailable     instrumentation     copyrights(includeSongCopyrights: true) @skip(if: $isQuickView) {       org       territoryOfSong       code       remarks     }     status @skip(if: $isQuickView)     youtubeId @skip(if: $isQuickView)     includeChord     sheetType     includeLyrics     files {       fileName       purpose       mfsKey       previews(size: $previewSize)       sheetId       actionType       pages     }     createdAt @skip(if: $isQuickView)     iamUuid @skip(if: $isQuickView)     title @skip(if: $isQuickView)     isViolation @skip(if: $isQuickView)     description     likes @skip(if: $isQuickView)     author @skip(if: $isQuickView) {       ...UserPublic       sheetsCount       likes     }     bilibiliUrl @skip(if: $isQuickView)     territoryOfSong @skip(if: $isQuickView)     reviewScore @skip(if: $isQuickView)     reviewersCount @skip(if: $isQuickView)     excludeCountries     youtubeShortUrl @skip(if: $isQuickView)     instagramUrl @skip(if: $isQuickView)     tiktokUrl @skip(if: $isQuickView)   } }  fragment SheetListItem on Sheet {   productId   productType   sheetId   title   metaMaker   metaMemo   metaMusician   metaSong   isFree   thumbnailUrl   instruments   instrumentation   sheetType   includeChord   createdAt   level   currency   price   status   updatedAt   includeLyrics   author {     ...UserPublic   }   supportCountry   excludeCountries   __typename }  fragment UserPublic on User {   artistUrl   authLevel   createdAt   iamUuid   isArtist   isOfficial   name   profileUrl   userId   sheetsCount }\",\"variables\":{\"sheetId\":107910,\"tagImageSize\":{\"width\":104,\"height\":104}}}",
        {
          headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ko",
            "content-type": "application/json",
            "x-platform-type": "PC",
            "x-viewer-country": "kr"
          },
        }).pipe(
        retry(5),
      )
    ),
    tap(console.log),
  );

  ngOnInit() {
    this.test$.subscribe();
  }
}
