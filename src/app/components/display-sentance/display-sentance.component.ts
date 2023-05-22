import { Component, OnInit,ViewChild} from '@angular/core';
import { WordtypeServiceService } from 'src/app/Service/wordtype-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-display-sentance',
  templateUrl: './display-sentance.component.html',
  styleUrls: ['./display-sentance.component.css']
})
export class DisplaySentanceComponent implements OnInit{

  displayedColumns: string[] = ['sentenceId','sentence1'];
  

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private serviceData : WordtypeServiceService){}
  
  
  ngOnInit(): void {
      this.getAllSentences();
  }

   
  getAllSentences()
  {
     this.serviceData.getAllSentence()
     .subscribe({
      next:(res)=>{
         console.log(res)
         this.dataSource =new MatTableDataSource(res)
         this.dataSource.paginator = this.paginator;
        //  this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("err while fetching data")
      }
     });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

