import { Component, OnInit } from '@angular/core';
import { WordtypeServiceService } from 'src/app/Service/wordtype-service.service';
import { Sentence } from 'src/app/model/sentencemodel';
import { MatDialog } from '@angular/material/dialog';
import { AddWordDialogComponent } from '../add-word-dialog/add-word-dialog.component';
import { AddwordComponent } from '../addword/addword.component';
@Component({
  selector: 'app-word-type',
  templateUrl: './word-type.component.html',
  styleUrls: ['./word-type.component.css']
})
export class WordTypeComponent implements OnInit {

  words: string[] = [];
  public wordtype: any;
  public word: any;

  sentenceObject: Sentence =
    {
      SentenceId: 0,
      Sentence1: ''
    }
  constructor(private serviceData: WordtypeServiceService,
    private dialog: MatDialog
  ) { }
  title = 'Add sentence';

  sentence: any = '';
  ngOnInit(): void {

  }

  showAll(wordtypef: any) {
    this.serviceData.getAllWords(wordtypef)
      .subscribe({
        next: (word) => {
          this.words = word;
        }
      }

      )
  }

  addWordToSentence(word: any) {
    this.sentence += ' ' + word;
  }

  AddSentece() {
    if (this.sentence =='') {
      alert('Please enter the sentence')
    }

    else{
      
      this.sentenceObject.Sentence1 = this.sentence;
      console.log(this.sentenceObject);
      this.serviceData.AddSentence(this.sentenceObject).subscribe({
        next: (setnce) => {
          console.log(setnce);
        }
      })
      this.sentence = '';
  

    }
   
     

  }



  openDialog() {
    this.dialog.open(AddWordDialogComponent, {
      width: '20%',
      height: '28%'

    });

  }

  clearText() {
    this.sentence = '';
  }

}
