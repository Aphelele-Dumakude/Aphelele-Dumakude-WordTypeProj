import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../model/wordmodel';
import { Sentence } from '../model/sentencemodel';
import { WordFModel } from '../model/wordf';
@Injectable({
  providedIn: 'root'
})
export class WordtypeServiceService {

  baseUrl = 'http://localhost:5028';


   constructor(private http: HttpClient) { }

   getAllWords(wordtype :any):Observable<any[]> {

      return this.http.get<any[]>(this.baseUrl +'/api/WordType/'+ wordtype)

   }

   getAllSentence():Observable< Sentence[]>{
     return this.http.get<Sentence[]>(this.baseUrl +'/api/WordType/getsentences')
   }

    
   AddSentence(sentence :Sentence):Observable<Sentence>
   {
      return this.http.post<Sentence>(this.baseUrl+'/Sentence',sentence);
   }

   
   AddWord(word: WordFModel,wordtype:any):Observable<any>
   {
    
     return this.http.post<WordFModel>(this.baseUrl+'/api/wordtype',word,wordtype)

   }



    
}
