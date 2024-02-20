import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-conteudos',
  templateUrl: './conteudos.component.html',
  styleUrls: ['./conteudos.component.css']
})
export class ConteudosComponent implements OnInit {
fotoCapa:string='https://play-lh.googleusercontent.com/89pvitgbrXmo4fnifGeFXtIikHzitizxm7fZwhOfeMlCpMHHJh9HTVUZGF90yDkvpP59nA'
conteudo:string='ssss'
descricao:string='ssss'
private id:string |null="0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id=value.get("id")
     )
   /*    console.log(value.get("id"))) */
  // this.setValueToComponent(this.id)
  }
  setValueToComponent(id:string|null){
const result=dataFake.filter
(article=>article.id==id

  )
console.log(result)
 }
}
