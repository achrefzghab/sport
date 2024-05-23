import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm!:FormGroup
  apiResult:any;
  constructor(private fbuilder:FormBuilder,
   private weatherService:WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherForm = this.fbuilder.group({
      city : ['',[Validators.required]]
    });
  }
  search(){
console.log("here object",this.weatherForm.value);
this.weatherService.search(this.weatherForm.value).subscribe((result)=>{
  console.log('here response from API',result.apiRes);
  this.apiResult=result.apiRes;
})

  }
}
