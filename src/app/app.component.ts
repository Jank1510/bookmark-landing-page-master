import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmark-landing-page-master';
  img: any
  titulo: any
  texto: any
  disenoIMG: any
  borderBtnLinea1: any
  paddingBtnLinea1: any
  borderBtnLinea2: any
  paddingBtnLinea2: any
  borderBtnLinea3: any
  paddingBtnLinea3: any
  visible1: any = 'none'
  visible2: any = 'none'
  visible3: any = 'none'
  visible4: any = 'none'
  nameAnimation1: any
  nameAnimation2: any
  nameAnimation3: any
  nameAnimation4: any
  email: any
  borderRojo:any
  ocultarMensajeerror:any
  imagenError:any
  desplegar:any =false
  nameAnimation:any

  constructor() {
    this.titulo = "Bookmark in one click"
    this.texto = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    this.img = "../assets/illustration-features-tab-1.svg"
    this.disenoIMG = '100px'
    this.borderBtnLinea1 = 'hsl(0, 94%, 66%) solid 4px'
    this.borderBtnLinea2 = 'hsl(229, 8%, 60%) solid 2px'
    this.borderBtnLinea3 = 'hsl(229, 8%, 60%) solid 2px'
    this.paddingBtnLinea1 = '23px'
    this.paddingBtnLinea2 = '25px'
    this.paddingBtnLinea3 = '25px'
  }

  btnFeatures1() {
    this.titulo = "Bookmark in one click"
    this.texto = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    this.img = "../assets/illustration-features-tab-1.svg"
    this.disenoIMG = '100px'
    this.borderBtnLinea1 = 'hsl(0, 94%, 66%) solid 4px'
    this.borderBtnLinea2 = 'hsl(229, 8%, 60%) solid 2px'
    this.borderBtnLinea3 = 'hsl(229, 8%, 60%) solid 2px'
    this.paddingBtnLinea1 = '23px'
    this.paddingBtnLinea2 = '25px'
    this.paddingBtnLinea3 = '25px'
  }
  btnFeatures2() {
    this.titulo = "Intelligent search"
    this.texto = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    this.img = "../assets/illustration-features-tab-2.svg"
    this.disenoIMG = '231px'
    this.borderBtnLinea1 = 'hsl(229, 8%, 60%) solid 2px'
    this.borderBtnLinea2 = 'hsl(0, 94%, 66%) solid 4px'
    this.borderBtnLinea3 = 'hsl(229, 8%, 60%) solid 2px'
    this.paddingBtnLinea1 = '25px'
    this.paddingBtnLinea2 = '23px'
    this.paddingBtnLinea3 = '25px'

  }
  btnFeatures3() {
    this.titulo = "Share your bookmarks"
    this.texto = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    this.img = "../assets/illustration-features-tab-3.svg"
    this.disenoIMG = '231px'
    this.borderBtnLinea1 = 'hsl(229, 8%, 60%) solid 2px'
    this.borderBtnLinea2 = 'hsl(229, 8%, 60%) solid 2px'
    this.borderBtnLinea3 = 'hsl(0, 94%, 66%) solid 4px'
    this.paddingBtnLinea1 = '25px'
    this.paddingBtnLinea2 = '25px'
    this.paddingBtnLinea3 = '23px'
  }
  WhatIsBookmark() {
    if (this.visible1 === 'block') {
      this.visible1 = 'none'
      this.nameAnimation1='flechitaArribaAbajo'
    } else {
      if (this.visible1 === 'none') {
        this.visible1 = 'block'
      this.nameAnimation1='flechitabaAbajoArriba'
      }
    }
  }
  HowCanBrowser() {
    if (this.visible2 === 'block') {
      this.visible2 = 'none'
      this.nameAnimation2='flechitaArribaAbajo'
    } else {
      if (this.visible2 === 'none') {
        this.visible2 = 'block'
      this.nameAnimation2='flechitabaAbajoArriba'
      }
    }
  }
  IsThereApp() {
    if (this.visible3 === 'block') {
      this.visible3 = 'none'
      this.nameAnimation3='flechitaArribaAbajo'
    } else {
      if (this.visible3 === 'none') {
        this.visible3 = 'block'
      this.nameAnimation3='flechitabaAbajoArriba'
      }
    }
  }
  WhatAboutBrowsers() {
    if (this.visible4 === 'block') {
      this.visible4 = 'none'
      this.nameAnimation4='flechitaArribaAbajo'
    } else {
      if (this.visible4 === 'none') {

        this.visible4 = 'block'
      this.nameAnimation4='flechitabaAbajoArriba'
      }
    }
  }
  validateEmail(email:any) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
   }
  Contactanos(){
    if(this.validateEmail(this.email)===false){
      this.imagenError='visible'
      this.ocultarMensajeerror='block'
      this.borderRojo='4px solid hsl(0, 94%, 66%)'
    }

  }
  quitarTodo(){
    this.ocultarMensajeerror='none'
    this.imagenError='hidden'
    this.borderRojo='4px solid white'
  }
  MenuTelefono(){
    this.nameAnimation='abrirNav'
    this.desplegar=true
  }
  cerrarNav(){
    this.nameAnimation='cerrarNav'
    this.desplegar=false
    
  }
}

