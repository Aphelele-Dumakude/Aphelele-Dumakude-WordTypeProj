import { Component } from '@angular/core';
import { WordFModel } from 'src/app/model/wordf';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { WordtypeServiceService } from 'src/app/Service/wordtype-service.service';
@Component({
  selector: 'app-add-word-dialog',
  templateUrl: './add-word-dialog.component.html',
  styleUrls: ['./add-word-dialog.component.css']
})
export class AddWordDialogComponent {
  newword:any ='';
  worType:any ='';
  
  constructor(private serviceData: WordtypeServiceService,
    private formbuilder :FormBuilder
    ){}
  
  word:WordFModel=
  {
    WordId:0,
    Word1:'',
    WordTypeId: 0,
    WordType:null
    
  }

  wordform !: FormGroup;
 
  ngOnInit():void
  {
     this.wordform =this.formbuilder.group(
      {
          wordtyp :['',Validators.required],
          word:['',Validators.required]
      })
  }

  
  addWord(){
     console.log(this.wordform.value)

    this.word=this.newword;
    this.serviceData.AddWord(this.newword,this.worType).subscribe(
      {
         next:(word)=>{
            console.log(word);
         }
      }
    )
  }
  
  
}
