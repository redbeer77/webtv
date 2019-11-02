import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { channels } from '../models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsMenuService {
  public urlChannels: string = 'http://91.121.64.179/tdt_project/output/channels.json';
  public channelsToMenu: channels[];
  constructor(private http: HttpClient) { }
 
  public getAllChannels() {
    return this.http.get(this.urlChannels);
  }

  public async processChannelInfo(data:any):Promise<channels[]>{
    let spainChannels =  data.countries[0]
    let ambitos = spainChannels.ambits
    let generalistas = ambitos[0].channels;
    this.channelsToMenu = generalistas;


    // let prueba = this.channelsToMenu
    //                  .filter( 
    //                           a=>{
    //                             return a.options.filter(
    //                                b=>{
    //                                   this.tryConexion( b.url).then(
    //                                     a=> { 

    //                                       return a.subscribe(
    //                                         b=> {
    //                                           console.log(b)
    //                                           debugger;
    //                                         },
    //                                         err=>{
    //                                           debugger;
    //                                           return err.status === 200
    //                                         }
    //                                       )
                                          
    //                                       },
                                          
                                        
    //                                   )
         
    //                                       }
    //                               ) 
    //                             }  
    //                           )
      

    return   this.channelsToMenu
    // .filter( 
    //          a=>{
    //            return a.options.filter(
    //               b=>{
    //                  return this.tryConexion( b.url).then(
    //                    a=> { 

    //                      return a.subscribe(
    //                        b=> {
    //                          console.log(b)
    //                          debugger;
    //                        },
    //                        err=>{
    //                          debugger;
    //                          return err.status === 200
    //                        }
    //                      )
                         
    //                      },
                         
                       
    //                  )

    //                      }
    //              ) 
    //            }  
    //          )
  }
  public async tryConexion(url:string){
    return await this.http.get(url)
  }
}
